'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useReducedMotion, useScroll } from 'motion/react';
import { ArrowUpRight, Plus, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { identity, journey } from '@/lib/profile';
import { Reveal, SectionLabel } from '@/components/portfolio';

function CountUp({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const number = useRef<HTMLSpanElement>(null);
  const inView = useInView(number, { once: true, amount: 0.8 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: latest => { if (number.current) number.current.textContent = String(Math.round(latest)); },
    });
    return () => controls.stop();
  }, [inView, reducedMotion, value]);

  return <span aria-hidden="true">{prefix}<span ref={number}>{value}</span>{suffix}</span>;
}

export function ImpactSection() {
  const impact = identity.impact;
  return (
    <section className="section impact-section" id="impact" aria-labelledby="impact-heading">
      <Reveal>
        <SectionLabel number="02">PROFESSIONAL IMPACT</SectionLabel>
        <div className="section-heading impact-heading">
          <h2 id="impact-heading">{impact.heading}</h2><p>{impact.description}</p>
        </div>
      </Reveal>
      <div className="impact-metrics">
        {impact.metrics.map(metric => (
          <Reveal className="impact-metric" key={metric.unit}>
            <div className="impact-number"><CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} /><span className="sr-only">{metric.accessible}</span></div>
            <h3>{metric.unit}</h3><p className="metric-qualifier">{metric.qualifier}</p>
            <details className="impact-disclosure">
              <summary>Behind the contribution <Plus size={15} aria-hidden="true" /></summary>
              <div><h4>{metric.detailTitle}</h4><p>{metric.detail}</p></div>
            </details>
          </Reveal>
        ))}
      </div>
      <Reveal className="operations-note"><p>{impact.operationsTitle}</p><ul>{impact.operations.map(item => <li key={item}>{item}</li>)}</ul></Reveal>
    </section>
  );
}

export function CareerTimeline({ detailed = false }: { detailed?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: track, offset: ['start 70%', 'end 75%'] });
  const milestones = detailed ? journey : journey.filter(item => item.featured);
  const Heading = detailed ? 'h1' : 'h2';

  return (
    <section className="section career-section" id="experience" aria-labelledby="journey-heading">
      <Reveal>
        <SectionLabel number="03">CAREER & EDUCATION</SectionLabel>
        <div className="section-heading"><Heading id="journey-heading">A journey in progress<span className="cyan">.</span></Heading><p>Learning, contributing, and building.<br />One experience informing the next.</p></div>
        {detailed && <p className="timeline-note">Roles are ordered by their verified start dates, with my expected graduation as the next educational milestone. Select any milestone to explore the work.</p>}
      </Reveal>
      <div className="career-track" ref={track}>
        <div className="career-rail" aria-hidden="true"><motion.div className="career-progress" style={{ scaleY: reducedMotion ? 1 : scrollYProgress }} /></div>
        {milestones.map(item => (
          <Reveal key={item.id} className={`career-milestone career-${item.kind}`}>
            <div className="career-node" aria-hidden="true">{item.kind === 'education' ? <GraduationCap size={15} /> : <BriefcaseBusiness size={13} />}</div>
            <div className="career-date"><span>{item.period}</span><span className="career-kind">{item.kind === 'education' ? 'EDUCATION · EXPECTED' : 'PROFESSIONAL EXPERIENCE'}</span></div>
            <details className="career-details">
              <summary><span><span className="career-org">{item.organization}</span><span className="career-role">{item.title}</span>{item.kind === 'education' && <span className="deans-recognition">Dean’s List</span>}</span><Plus size={18} className="detail-toggle" aria-hidden="true" /></summary>
              <div className="career-detail-content"><p>{item.description}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div>
            </details>
          </Reveal>
        ))}
      </div>
      {!detailed && <Link href="/experience/" className="text-link career-more">See the complete journey <ArrowUpRight size={17} /></Link>}
    </section>
  );
}
