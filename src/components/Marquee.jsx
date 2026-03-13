import React from 'react';
import { MARQUEE_ITEMS } from '../utils';

const Marquee = () => {
  return (
    <section className="py-12 bg-primary overflow-hidden">
      <div className="flex animate-marquee">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-16 pr-16 shrink-0">
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={`${setIndex}-${index}`}>
                <span className="font-serif text-2xl md:text-4xl italic text-white whitespace-nowrap opacity-60">
                  {item}
                </span>
                <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
