import React from 'react';
import { useGSAP } from '../hooks';
import { PROCESS_STEPS } from '../utils';
import { SectionHeader } from './ui';

const ProcessCard = ({ step }) => (
  <div className="text-center process-step">
    <div className="process-circle w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-full font-serif text-2xl italic text-gold relative transition-all duration-500 ease-out-expo hover:bg-gold hover:text-primary hover:scale-110 hover:border-gold">
      {step.number}
    </div>
    <h3 className="process-text text-lg font-semibold mb-3">{step.title}</h3>
    <p className="process-text text-[15px] text-white/50 leading-relaxed">{step.description}</p>
  </div>
);

const Process = () => {
  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.process-timeline-gold', {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.5,
      ease: 'expo.out',
    })
    .from('.process-circle', {
      scale: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }, '-=1')
    .from('.process-text', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'expo.out',
    }, '-=0.6');
  });

  return (
    <section ref={scope} className="section section-dark" id="process">
      <div className="container">
        <SectionHeader
          number="02"
          title="How It"
          titleHighlight="Works"
          description="Getting started takes just minutes. Here's how we protect your important documents."
          dark
        />

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-white/10" />
          <div className="process-timeline-gold hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-gold" />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
