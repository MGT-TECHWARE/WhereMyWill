import React, { useState, useRef, useCallback } from 'react';
import { clsx } from 'clsx';
import { useGSAP } from '../hooks';
import { FAQ_ITEMS } from '../utils';
import { SectionHeader, Icon } from './ui';
import { gsap } from '../lib/gsap';

const FAQItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const textRef = useRef(null);

  const handleClick = useCallback(() => {
    onClick();
    const content = contentRef.current;
    const text = textRef.current;
    if (!isOpen) {
      gsap.set(content, { height: 'auto' });
      const h = content.offsetHeight;
      gsap.fromTo(content, { height: 0 }, { height: h, duration: 0.5, ease: 'expo.out' });
      gsap.fromTo(text, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out', delay: 0.1 });
    } else {
      gsap.to(content, { height: 0, duration: 0.4, ease: 'expo.out' });
      gsap.to(text, { opacity: 0, y: -10, duration: 0.3 });
    }
  }, [isOpen, onClick]);

  return (
    <div className="faq-item border-b border-primary/[0.08]">
      <button
        className="w-full flex items-center justify-between gap-8 py-8 bg-transparent border-none cursor-pointer text-left font-sans text-lg font-medium text-primary transition-colors duration-300 hover:text-gold-dark"
        onClick={handleClick}
      >
        <span>{item.question}</span>
        <div
          className={clsx(
            'w-9 h-9 flex items-center justify-center bg-cream rounded-full shrink-0 transition-all duration-500 ease-out-expo',
            isOpen && 'bg-gold rotate-45'
          )}
        >
          <Icon
            name="plus"
            size={16}
            className={clsx(
              'text-charcoal transition-colors duration-300',
              isOpen && 'text-primary'
            )}
          />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <p ref={textRef} className="pb-8 text-warm-gray leading-relaxed opacity-0">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const scope = useGSAP((gsap) => {
    gsap.from('.faq-item', {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={scope} className="section" id="faq">
      <div className="container">
        <SectionHeader
          number="04"
          title="Common"
          titleHighlight="Questions"
          description="Everything you need to know about our secure will storage service."
        />

        <div className="max-w-[800px] mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
