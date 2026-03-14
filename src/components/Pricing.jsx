import React from 'react';
import { useGSAP } from '../hooks';
import { scrollToSection, PRICING_FEATURES, COMPANY_INFO } from '../utils';
import { SectionHeader, Button, Icon } from './ui';

const Pricing = () => {
  const scope = useGSAP((gsap) => {
    gsap.from('.pricing-card', {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.pricing-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
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
          <div className="pricing-card bg-primary text-white rounded-[32px] px-10 py-10 md:px-12 md:py-12 text-center relative overflow-clip group">
            {/* Hover Border Effect */}
            <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-gold via-transparent to-gold rounded-[34px] -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Badge */}
            <span className="pricing-badge inline-block bg-gold text-primary px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase mb-5">
              Opening Promo
            </span>

            {/* Title */}
            <h3 className="pricing-title font-serif text-2xl italic text-white/70 mb-3">
              Will Storage Service
            </h3>

            {/* Price */}
            <div className="pricing-amount flex items-baseline justify-center gap-1 mb-1">
              <span className="text-3xl text-gold">$</span>
              <span className="text-7xl font-medium leading-none tracking-tight">
                {COMPANY_INFO.price}
              </span>
            </div>
            <p className="pricing-sub text-sm text-white/40 mb-1">for the first year • Opening promo</p>
            <p className="pricing-sub text-xs text-white/30 mb-8">${COMPANY_INFO.priceAfterPromo}/year after your first year</p>

            {/* Features */}
            <ul className="text-left mb-8 space-y-0">
              {PRICING_FEATURES.map((feature, index) => (
                <li
                  key={index}
                  className="pricing-feature flex items-center gap-4 py-3 border-b border-white/[0.08] text-[15px] text-white/70 transition-all duration-300 hover:pl-2 hover:text-white last:border-b-0"
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
