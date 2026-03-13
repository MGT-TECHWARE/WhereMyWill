import React from 'react';
import { scrollToSection, COMPANY_INFO, NAV_LINKS } from '../utils';

const footerLinks = {
  navigation: NAV_LINKS.map((link) => ({ label: link.label, href: link.href, id: link.id })),
  services: [
    { label: 'Will Storage', href: '#features', id: 'features' },
    { label: 'Document Safekeeping', href: '#features', id: 'features' },
    { label: 'Secure Retrieval', href: '#process', id: 'process' },
    { label: 'Document Updates', href: '#faq', id: 'faq' },
  ],
  contact: [
    { label: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\./g, '-')}` },
    { label: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
    { label: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`, href: '#contact', id: 'contact' },
  ],
};

const FooterLinkGroup = ({ title, links, onLinkClick }) => (
  <div>
    <h4 className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-6">
      {title}
    </h4>
    <ul className="list-none space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-white/70 no-underline text-[15px] transition-all duration-300 hover:text-gold hover:pl-2 inline-block"
            onClick={link.id ? (e) => onLinkClick(e, link.id) : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-20 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 no-underline text-white mb-6">
              <img
                src="/images/logo.png"
                alt={COMPANY_INFO.name}
                className="h-10 w-10 object-contain invert"
              />
              <span className="text-base font-semibold">{COMPANY_INFO.name}</span>
            </a>
            <p className="text-[15px] text-white/40 leading-relaxed max-w-[280px]">
              {COMPANY_INFO.tagline}. Professional will storage services in {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}.
            </p>
          </div>

          {/* Navigation */}
          <FooterLinkGroup
            title="Navigation"
            links={footerLinks.navigation}
            onLinkClick={scrollToSection}
          />

          {/* Services */}
          <FooterLinkGroup
            title="Services"
            links={footerLinks.services}
            onLinkClick={scrollToSection}
          />

          {/* Contact */}
          <FooterLinkGroup
            title="Contact"
            links={footerLinks.contact}
            onLinkClick={scrollToSection}
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-white/30">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button type="button" className="text-[13px] text-white/30 bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-gold">
              Privacy Policy
            </button>
            <button type="button" className="text-[13px] text-white/30 bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-gold">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
