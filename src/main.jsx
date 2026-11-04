import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Menu, X, Code2, Cpu, Sparkles, ExternalLink, MapPin, ChevronDown, Database, Layers, TerminalSquare, Zap, Check, Send, Globe2, ShieldCheck, Blocks, BrainCircuit, Bot, Server, Download, MousePointer2, Cloud, Workflow, FileCode2, Braces, Boxes, GitBranch, Network, Palette, CircuitBoard, HardDrive, Laptop, Box, Settings2 } from 'lucide-react';
import './styles.css';
import './motion.css';
import ReactorMotion from './ReactorMotion.jsx';
import FaceImpulse from './FaceImpulse.jsx';
// CUSTOMIZE: Edit this block to update your real information.
const person = {
  name: 'Abdul Rehman',
  firstName: 'ABDUL', lastName: 'REHMAN',
  role: 'AI AUTOMATION ENGINEER & FULL-STACK DEVELOPER',
  location: 'Pakistan · Remote Worldwide',
  email: '', // Add your actual contact email before publishing
  github: 'https://github.com/abdulrehmanabdul0303-dotcom',
  linkedin: '', // Add your real LinkedIn URL
  resume: '', // Add /resume.pdf after adding that file to public/
};
const techGroups = [
 {name:'All', items:['React','Next.js','TypeScript','Python','FastAPI','Node.js','PostgreSQL','Tailwind','Docker','LangChain','RAG','Git']},
 {name:'Frontend',items:['React','Next.js','TypeScript','Tailwind','JavaScript','HTML / CSS']},
 {name:'Backend',items:['Python','FastAPI','Node.js','PostgreSQL','REST APIs','Docker']},
 {name:'AI & Tools',items:['LangChain','RAG','LLM Apps','AI Agents','Git','GitHub']},
];
const projects = [
 {id:'01',title:'CSVUndo',category:'Web App',tags:['React','Data Tools','Privacy'],description:'Privacy-first CSV processing and repair, designed for clarity and control.',visual:'csv',live:'',github:'',featured:true},
 {id:'02',title:'Mizan ERP',category:'Full Stack',tags:['SaaS','Dashboard','Business'],description:'An organized multi-tenant business management concept for modern workflows.',visual:'erp',live:'',github:'',featured:true},
 {id:'03',title:'RAG AI Assistant',category:'AI / ML',tags:['Python','RAG','LangChain'],description:'A knowledge-grounded AI chatbot concept powered by retrieval and intelligent workflows.',visual:'ai',live:'',github:'',featured:true},
 {id:'04',title:'Automation Lab',category:'AI / ML',tags:['AI Agents','Automation'],description:'Experiments in purposeful automations and human-centered AI applications.',visual:'automation',live:'',github:'',featured:false},
];
const filters = ['All Projects','Web App','Full Stack','AI / ML'];
const skillsIcons = {
  'React': { Icon: CircuitBoard, color:'#67e8f9' },
  'Next.js': { Icon: Boxes, color:'#ededfa' },
  'TypeScript': { Icon: Braces, color:'#7fb1ff' },
  'JavaScript': { Icon: FileCode2, color:'#f1d564' },
  'HTML / CSS': { Icon: Palette, color:'#fb947c' },
  'Tailwind': { Icon: Palette, color:'#55e5d1' },
  'Python': { Icon: TerminalSquare, color:'#ffd575' },
  'FastAPI': { Icon: Zap, color:'#56e8bc' },
  'Node.js': { Icon: Network, color:'#95d67f' },
  'PostgreSQL': { Icon: Database, color:'#87b6fd' },
  'REST APIs': { Icon: Workflow, color:'#daabff' },
  'Docker': { Icon: Box, color:'#76baff' },
  'LangChain': { Icon: GitBranch, color:'#c6a5ff' },
  'RAG': { Icon: BrainCircuit, color:'#7ae7ff' },
  'LLM Apps': { Icon: BrainCircuit, color:'#b992ff' },
  'AI Agents': { Icon: Bot, color:'#a5f2f2' },
  'Git': { Icon: GitBranch, color:'#f98e7d' },
  'GitHub': { Icon: Github, color:'#e3e3f5' }
};
const hasEmail = Boolean(person.email && !person.email.includes('example.com'));

function IconLink({href,children,className='',label}){return href ? <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a> : null}
function Starfield(){
 const ref=useRef(null);
 useEffect(()=>{const canvas=ref.current,ctx=canvas?.getContext('2d');if(!ctx)return;let stars=[],frame, w=0,h=0,scale=1;const motion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const resize=()=>{scale=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=Math.max(window.innerHeight,900);canvas.width=w*scale;canvas.height=h*scale;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(scale,0,0,scale,0,0);stars=Array.from({length:Math.min(220,Math.round(w*h/5400))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5+.25,o:Math.random()*.7+.1,phase:Math.random()*7}))};
 const draw=(t)=>{ctx.clearRect(0,0,w,h);for(const s of stars){ctx.beginPath();ctx.fillStyle=`rgba(185,218,255,${Math.min(.95,s.o+(motion?0:Math.sin(t*.00055+s.phase)*.12))})`;ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}if(!motion)frame=requestAnimationFrame(draw)};
 resize();window.addEventListener('resize',resize);frame=requestAnimationFrame(draw);return()=>{window.removeEventListener('resize',resize);cancelAnimationFrame(frame)}},[]);
 return <canvas ref={ref} className="starfield" aria-hidden="true"/>;
}
function Navbar(){const [open,setOpen]=useState(false);const links=['About','Skills','Projects','Contact'];return <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation"><a href="#home" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">A<span>R</span><i>.</i></span><span className="brand-caption">DEVELOPER / AI</span></a><div className={'nav-links '+(open?'is-open':'')}>{links.map(l=><a key={l} href={'#'+l.toLowerCase()} onClick={()=>setOpen(false)}>{l}</a>)}<a className="nav-mobile-contact" href="#contact">Get in touch <ArrowUpRight size={15}/></a></div><div className="nav-actions"><a className="availability" href="#contact"><span className="pulse-dot"/>Open to conversations</a><a className="nav-cta" href="#contact">LET'S TALK <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button></div></nav></header>}
function Orbit(){const wrap=useRef(null);useEffect(()=>{const el=wrap.current;if(!el)return;const move=e=>{const b=el.getBoundingClientRect();const dx=(e.clientX-(b.left+b.width/2))/b.width;const dy=(e.clientY-(b.top+b.height/2))/b.height;el.style.setProperty('--mx',(dx*14)+'deg');el.style.setProperty('--my',(-dy*14)+'deg')};const reset=()=>{el.style.setProperty('--mx','0deg');el.style.setProperty('--my','0deg')};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);return()=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset)}},[]);return <div className="orbit-stage" ref={wrap} aria-label="Decorative animated neon orbital sphere"><div className="orbit-aura"/><div className="orbit-scene"><div className="orbit-back orbit-ring"/><div className="orbit-ring orbit-ring-outer"/><div className="orbit-ring orbit-ring-tall"/><div className="planet"><div className="planet-specular"/><div className="planet-shadow"/></div><div className="orbit-ring orbit-ring-front"/><div className="orbit-highlight"/></div><span className="orbit-flare flare-a"/><span className="orbit-flare flare-b"/><span className="orbit-label label-one">01 / INTELLIGENCE</span><span className="orbit-label label-two">INTERACTIVE SYSTEM</span></div>}
function TerminalCard(){const [cmd,setCmd]=useState('whoami');const data={whoami:['> abdulrehman','AI engineer & full-stack developer','Building useful, beautiful software.'],stack:['> cat stack.json','React · Next.js · TypeScript','Python · FastAPI · AI / RAG'],status:['> check --availability','● Open to collaborations','Remote · Worldwide']};return <div className="terminal-card"><div className="terminal-top"><div className="traffic"><b/><b/><b/></div><span>abdul@portfolio: ~</span><TerminalSquare size={16}/></div><div className="terminal-body"><div className="terminal-prompt">$ <span>{cmd}</span><span className="terminal-cursor">_</span></div>{data[cmd].map((line,i)=><p className={i===1&&cmd==='status'?'green':''} key={line}>{line}</p>)}<div className="terminal-switch">{Object.keys(data).map(c=><button key={c} className={cmd===c?'active':''} onClick={()=>setCmd(c)}>{c}</button>)}</div></div></div>}
function Hero(){return <section className="hero shell" id="home"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-rule"/> HELLO, WORLD <span className="tiny-star">✦</span> WELCOME TO MY UNIVERSE</div><div className="hero-heading"><div>BUILDING THE</div><div className="hero-gradient">NEXT <span>GENERATION</span></div><div>OF DIGITAL.</div></div><p className="hero-lead">I'm <strong>Abdul Rehman</strong> — an AI automation engineer & full-stack developer turning bold ideas into intelligent digital experiences.</p><div className="hero-buttons"><a className="btn btn-primary" href="#projects">EXPLORE MY WORK <ArrowUpRight size={17}/></a><a className="btn btn-outline" href="#contact">LET'S CONNECT <ArrowRight size={17}/></a></div><div className="hero-social"><span>FIND ME ON</span><IconLink href={person.github} label="GitHub"><Github size={19}/></IconLink><IconLink href={person.linkedin} label="LinkedIn"><Linkedin size={19}/></IconLink>{hasEmail && <a href={`mailto:${person.email}`} aria-label="Email"><Mail size={19}/></a>}<span className="social-rule"/><span>SCROLL TO EXPLORE</span><ChevronDown size={15} className="scroll-chevron"/></div></div><div className="hero-art"><div className="hero-3d-container"><ReactorMotion /></div></div><div className="hero-bottom-line"><span>01 // INTRODUCTION</span><span>DESIGN × CODE × INTELLIGENCE</span></div></section>}
function SectionTitle({num,kicker,title,accent,description}){return <div className="section-header"><div><div className="section-kicker"><span>{num}</span> / {kicker}</div><h2>{title} <em>{accent}</em></h2></div>{description&&<p>{description}</p>}</div>}
function About(){return <section className="cyber-about section shell" id="about">
  <div className="cyber-about-visual">
    <FaceImpulse />
  </div>
  <div className="cyber-about-content">
    <span className="cyber-eyebrow"><span>02</span> / THE PERSON BEHIND THE CODE</span>
    <h2>Architecting<br/><span>Intelligent</span><br/>Experiences.</h2>
    <div className="cyber-line" aria-hidden="true"/>
    <h3>Hey, I'm Abdul Rehman.</h3>
    <p className="cyber-role">AI Automation Engineer &amp; Full-Stack Developer</p>
    <p>I'm an AI Automation Engineer and Full-Stack Developer passionate about building intelligent, scalable and visually powerful digital products.</p>
    <p>From AI agents and RAG-powered chatbots to SaaS platforms and modern web applications, I transform ambitious ideas into real-world solutions.</p>
    <div className="cyber-about-tags" aria-label="Areas of expertise">
      <span>AI &amp; LLMs</span><span>Full-Stack</span><span>Automation</span><span>SaaS</span>
    </div>
    <a href="#projects" className="cyber-about-button">Explore My Work <ArrowUpRight size={17}/></a>
  </div>
</section>}
function SkillSection(){const [active,setActive]=useState(0);return <section className="section shell" id="skills"><SectionTitle num="03" kicker="MY TOOLKIT" title="THE TECH" accent="BEHIND IT." description="A carefully chosen toolkit to bring ambitious ideas to life."/><div className="skill-shell glass-panel"><div className="skill-tabs" role="tablist" aria-label="Technology category">{techGroups.map((g,i)=><button role="tab" aria-selected={active===i} key={g.name} className={active===i?'selected':''} onClick={()=>setActive(i)}>{g.name}</button>)}</div><div className="skill-grid">{techGroups[active].items.map((s,i)=><div className="skill-item" key={s} style={{'--d':`${i*35}ms`}}><div className="skill-icon" style={{color: skillsIcons[s]?.color || '#b49bff'}}>{React.createElement(skillsIcons[s]?.Icon || Code2, {size:26, strokeWidth:1.7})}</div><span>{s}</span></div>)}</div><div className="skill-foot"><span><span className="glow-dot"/> ALWAYS LEARNING. ALWAYS BUILDING.</span><span>EXPLORING WHAT'S NEXT <ArrowUpRight size={15}/></span></div></div></section>}
function ProjectVisual({type}){if(type==='csv')return <div className="project-visual preview-csv"><div className="preview-window"><div className="preview-titlebar"><span className="dot-row"><i/><i/><i/></span><span>CSVUNDO / DATA WORKSPACE</span><span>↗</span></div><div className="csv-toolbar"><b>Data Studio</b><span>IMPORT · TRANSFORM · EXPORT</span></div><div className="csv-columns"><span>FILE NAME</span><span>ROWS</span><span>STATUS</span></div>{['customers_2026.csv','products.csv','transactions.csv'].map((n,i)=><div className="csv-row" key={n}><span><Database size={13}/>{n}</span><span>{['2,450','1,032','8,621'][i]}</span><small>✓ Clean</small></div>)}<div className="csv-bottom"><div/><div/><div/></div></div><div className="visual-glow"/></div>;
 if(type==='erp')return <div className="project-visual preview-erp"><div className="erp-window"><div className="erp-side"><b>M.</b>{[Layers,Database,ShieldCheck,Blocks].map((I,i)=><I key={i} size={15}/>)}</div><div className="erp-content"><div className="erp-header">Dashboard concept <span>● Demo data</span></div><div className="erp-metrics"><div><small>SAMPLE REVENUE</small><b>$84,240</b><i>↗ 14.8%</i></div><div><small>SAMPLE CLIENTS</small><b>1,284</b><i>↗ 8.2%</i></div></div><div className="erp-chart">{[28,46,40,65,52,82,68,92,78,100].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div><div className="erp-bars"><span/><span/><span/></div></div></div><div className="visual-glow"/></div>;
 if(type==='ai')return <div className="project-visual preview-ai"><div className="ai-ring"><div className="ai-core"><BrainCircuit size={63} strokeWidth={1}/></div></div><div className="ai-micro micro-one">RETRIEVAL</div><div className="ai-micro micro-two">KNOWLEDGE</div><div className="ai-micro micro-three">REASONING</div><div className="visual-glow"/></div>;
 return <div className="project-visual preview-auto"><div className="auto-network"><div className="auto-center"><Zap size={48}/></div>{[Bot,Mail,Server,Database].map((Ic,i)=><span key={i} className={'auto-node node-'+i}><Ic size={21}/></span>)}</div><div className="visual-glow"/></div>}
function Projects(){const [filter,setFilter]=useState('All Projects');const visible=projects.filter(p=>filter==='All Projects'||p.category===filter);return <section className="section projects-section" id="projects"><div className="shell"><SectionTitle num="04" kicker="SELECTED WORK" title="PROJECTS THAT" accent="SPEAK." description="A look at things I'm building, exploring, and bringing to life."/><div className="filter-bar" role="group" aria-label="Project filter">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="projects-grid">{visible.map((p)=><article className="project-card" key={p.id}><div className="project-image"><ProjectVisual type={p.visual}/><span className="project-number">/{p.id}</span><span className="project-cat">{p.category}</span></div><div className="project-info"><div><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-actions">{p.live?<IconLink href={p.live} label={`View live ${p.title}`} className="project-arrow"><ArrowUpRight size={20}/></IconLink>:<span className="project-notice" title="Project demo link not available yet">CONCEPT PREVIEW</span>}{p.github&&<IconLink href={p.github} label={`${p.title} GitHub`} className="project-gh"><Github size={17}/></IconLink>}</div></div></article>)}</div><div className="projects-footer"><span>HAVE A PROJECT IN MIND?</span><a href="#contact">LET'S MAKE IT REAL <ArrowUpRight size={16}/></a></div></div></section>}
function FeatureGrid(){const features=[{icon:BrainCircuit,label:'01 / INTELLIGENCE',title:'AI WITH PURPOSE',desc:'Intelligent automations and helpful tools grounded in actual needs.',cls:'feature-ai'},{icon:MousePointer2,label:'02 / EXPERIENCE',title:'DESIGN THAT FEELS',desc:'Interfaces built for people, with delightful details and careful polish.',cls:'feature-ux'},{icon:Layers,label:'03 / ENGINEERING',title:'BUILT TO SCALE',desc:'Thoughtful architecture, clean code, and strong technical foundations.',cls:'feature-eng'},{icon:ShieldCheck,label:'04 / RELIABILITY',title:'MADE TO LAST',desc:'Performance, accessibility, and maintainability from the beginning.',cls:'feature-sec'}];return <section className="section shell features-section"><SectionTitle num="05" kicker="HOW I WORK" title="BUILT WITH" accent="INTENTION."/><div className="feature-grid">{features.map((f,i)=><div className={`feature-box glass-panel ${f.cls}`} key={f.title}><div className="feature-top"><span>{f.label}</span><f.icon size={21}/></div><div className={'feature-illustration ill-'+i}><f.icon size={75} strokeWidth={1}/></div><h3>{f.title}</h3><p>{f.desc}</p></div>)}</div></section>}
function Contact(){const [submitted,setSubmitted]=useState(false);const [name,setName]=useState('');const [email,setEmail]=useState('');const [message,setMessage]=useState('');function submit(e){e.preventDefault();if(!hasEmail)return;const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);const body=encodeURIComponent(`From: ${name} (${email})\n\n${message}`);window.location.href=`mailto:${person.email}?subject=${subject}&body=${body}`;setSubmitted(true)}return <section className="section contact-section" id="contact"><div className="shell"><div className="contact-head"><span>06 / NEXT CHAPTER</span><h2>HAVE AN IDEA?<br/><em>LET'S CREATE.</em></h2><p>Great things begin with a conversation. Have a challenge, idea, or collaboration in mind? I'm all ears.</p></div><div className="contact-card glass-panel"><div className="contact-left"><div className="contact-status"><span className="pulse-dot"/> OPEN TO COLLABORATIONS</div><h3>Let's make something<br/><span>extraordinary.</span></h3><p>Whether it's a product, an AI integration, or a bold new idea — I'd love to hear about it.</p><div className="contact-direct"><Mail size={19}/>{hasEmail?<a href={`mailto:${person.email}`}>{person.email}</a>:<span>Email available on request</span>}</div><div className="contact-direct"><MapPin size={19}/><span>{person.location}</span></div><div className="contact-social"><IconLink href={person.github} className="social-circle" label="GitHub"><Github size={21}/></IconLink><IconLink href={person.linkedin} className="social-circle" label="LinkedIn"><Linkedin size={21}/></IconLink>{hasEmail&&<a className="social-circle" href={`mailto:${person.email}`} aria-label="Email"><Mail size={21}/></a>}</div></div><form className="contact-form" onSubmit={submit}><label htmlFor="contact-name">YOUR NAME</label><input id="contact-name" placeholder="How should I call you?" required value={name} onChange={e=>setName(e.target.value)}/><label htmlFor="contact-email">YOUR EMAIL</label><input id="contact-email" type="email" placeholder="you@example.com" required value={email} onChange={e=>setEmail(e.target.value)}/><label htmlFor="contact-message">TELL ME ABOUT YOUR PROJECT</label><textarea id="contact-message" placeholder="Let's talk about your idea..." rows={5} required value={message} onChange={e=>setMessage(e.target.value)}/><button type="submit" disabled={!hasEmail} className="btn btn-primary form-submit">{hasEmail?'OPEN EMAIL DRAFT':'CONTACT SETUP REQUIRED'} <Send size={17}/></button>{submitted&&<p className="form-note">Your email app should open with a draft. Please send it from there.</p>}<span className="form-small">{hasEmail?'Opens your email app. No messages are stored on this site.':'Site owner: configure the email address in src/main.jsx to enable the form.'}</span></form></div><footer className="footer"><div className="footer-brand">AR<span>.</span> <small>DESIGN × CODE × INTELLIGENCE</small></div><span>© {new Date().getFullYear()} ABDUL REHMAN. BUILT WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a></footer></div></section>}
function MotionReveals(){
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const elements=document.querySelectorAll('.section-header, .cyber-about-content, .cyber-about-visual, .skill-shell, .project-card, .feature-box, .contact-card');
  elements.forEach(el=>{el.dataset.motionReveal='';el.classList.add('motion-ready')});
  const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');io.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  elements.forEach(el=>io.observe(el));
  return()=>{io.disconnect();elements.forEach(el=>{el.classList.remove('motion-ready','motion-visible');delete el.dataset.motionReveal})};
 },[]);
 return null;
}
function App(){return <><div className="ambient-bg" aria-hidden="true"/><Starfield/><MotionReveals/><Navbar/><main><Hero/><div className="section-divider shell"><span>✳</span><span>SCROLL TO DISCOVER</span><span>✳</span></div><About/><SkillSection/><Projects/><FeatureGrid/><Contact/></main></>}

createRoot(document.getElementById('root')).render(<App/>);
