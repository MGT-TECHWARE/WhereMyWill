import React, { useState } from 'react';
import { clsx } from 'clsx';
import { useScrollPosition, useGSAP } from '../hooks';
import { scrollToSection, NAV_LINKS, COMPANY_INFO } from '../utils';
import { Button } from './ui';

const Navbar = () => {
  const { isScrolled } = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from('.nav-logo', {
      opacity: 0, x: -30, duration: 0.8, ease: 'expo.out',
    })
    .from('.nav-link', {
      opacity: 0, y: -15, stagger: 0.05, duration: 0.5, ease: 'expo.out',
    }, '-=0.4')
    .from('.nav-cta', {
      opacity: 0, x: 20, duration: 0.6, ease: 'expo.out',
    }, '-=0.3');
  });

  const handleNavClick = (e, id) => {
    scrollToSection(e, id);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={scope}
      className={clsx(
        'fixed top-0 left-0 right-0 z-[1000] py-3 transition-all duration-500 ease-out-expo',
        isScrolled && 'bg-cream/90 backdrop-blur-xl py-2'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="nav-logo flex items-center no-underline text-primary group">
            <img
              src="/images/logo.png"
              alt={COMPANY_INFO.name}
              className={clsx(
                'object-contain transition-all duration-500 ease-out-expo group-hover:scale-105',
                isScrolled ? 'h-12 w-12 md:h-14 md:w-14' : 'h-24 w-24 md:h-32 md:w-32'
              )}
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="nav-link">
                <a
                  href={link.href}
                  className="text-charcoal no-underline text-[15px] font-medium relative py-2 hover:text-primary transition-colors duration-300 group"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-500 ease-out-expo group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-cta hidden lg:flex">
            <Button
              href="#contact"
              variant="dark"
              size="sm"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={clsx(
              'lg:hidden w-8 h-8 bg-transparent border-none cursor-pointer relative',
              menuOpen && 'active'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                'block w-full h-0.5 bg-primary absolute left-0 transition-all duration-300 ease-out-expo',
                menuOpen ? 'top-[15px] rotate-45' : 'top-2'
              )}
            />
            <span
              className={clsx(
                'block w-full h-0.5 bg-primary absolute left-0 top-[15px] transition-all duration-300 ease-out-expo',
                menuOpen && 'opacity-0 translate-x-5'
              )}
            />
            <span
              className={clsx(
                'block w-full h-0.5 bg-primary absolute left-0 transition-all duration-300 ease-out-expo',
                menuOpen ? 'top-[15px] -rotate-45' : 'top-[22px]'
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            'lg:hidden overflow-hidden transition-all duration-500 ease-out-expo',
            menuOpen ? 'max-h-80 mt-6' : 'max-h-0'
          )}
        >
          <ul className="list-none flex flex-col gap-4 py-4 border-t border-primary/10">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-charcoal no-underline text-base font-medium block py-2"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#contact"
                variant="gold"
                className="w-full"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
