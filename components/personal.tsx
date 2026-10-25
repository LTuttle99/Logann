'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { identity, profile } from '@/lib/profile';
import { Reveal, SectionLabel } from '@/components/portfolio';

export function PersonalIntroduction({ detailed = false }: { detailed?: boolean }) {
  const content = identity.about;
  const Heading = detailed ? 'h1' : 'h2';
  return (
    <section className="section personal-introduction" id="about" aria-labelledby="about-heading">
      <Reveal><SectionLabel number="01">{content.eyebrow}</SectionLabel></Reveal>
      <div className="personal-intro-grid">
        <Reveal className="personal-intro-copy">
          <Heading id="about-heading">{content.heading.first}<br /><span className="muted">{content.heading.second}</span></Heading>
          <p className="personal-lead">{content.lead}</p><p>{profile.biography}</p>
          {!detailed && <Link className="text-link" href="/about/">The person behind the work <ArrowUpRight size={17} /></Link>}
          {detailed && <div className="about-narrative"><h2>{content.drivesTitle}</h2><p>{content.drives}</p></div>}
        </Reveal>
        <Reveal className="portrait-editorial">
          <figure>
            <div className="portrait-frame"><Image src={identity.portrait.src} alt={identity.portrait.alt} width={identity.portrait.width} height={identity.portrait.height} sizes="(max-width: 700px) 86vw, 32vw" loading="lazy" /></div>
            <figcaption><span>{profile.name}</span><span>DATA · DEVELOPMENT · CURIOSITY</span></figcaption>
          </figure>
        </Reveal>
      </div>
      {detailed && <Reveal className="about-narrative-columns">
        <div><h2>{content.journeyTitle}</h2><p>{content.journey}</p><Link className="text-link" href="/experience/">Explore my career & education <ArrowUpRight size={17} /></Link></div>
        <div><h2>{content.beyondTitle}</h2><p>{content.beyond}</p><Link className="text-link" href="/#beyond">Beyond the Screen <ArrowUpRight size={17} /></Link></div>
      </Reveal>}
    </section>
  );
}

export function BeyondTheScreen() {
  const { interests } = identity;
  return (
    <section className="section beyond-section" id="beyond" aria-labelledby="beyond-heading">
      <Reveal><SectionLabel number="05">BEYOND THE SCREEN</SectionLabel><div className="section-heading"><h2 id="beyond-heading">{interests.heading}</h2><p>{interests.description}</p></div></Reveal>
      <Reveal className="fitness-story">
        <div className="fitness-figure"><span className="eyebrow">{interests.fitness.qualifier}</span><div>{interests.fitness.figure}<span>lbs</span></div><p>{interests.fitness.unit} through my personal journey</p></div>
        <div className="fitness-narrative"><h3>{interests.fitness.title}</h3><p>{interests.fitness.description}</p><div className="fitness-values">{interests.fitness.values.map(value => <span key={value}>{value}</span>)}</div></div>
      </Reveal>
      <div className="interest-editorials">
        <Reveal className="interest-story"><div className="story-motif cultural-motif" aria-hidden="true"><i /><i /><i /></div><span className="eyebrow">{interests.anime.label}</span><h3>{interests.anime.title}</h3><p>{interests.anime.description}</p></Reveal>
        <Reveal className="interest-story"><div className="story-motif waveform-motif" aria-hidden="true">{[15,28,19,42,54,34,18,40,26,12,30,20].map((height,i)=><i key={i} style={{height:`${height}px`,animationDelay:`${i * 65}ms`}} />)}</div><span className="eyebrow">{interests.music.label}</span><h3>{interests.music.title}</h3><p>{interests.music.description}</p></Reveal>
      </div>
    </section>
  );
}
