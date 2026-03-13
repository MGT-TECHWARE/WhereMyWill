import React from 'react';
import { useGSAP } from '../hooks';
import { scrollToSection, COMPANY_INFO } from '../utils';
import { Button } from './ui';

const CTA = () => {
  const scope = useGSAP((gsap, el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.cta-title', {
      y: 50, opacity: 0, duration: 1, ease: 'expo.out',
    })
    .from('.cta-text', {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.7,
    }, '-=0.5')
    .from('.cta-btn', {
      y: 20, opacity: 0, stagger: 0.1, duration: 0.6,
    }, '-=0.3');

    // Parallax on decorative circle
    gsap.to('.cta-deco-circle', {
      rotation: 180,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  return (
    <section ref={scope} className="bg-gold py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="cta-deco-circle absolute w-[300px] h-[300px] border border-primary/10 rounded-full -top-[100px] right-[10%] pointer-events-none" />

      <div className="container">
        <div className="text-center max-w-[700px] mx-auto relative z-10">
          <h2 className="cta-title text-display-lg font-medium text-primary mb-6">
            Protect What <span className="font-serif italic">Matters</span>
          </h2>
          <p className="cta-text text-xl text-primary/60 mb-4">
            For just ${COMPANY_INFO.price} for the first year, ensure your will is safe, accessible, and ready to honor your wishes.
          </p>
          <p className="cta-text text-base text-primary/40 mb-10">
            Opening promo — ${COMPANY_INFO.priceAfterPromo}/year after your first year
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="#pricing"
              variant="dark"
              icon
              className="cta-btn"
              onClick={(e) => scrollToSection(e, 'pricing')}
            >
              Get Started for ${COMPANY_INFO.price}/yr
            </Button>
            <Button
              href="#contact"
              variant="outline-dark"
              className="cta-btn"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
