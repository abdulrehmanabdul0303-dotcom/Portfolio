import React, { useEffect, useRef, useState } from 'react';

// A live, shader-rendered 3D sphere and torus rings. No external WebGL libraries needed.
const vertexSource = `
attribute vec2 position;
void main(){ gl_Position = vec4(position,0.0,1.0); }
`;
const fragmentSource = `
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
#define MAX_STEPS 66
#define MAX_DIST 9.0
#define EPS .0025
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float sdTorus(vec3 p, vec2 t){vec2 q=vec2(length(p.xz)-t.x,p.y);return length(q)-t.y;}
vec2 scene(vec3 p){
  vec3 q=p; q.xz=rot(uTime*.14+uMouse.x*.27)*q.xz;
  float globe=length(q)-.91;
  vec3 a=p; a.xy=rot(-.47)*a.xy; a.yz=rot(.95+sin(uTime*.22)*.06+uMouse.y*.18)*a.yz;
  float ring=sdTorus(a,vec2(1.38,.052));
  vec3 b=p; b.xz=rot(.6+uTime*.11)*b.xz; b.yz=rot(-.60)*b.yz;
  float ring2=sdTorus(b,vec2(1.47,.019));
  vec3 c=p; c.xy=rot(.78-uTime*.09)*c.xy; c.yz=rot(.54)*c.yz;
  float ring3=sdTorus(c,vec2(1.25,.014));
  vec2 res=vec2(globe,1.);
  if(ring<res.x) res=vec2(ring,2.);
  if(ring2<res.x)res=vec2(ring2,3.);
  if(ring3<res.x)res=vec2(ring3,4.);
  return res;
}
vec3 normal(vec3 p){vec2 e=vec2(.003,0.);return normalize(vec3(scene(p+e.xyy).x-scene(p-e.xyy).x,scene(p+e.yxy).x-scene(p-e.yxy).x,scene(p+e.yyx).x-scene(p-e.yyx).x));}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uResolution)/uResolution.y;
  vec3 ro=vec3(uMouse.x*.1,-uMouse.y*.08,4.15);
  vec3 rd=normalize(vec3(uv.x,uv.y,-2.13));
  vec3 col=vec3(0.0);float t=0.,id=0.;vec3 p=vec3(0.);
  for(int i=0;i<MAX_STEPS;i++){
    p=ro+rd*t;vec2 h=scene(p);
    if(h.x<EPS){id=h.y;break;}
    t+=max(h.x*.75,.011);if(t>MAX_DIST)break;
  }
  if(id>.5){
    vec3 n=normal(p);
    float diff=max(dot(n,normalize(vec3(-.7,.95,1.3))),0.);
    float rim=pow(1.-max(dot(n,-rd),0.),2.7);
    float spec=pow(max(dot(reflect(normalize(vec3(.8,-1.,-1.)),n),-rd),0.),18.);
    if(id<1.5){
      vec3 low=vec3(.035,.055,.23),high=vec3(.18,.46,1.0);
      col=mix(low,high,pow(diff,.6));
      col+=vec3(.16,.37,.9)*rim*.7;
      col+=vec3(.7,.9,1.)*spec*.48;
      float stripe=pow(max(sin(p.y*11.+p.z*4.-uTime*.5),0.),18.);
      col+=stripe*.042*vec3(.25,.55,1.);
    } else {
      float pink=id<2.5? .46 : (id<3.5? .93 : .68);
      vec3 cyan=vec3(.07,1.15,1.8),purple=vec3(.92,.16,1.6);
      col=mix(cyan,purple,pink)+diff*.55+rim*.8;
      col+=pow(max(dot(n,normalize(vec3(.4,.9,1.))),0.),9.)*.95;
    }
  }
  // Volumetric-looking bloom approximation from a softly glowing orbital halo.
  float ringHalo=abs(length(uv-vec2(0.,.012))-.62);
  col+=vec3(.20,.065,.50)*exp(-ringHalo*19.)*.11;
  float bloom=exp(-dot(uv,uv)*1.9);
  col+=vec3(.04,.025,.15)*bloom*.23;
  col=vec3(1.)-exp(-col*1.13);
  col=pow(col,vec3(.92));
  float alpha=clamp(max(max(col.r,col.g),col.b)*1.45,0.,1.);
  gl_FragColor=vec4(col,alpha);
}
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

export default function MotionOrb({ fallback }) {
  const canvasRef = useRef(null);
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, powerPreference: 'low-power' });
    if (!gl) { setSupported(false); return; }
    let program, vs, fs, buffer, raf = 0, visible = true, running = true;
    const pointer = [0, 0];
    let lastDraw = -1000;
    try {
      vs = compile(gl, gl.VERTEX_SHADER, vertexSource);
      fs = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram();
      gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(program, 'position'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    } catch (error) {
      console.warn('WebGL motion unavailable:', error);
      setSupported(false);
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      return;
    }
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uMouse = gl.getUniformLocation(program, 'uMouse');
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer[0] = ((event.clientX - rect.left) / rect.width - .5) * 2;
      pointer[1] = ((event.clientY - rect.top) / rect.height - .5) * 2;
    };
    const onLeave = () => { pointer[0] = 0; pointer[1] = 0; };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .01 });
    observer.observe(canvas);
    const tick = (time) => {
      if (!running) return;
      if (visible && !document.hidden && (reduced || time - lastDraw >= 32)) {
        lastDraw = time;
        const bounds = canvas.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? .8 : 1);
        const w = Math.max(1, Math.round(bounds.width * dpr));
        const h = Math.max(1, Math.round(bounds.height * dpr));
        if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
        gl.uniform2f(uResolution, w, h);
        gl.uniform2f(uMouse, pointer[0], pointer[1]);
        gl.uniform1f(uTime, reduced ? 0.0 : time * .001);
        gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES,0,6);
      }
      if (!reduced) raf = requestAnimationFrame(tick);
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      running = false; cancelAnimationFrame(raf); observer.disconnect();
      canvas.removeEventListener('pointermove', onMove); canvas.removeEventListener('pointerleave', onLeave);
      gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vs); gl.deleteShader(fs);
    };
  }, []);
  if (!supported) return fallback;
  return <div className="motion-orb" aria-label="Animated 3D glowing planet and orbital rings"><canvas ref={canvasRef} className="motion-orb-canvas" aria-hidden="true" /><span className="motion-orb-caption motion-caption-top">01 / INTELLIGENCE</span><span className="motion-orb-caption motion-caption-bottom">REAL-TIME 3D MOTION</span></div>;
}
