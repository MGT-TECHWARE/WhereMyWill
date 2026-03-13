import React from 'react';
import { useGSAP } from '../hooks';
import { scrollToSection, PRICING_FEATURES, COMPANY_INFO } from '../utils';
import { SectionHeader, Button, Icon } from './ui';

const Pricing = () => {
  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pricing-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.pricing-card', {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'expo.out',
    })
    .from('.pricing-badge', {
      opacity: 0, y: -15, duration: 0.5,
    }, '-=0.3')
    .from('.pricing-title', {
      opacity: 0, y: 15, duration: 0.5,
    }, '-=0.2')
    .from('.pricing-amount', {
      opacity: 0, scale: 0.8, duration: 0.7, ease: 'back.out(1.5)',
    }, '-=0.2')
    .from('.pricing-sub', {
      opacity: 0, y: 10, stagger: 0.1, duration: 0.4,
    }, '-=0.3')
    .from('.pricing-feature', {
      x: -20, opacity: 0, stagger: 0.06, duration: 0.5,
    }, '-=0.2')
    .from('.pricing-cta', {
      opacity: 0, y: 15, duration: 0.5,
    }, '-=0.1');
  });

  return (
    <section ref={scope} className="section" id="pricing">
      <div className="container">
        <SectionHeader
          number="03"
          title="One"
          titleHighlight="Simple"
          description="Simple, transparent pricing. Just secure, professional storage for your most important documents."
        />

        <div className="max-w-[520px] mx-auto">
          <div className="pricing-card bg-primary text-white rounded-[32px] p-16 text-center relative overflow-hidden group">
            {/* Hover Border Effect */}
            <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-gold via-transparent to-gold rounded-[34px] -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Badge */}
            <span className="pricing-badge inline-block bg-gold text-primary px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase mb-8">
              Opening Promo
            </span>

            {/* Title */}
            <h3 className="pricing-title font-serif text-2xl italic text-white/70 mb-4">
              Will Storage Service
            </h3>

            {/* Price */}
            <div className="pricing-amount flex items-baseline justify-center gap-1 mb-2">
              <span className="text-3xl text-gold">$</span>
              <span className="text-8xl font-medium leading-none tracking-tight">
                {COMPANY_INFO.price}
              </span>
            </div>
            <p className="pricing-sub text-sm text-white/40 mb-2">for the first year • Opening promo</p>
            <p className="pricing-sub text-xs text-white/30 mb-12">${COMPANY_INFO.priceAfterPromo}/year after your first year</p>

            {/* Features */}
            <ul className="text-left mb-12 space-y-0">
              {PRICING_FEATURES.map((feature, index) => (
                <li
                  key={index}
                  className="pricing-feature flex items-center gap-4 py-4 border-b border-white/[0.08] text-[15px] text-white/70 transition-all duration-300 hover:pl-2 hover:text-white last:border-b-0"
                >
                  <Icon name="check" size={18} strokeWidth={2.5} className="text-gold shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pricing-cta">
              <Button
                href="#contact"
                variant="gold"
                icon
                className="w-full justify-center"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
