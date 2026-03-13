import React from 'react';
import { clsx } from 'clsx';
import { useGSAP } from '../../hooks';

const SectionHeader = ({
  number,
  title,
  titleHighlight,
  description,
  dark = false,
  className,
}) => {
  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.section-number', {
      opacity: 0, x: -20, duration: 0.6,
    })
    .from('.section-word', {
      yPercent: 100, duration: 0.8, stagger: 0.06,
    }, '-=0.3')
    .from('.section-desc', {
      opacity: 0, y: 20, duration: 0.7,
    }, '-=0.3');
  });

  const titleWords = title ? title.split(' ') : [];

  return (
    <div
      ref={scope}
      className={clsx(
        'grid grid-cols-[auto_1fr] gap-8 md:gap-12 items-start mb-16 md:mb-20',
        className
      )}
    >
      <span
        className={clsx(
          'section-number font-serif italic text-base pt-2',
          'text-gold'
        )}
      >
        {number}
      </span>
      <div className="max-w-[700px]">
        <h2 className="text-display-lg font-medium mb-6">
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
              <span className="section-word inline-block">{word}</span>
            </span>
          ))}
          {titleHighlight && (
            <span className="inline-block overflow-hidden">
              <span className="section-word inline-block font-serif italic">{titleHighlight}</span>
            </span>
          )}
        </h2>
        {description && (
          <p
            className={clsx(
              'section-desc text-lg leading-relaxed max-w-[500px]',
              dark ? 'text-white/50' : 'text-warm-gray'
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
