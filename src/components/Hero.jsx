import React from 'react';
import { scrollToSection, COMPANY_INFO } from '../utils';
import { useGSAP } from '../hooks';
import { Button } from './ui';

const Hero = () => {
  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    gsap.set('.hero-line', { yPercent: 100 });
    gsap.set('.hero-eyebrow', { opacity: 0, x: -30 });
    gsap.set('.hero-right', { opacity: 0, y: 50 });
    gsap.set('.hero-card', { opacity: 0, y: 40, scale: 1.04, rotation: 1 });
    gsap.set('.hero-stat', { opacity: 0, y: 25 });
    gsap.set('.hero-circle', { scale: 0, opacity: 0 });
    gsap.set('.hero-line-vert', { height: 0, opacity: 0 });

    tl.to('.hero-line', {
      yPercent: 0,
      duration: 1.3,
      stagger: 0.12,
    })
    .to('.hero-eyebrow', {
      opacity: 1, x: 0, duration: 0.9,
    }, '-=0.9')
    .to('.hero-right', {
      opacity: 1, y: 0, duration: 1.1,
    }, '-=0.7')
    .to('.hero-card', {
      opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.2,
    }, '-=0.6')
    .to('.hero-stat', {
      opacity: 1, y: 0, stagger: 0.08, duration: 0.7,
    }, '-=0.5')
    .to('.hero-circle', {
      scale: 1, opacity: 0.15, duration: 1.5,
    }, 0.3)
    .to('.hero-line-vert', {
      height: 200, opacity: 0.3, duration: 2,
    }, 0.5);
  });

  return (
    <section ref={scope} className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hero-circle absolute w-[clamp(400px,50vw,700px)] h-[clamp(400px,50vw,700px)] border border-gold rounded-full -top-[20%] -right-[10%] animate-slow-spin pointer-events-none" />
      <div className="hero-line-vert absolute w-px bg-gradient-to-b from-transparent via-gold to-transparent bottom-0 left-[15%] pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-gold" />
              <span className="text-xs tracking-[0.15em] uppercase text-warm-gray">
                Secure Will Storage
              </span>
            </div>

            {/* Title */}
            <h1 className="text-display-hero font-medium">
              <span className="block overflow-hidden">
                <span className="hero-line block">Protect</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block font-serif italic">Your</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block">Legacy</span>
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="hero-right lg:pl-16 lg:border-l border-primary/10">
            <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-10">
              Professional, secure storage for your will and essential estate documents.
              Ensure your loved ones can find them when needed most.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                href="#pricing"
                variant="gold"
                icon
                onClick={(e) => scrollToSection(e, 'pricing')}
              >
                Start for ${COMPANY_INFO.price}/yr
              </Button>
              <Button
                href="#process"
                variant="outline"
                onClick={(e) => scrollToSection(e, 'process')}
              >
                Learn More
              </Button>
            </div>

            {/* Card Image */}
            <div className="hero-card mb-10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] max-w-[480px]">
              <img
                src="/images/hero-card.png"
                alt="Premium wallet identification card"
                className="w-full h-auto block"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div className="hero-stat">
                <div className="text-4xl font-medium tracking-tight leading-none">100%</div>
                <div className="text-xs tracking-[0.08em] uppercase text-warm-gray mt-2">Secure</div>
              </div>
              <div className="hero-stat">
                <div className="text-4xl font-medium tracking-tight leading-none">24/7</div>
                <div className="text-xs tracking-[0.08em] uppercase text-warm-gray mt-2">Protected</div>
              </div>
              <div className="hero-stat">
                <div className="text-4xl font-medium tracking-tight leading-none">${COMPANY_INFO.price}</div>
                <div className="text-xs tracking-[0.08em] uppercase text-warm-gray mt-2">First Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
