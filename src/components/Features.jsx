import React, { useRef, useCallback } from 'react';
import { useGSAP } from '../hooks';
import { FEATURES } from '../utils';
import { SectionHeader, Icon } from './ui';
import { gsap } from '../lib/gsap';

const FeatureCard = ({ feature }) => {
  const cardRef = useRef(null);
  const accentRef = useRef(null);
  const iconBoxRef = useRef(null);
  const numberRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    const accent = accentRef.current;
    const iconBox = iconBoxRef.current;
    const num = numberRef.current;
    gsap.to(card, { y: -12, boxShadow: '0 30px 60px -20px rgba(0,0,0,0.18)', borderColor: 'rgba(13,13,13,0.05)', duration: 0.4, ease: 'power3.out' });
    gsap.to(accent, { height: '100%', duration: 0.5, ease: 'expo.out' });
    gsap.to(iconBox, { backgroundColor: '#c4a35a', rotation: -5, duration: 0.4, ease: 'power3.out' });
    gsap.to(num, { color: 'rgba(196,163,90,0.3)', duration: 0.3 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const accent = accentRef.current;
    const iconBox = iconBoxRef.current;
    const num = numberRef.current;
    gsap.to(card, { y: 0, boxShadow: '0 0px 0px 0px rgba(0,0,0,0)', borderColor: 'transparent', duration: 0.4, ease: 'power3.out' });
    gsap.to(accent, { height: '0%', duration: 0.4, ease: 'expo.out' });
    gsap.to(iconBox, { backgroundColor: '#f7f5f2', rotation: 0, duration: 0.4, ease: 'power3.out' });
    gsap.to(num, { color: '#e8e6e3', duration: 0.3 });
  }, []);

  return (
    <div
      ref={cardRef}
      className="feature-card bg-white p-12 rounded-[20px] relative overflow-hidden border border-transparent cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Accent Line */}
      <div ref={accentRef} className="absolute top-0 left-0 w-1 h-0 bg-gold" />

      {/* Number */}
      <span ref={numberRef} className="absolute top-6 right-8 font-serif text-6xl italic text-light-gray leading-none">
        {feature.number}
      </span>

      {/* Icon */}
      <div ref={iconBoxRef} className="w-[52px] h-[52px] flex items-center justify-center bg-cream rounded-[14px] mb-6">
        <Icon name={feature.icon} size={24} className="text-charcoal" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
      <p className="text-warm-gray leading-relaxed text-[15px]">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  const scope = useGSAP((gsap) => {
    gsap.from('.feature-card', {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  return (
    <section ref={scope} className="section section-light" id="features">
      <div className="container">
        <SectionHeader
          number="01"
          title="Built for"
          titleHighlight="Security"
          description="We provide a trusted, centralized location for storing your most important documents with professional-grade protection."
        />

        <div className="features-grid grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
