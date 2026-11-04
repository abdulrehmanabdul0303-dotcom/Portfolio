import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './AIReactor3D.css';

const LAB_IMAGE = '/Futuristic%20Orb%20Reactor%20Laboratory.png';

function EnergyCore() {
  const core = useRef();
  const outer = useRef();
  const texture = useTexture(LAB_IMAGE);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (core.current) {
      core.current.rotation.y += delta * 0.12;
      core.current.rotation.z += delta * 0.06;

      const pulse = 1 + Math.sin(t * 1.8) * 0.025;
      core.current.scale.setScalar(pulse);
    }

    if (outer.current) {
      outer.current.rotation.y -= delta * 0.1;
      outer.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group>
      {/* Main metallic glass sphere — lab image as cinematic surface map */}
      <mesh ref={core}>
        <icosahedronGeometry args={[1.35, 6]} />
        <meshPhysicalMaterial
          map={texture}
          color="#8eb0ff"
          metalness={0.7}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.08}
          emissive="#21116a"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Inner luminous wireframe */}
      <mesh ref={outer} scale={1.42}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#8c65ff"
          wireframe
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>

      {/* Center glow */}
      <mesh scale={1.355}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#2c74ff"
          transparent
          opacity={0.075}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function NeonRing({ radius, color, speed, rotation }) {
  const ring = useRef();

  useFrame((state, delta) => {
    if (ring.current) {
      ring.current.rotation.z += delta * speed;
    }
  });

  return (
    <group rotation={rotation}>
      <mesh ref={ring}>
        <torusGeometry args={[radius, 0.027, 16, 180]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {/* Secondary glow around ring */}
      <mesh>
        <torusGeometry args={[radius, 0.065, 12, 180]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.13}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function OrbitingNode({ color, radius, speed, offset }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;

    if (ref.current) {
      ref.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t) * radius * 0.55,
        Math.sin(t * 0.7) * 0.65
      );
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.065, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

function ReactorScene() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetX = state.pointer.y * 0.16;
    const targetY = state.pointer.x * 0.25;

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      2.5,
      delta
    );

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      2.5,
      delta
    );
  });

  return (
    <>
      <ambientLight intensity={0.55} />

      <pointLight
        position={[3, 3, 5]}
        color="#56ddff"
        intensity={40}
        distance={15}
      />

      <pointLight
        position={[-4, -2, 3]}
        color="#aa44ff"
        intensity={30}
        distance={12}
      />

      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.25}>
        <group ref={group}>
          <EnergyCore />

          <NeonRing
            radius={1.86}
            color="#50eaff"
            speed={0.17}
            rotation={[0.7, 0.3, 0.2]}
          />

          <NeonRing
            radius={2.08}
            color="#aa56ff"
            speed={-0.12}
            rotation={[1.0, -0.55, 0.5]}
          />

          <NeonRing
            radius={1.7}
            color="#f25aff"
            speed={0.2}
            rotation={[0.3, 1.1, -0.35]}
          />

          <OrbitingNode radius={2.1} speed={0.5} offset={0} color="#7af8ff" />
          <OrbitingNode radius={1.9} speed={-0.7} offset={2} color="#ef75ff" />
        </group>
      </Float>

      <Sparkles count={65} scale={[7, 7, 4]} size={2} speed={0.35} color="#8c9fff" />
    </>
  );
}

export default function AIReactor3D() {
  const [enabled] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  return (
    <div className="ai-reactor-wrapper">
      <div
        className="ai-reactor-lab-bg"
        style={{ backgroundImage: `url("${LAB_IMAGE}")` }}
        aria-hidden="true"
      />
      <div className="ai-reactor-aura" />

      <div className="ai-reactor-canvas">
        <Canvas
          camera={{
            position: [0, 0, 7.3],
            fov: 42,
          }}
          dpr={[1, 1.75]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
          }}
          frameloop={enabled ? 'always' : 'demand'}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
        >
          <Suspense fallback={null}>
            <ReactorScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="ai-reactor-label ai-reactor-label-one">
        <span className="ai-reactor-icon">✧</span>
        <div>
          <strong>AI SYSTEMS</strong>
          <small>Intelligent by design</small>
        </div>
      </div>

      <div className="ai-reactor-label ai-reactor-label-two">
        <span className="ai-reactor-icon">⌘</span>
        <div>
          <strong>FULL-STACK</strong>
          <small>Building the future</small>
        </div>
      </div>

      <div className="ai-reactor-top-text">01 / INTELLIGENCE</div>

      <div className="ai-reactor-bottom-text">
        <span className="reactor-live-dot" />
        REAL-TIME 3D EXPERIENCE
      </div>
    </div>
  );
}
