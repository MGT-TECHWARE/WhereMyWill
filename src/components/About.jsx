import React from 'react';
import { useGSAP } from '../hooks';

const About = () => {
  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.about-image', {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
    })
    .from('.about-deco-circle', {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.6')
    .from('.about-label', {
      opacity: 0, x: -20, duration: 0.6,
    }, '-=0.8')
    .from('.about-title-word', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.06,
      ease: 'expo.out',
    }, '-=0.5')
    .from('.about-text', {
      opacity: 0, y: 25, stagger: 0.15, duration: 0.7,
    }, '-=0.3')
    .from('.about-signature', {
      opacity: 0, y: 20, duration: 0.6,
    }, '-=0.2');
  });

  return (
    <section ref={scope} className="section section-light" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="about-image w-full aspect-[4/5] bg-light-gray rounded-3xl relative overflow-hidden">
              <img
                src="/images/about-safe.png"
                alt="Secure fireproof safe in professional office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
            </div>
            {/* Decorative Circle */}
            <div className="about-deco-circle absolute -bottom-5 -right-5 w-[150px] h-[150px] border border-gold rounded-full opacity-30" />
          </div>

          {/* Content */}
          <div className="max-w-[500px]">
            {/* Label */}
            <div className="about-label inline-flex items-center gap-3 mb-6">
              <span className="w-[30px] h-px bg-gold" />
              <span className="text-xs tracking-[0.15em] uppercase text-warm-gray">
                Our Story
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-6">
              <span className="inline-block overflow-hidden mr-[0.3em]">
                <span className="about-title-word inline-block">Dedicated</span>
              </span>
              <span className="inline-block overflow-hidden mr-[0.3em]">
                <span className="about-title-word inline-block">to</span>
              </span>
              <span className="inline-block overflow-hidden mr-[0.3em]">
                <span className="about-title-word inline-block">Protecting</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="about-title-word inline-block font-serif italic">What Matters</span>
              </span>
            </h2>

            {/* Text */}
            <p className="about-text text-lg text-warm-gray leading-relaxed mb-6">
              I've seen firsthand the challenges families face when they can't locate
              a loved one's will. The stress, the uncertainty, the legal
              complications—it all adds up during an already difficult time.
            </p>

            <p className="about-text text-lg text-warm-gray leading-relaxed mb-8">
              That's why I created Where's The Will. A simple, affordable solution that
              ensures your final wishes are protected and easily accessible to those who
              need them most. Walk in or mail it in—we make it easy.
            </p>

            {/* Signature */}
            <div className="about-signature pt-8 border-t border-primary/10">
              <div className="font-serif text-2xl italic mb-1">Sabrina Hutchinson</div>
              <div className="text-xs tracking-[0.1em] uppercase text-warm-gray">
                Founder & Owner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
