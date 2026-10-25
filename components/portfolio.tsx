'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDown, Menu, X, ArrowRight, Plus, Minus } from 'lucide-react';
import { profile, identity } from '@/lib/profile';
import { featuredProduct } from '@/lib/products';

export function Navigation() {
 const path = usePathname(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{ const scroll=()=>setScrolled(window.scrollY>20); scroll(); window.addEventListener('scroll',scroll,{passive:true}); return()=>window.removeEventListener('scroll',scroll); },[]);
 useEffect(()=>{setOpen(false);},[path]);
 const links=[['Home','/'],['About','/about/'],['Experience','/experience/'],['Skills','/#skills'],['Contact','/contact/']];
 return <header className={`navigation ${scrolled?'scrolled':''}`}><Link className="wordmark" href="/" aria-label="Logann Tuttle home"><span className="brand-icon">lt<span>↗</span></span><span>Logann Tuttle<span className="wordmark-dot">.</span></span></Link><nav aria-label="Main navigation" className={open?'navlinks open':'navlinks'}>{links.map(([label,href])=><Link key={label} onClick={()=>setOpen(false)} className={path===href?'active':''} href={href}>{label}</Link>)}</nav><Link className="nav-contact" href="/contact/">Let’s talk <ArrowUpRight size={14}/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></header>;
}
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){ const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.7,ease:[.2,.7,.2,1]}}>{children}</motion.div>; }
export function Action({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){const reduced=useReducedMotion();const [pos,setPos]=useState({x:0,y:0});return <motion.a href={href} className={`button ${secondary?'secondary':''}`} animate={pos} onPointerMove={e=>{if(reduced||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();setPos({x:(e.clientX-r.left-r.width/2)*.08,y:(e.clientY-r.top-r.height/2)*.12});}} onPointerLeave={()=>setPos({x:0,y:0})}>{children}<ArrowUpRight size={17}/></motion.a>;}
export function Sculpture(){const ref=useRef<HTMLDivElement>(null);return <div className="sculpture" aria-hidden="true" onPointerMove={e=>{if(!ref.current||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect(); ref.current.style.setProperty('--rx',`${(e.clientY-r.top-r.height/2)*.025}deg`);ref.current.style.setProperty('--ry',`${(e.clientX-r.left-r.width/2)*.025}deg`);}} onPointerLeave={()=>{ref.current?.style.setProperty('--rx','0deg');ref.current?.style.setProperty('--ry','0deg');}}><div className="orbital-stage" ref={ref}><div className="orbital-object">{Array.from({length:27},(_,i)=><i key={i} style={{transform:`rotateY(${i*6.666}deg) rotateX(28deg)`}}/>)}<div className="orb-core"/></div></div><div className="object-caption"><span className="tiny-cross">+</span> IDEAS INTO IMPACT <span className="caption-line"/> 01 / ∞</div><span className="coordinate">ANALYZE · BUILD · REFINE</span></div>;}
export function Hero(){return <section className="hero" id="home"><div className="hero-grid"/><div className="hero-content"><Reveal><div className="eyebrow"><span className="status-dot"/> AT THE INTERSECTION OF DATA & DEVELOPMENT</div><h1>LOGANN<br/><span>TUTTLE</span><span className="name-period">.</span></h1><h2>{profile.headline}</h2><p>{profile.statement}</p><div className="actions"><Action href="#experience">Explore My Experience</Action><Action href="/contact/" secondary>Get In Touch</Action></div></Reveal></div><Sculpture/><div className="hero-bottom"><a href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a><span>THOUGHTFUL SOLUTIONS. MEANINGFUL IMPACT.</span><span>PORTFOLIO / V.01</span></div></section>;}
export function SectionLabel({number,children}:{number:string;children:React.ReactNode}){return <div className="section-label"><span>{number} /</span>{children}</div>;}
export function Skills(){const [active,setActive]=useState(0);return <section className="section skills" id="skills"><Reveal><SectionLabel number="03">A CONNECTED SKILL SET</SectionLabel><div className="skills-grid"><div><h2>Different disciplines.<br/><span className="muted">One problem-solving<br/>mindset.</span></h2><p className="skills-intro">The best solution rarely fits inside one box.<br/>I connect the dots between data, tools, and people.</p><div className="skill-symbol" aria-hidden="true"><span>+</span><span>↗</span><span>⌁</span></div></div><div className="skill-accordion">{profile.skills.map((skill,i)=><div className={`skill-item ${active===i?'selected':''}`} key={skill.name}><h3><button aria-expanded={active===i} aria-controls={`skill-${i}`} onClick={()=>setActive(active===i?-1:i)}><span className="skill-number">0{i+1}</span>{skill.name}{active===i?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div id={`skill-${i}`} hidden={active!==i}><p>{skill.summary}</p><div className="tags">{skill.items.map(s=><span key={s}>{s}</span>)}</div></div></div>)}</div></div></Reveal></section>;}
export function ContactSection({page=false}:{page?:boolean}) {
  const Heading = page ? 'h1' : 'h2';
  const links = [
    { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '', external: false },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
    { label: featuredProduct.name, href: featuredProduct.websiteUrl, external: true },
  ].filter(link => link.href);
  return <section className={`section contact v2-contact ${page?'contact-page':''}`} id="contact" aria-labelledby="contact-heading"><Reveal>
    <SectionLabel number="06">THE NEXT CONVERSATION</SectionLabel>
    <Heading id="contact-heading">{identity.contact.heading}<ArrowUpRight className="contact-arrow" aria-hidden="true"/></Heading>
    <div className="contact-bottom"><p>{identity.contact.description}</p><div className="social-links">{links.map(link=><a key={link.label} href={link.href} target={link.external?'_blank':undefined} rel={link.external?'noopener noreferrer':undefined}>{link.label}<ArrowUpRight size={17} aria-hidden="true"/>{link.external&&<span className="sr-only"> (opens in a new tab)</span>}</a>)}</div></div>
    {profile.resumePath&&<div className="resume-actions"><a href={profile.resumePath} className="button" target="_blank" rel="noopener noreferrer">View Résumé<ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.resumePath} download="Logann_Tuttle_Resume.pdf" className="text-link">Download Résumé<ArrowDown size={16} aria-hidden="true"/></a></div>}
    {!page&&<Link href="/contact/" className="text-link">Contact & connections <ArrowRight size={16}/></Link>}
  </Reveal></section>;
}
export function Footer(){return <footer><Link className="footer-name" href="/">Logann Tuttle<span className="cyan">.</span></Link><span>DATA. DEVELOPMENT. POSSIBILITY.</span><a href="#main">BACK TO TOP ↑</a></footer>;}
