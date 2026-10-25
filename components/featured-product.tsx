'use client';

import Image from 'next/image';
import { useRef, type PointerEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { featuredProduct as product } from '@/lib/products';
import { Reveal } from '@/components/portfolio';

export function FeaturedProduct() {
  const panel = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  function moveLight(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== 'mouse' || !panel.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    panel.current.style.setProperty('--product-light-x', `${x * 100}%`);
    panel.current.style.setProperty('--product-light-y', `${y * 100}%`);
    panel.current.style.setProperty('--product-tilt-x', `${(0.5 - y) * 3}deg`);
    panel.current.style.setProperty('--product-tilt-y', `${(x - 0.5) * 3}deg`);
  }

  function resetLight() {
    if (!panel.current) return;
    for (const name of ['--product-light-x', '--product-light-y', '--product-tilt-x', '--product-tilt-y']) {
      panel.current.style.removeProperty(name);
    }
  }

  return (
    <section className="section independent-development" id="building" aria-labelledby="building-heading">
      <Reveal>
        <div className="section-label product-section-label">
          <span aria-hidden="true">↗</span>{product.sectionEyebrow}
        </div>
        <div className="section-heading product-section-heading">
          <h2 id="building-heading">{product.sectionHeading}</h2>
          <p>{product.sectionDescription}</p>
        </div>
      </Reveal>
      <Reveal>
        <article
          ref={panel}
          className="product-panel"
          aria-labelledby="product-name"
          onPointerMove={moveLight}
          onPointerLeave={resetLight}
        >
          <div className="product-ambient" aria-hidden="true" />
          <div className="product-panel-content">
            <div className="product-intro">
              <div className="product-heading-group">
                <p className="eyebrow product-kicker"><span className="status-dot" />INDEPENDENTLY BUILT</p>
                <motion.h3
                  id="product-name"
                  className="product-name"
                  initial={reducedMotion ? false : { opacity: 0, y: 18, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {product.name}<span aria-hidden="true" className="cyan">.</span>
                </motion.h3>
              </div>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="product-meta">
              <ul className="product-labels" aria-label="Verified product capabilities">
                {product.technologyLabels.map(label => <li key={label}>{label}</li>)}
              </ul>
              <a className="product-cta" href={product.websiteUrl} target="_blank" rel="noopener noreferrer">
                Explore {product.name}
                <span className="product-cta-icon" aria-hidden="true"><ArrowUpRight size={19} /></span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <figure className="product-preview">
              <div className="product-preview-surface">
                <Image
                  src={product.previewImagePath}
                  alt={product.previewImageAlt}
                  width={product.previewWidth}
                  height={product.previewHeight}
                  sizes="(max-width: 700px) 86vw, 76vw"
                  loading="lazy"
                  className="product-preview-image"
                />
              </div>
              <figcaption>
                <span>{product.previewCaption}</span>
                <span className="product-preview-origin">SIGNAL NOIR / LIVE PRODUCT</span>
              </figcaption>
            </figure>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

export function IndependentDevelopmentNote() {
  return (
    <section className="section independent-note" aria-labelledby="independent-note-heading">
      <Reveal>
        <div className="section-label product-section-label"><span aria-hidden="true">↗</span>{product.sectionEyebrow}</div>
        <div className="about-grid">
          <h2 id="independent-note-heading">From understanding data<br /><span className="muted">to building with it.</span></h2>
          <div className="about-copy">
            <p>{product.aboutDescription}</p>
            <a className="text-link" href={product.websiteUrl} target="_blank" rel="noopener noreferrer">
              Explore {product.name}<ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
