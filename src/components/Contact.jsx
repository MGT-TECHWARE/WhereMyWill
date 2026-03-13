import React, { useState } from 'react';
import { useGSAP } from '../hooks';
import { COMPANY_INFO } from '../utils';
import { Button, Icon } from './ui';

const contactInfo = [
  {
    icon: 'mapPin',
    label: 'Address',
    value: `${COMPANY_INFO.address.street}\n${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone.replace(/\./g, '-')}`,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: 'clock',
    label: 'Hours',
    value: COMPANY_INFO.hours,
  },
];

const ContactInfoItem = ({ item }) => (
  <div className="contact-info-item flex items-start gap-4 py-5 border-b border-white/10 last:border-b-0 group">
    <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl shrink-0 transition-all duration-300 ease-out group-hover:bg-gold group-hover:rotate-[-5deg]">
      <Icon
        name={item.icon}
        size={18}
        className="text-gold transition-colors duration-300 group-hover:text-primary"
      />
    </div>
    <div>
      <div className="text-[11px] tracking-[0.1em] uppercase text-white/40 mb-1">
        {item.label}
      </div>
      <div className="text-sm font-medium text-white/90 whitespace-pre-line">
        {item.href ? (
          <a
            href={item.href}
            className="text-inherit no-underline transition-colors duration-300 hover:text-gold"
          >
            {item.value}
          </a>
        ) : (
          item.value
        )}
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const scope = useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.contact-info-item', {
      x: -40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'expo.out',
    })
    .from('.contact-form', {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
    }, '-=0.5')
    .from('.contact-field', {
      y: 20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'expo.out',
    }, '-=0.4');
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={scope} className="section section-light" id="contact">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-serif italic text-base text-gold block mb-4">05</span>
          <h2 className="text-display-lg font-medium mb-6">
            Get In <span className="font-serif italic">Touch</span>
          </h2>
          <p className="text-lg leading-relaxed text-warm-gray max-w-[500px] mx-auto">
            Visit our Dallas location or send us a message. We're here to help protect your legacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 max-w-[1000px] mx-auto rounded-3xl overflow-hidden shadow-lg">
          {/* Contact Info - Dark Card */}
          <div className="bg-primary text-white p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-medium mb-2">Contact Information</h3>
            <p className="text-sm text-white/50 mb-6">Reach out and we'll get back to you within 24 hours.</p>
            {contactInfo.map((item, index) => (
              <ContactInfoItem key={index} item={item} />
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form bg-cream p-8 md:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="contact-field">
                <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-charcoal mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3.5 font-sans text-base text-primary bg-white border-[1.5px] border-transparent rounded-xl transition-all duration-300 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(196,163,90,0.1)] placeholder:text-warm-gray"
                />
              </div>
              <div className="contact-field">
                <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-charcoal mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 font-sans text-base text-primary bg-white border-[1.5px] border-transparent rounded-xl transition-all duration-300 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(196,163,90,0.1)] placeholder:text-warm-gray"
                />
              </div>
            </div>

            <div className="contact-field mb-5">
              <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-charcoal mb-3">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3.5 font-sans text-base text-primary bg-white border-[1.5px] border-transparent rounded-xl transition-all duration-300 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(196,163,90,0.1)] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238a8a8a%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1.25rem_center]"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="storage">Will Storage Questions</option>
                <option value="retrieval">Document Retrieval</option>
                <option value="pricing">Pricing Information</option>
              </select>
            </div>

            <div className="contact-field mb-5">
              <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-charcoal mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3.5 font-sans text-base text-primary bg-white border-[1.5px] border-transparent rounded-xl transition-all duration-300 focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(196,163,90,0.1)] placeholder:text-warm-gray resize-y min-h-[120px]"
              />
            </div>

            <div className="contact-field">
              <Button type="submit" variant="gold" icon className="w-full justify-center mt-1">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
