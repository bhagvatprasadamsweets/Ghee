import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';
import { BRAND_INFO } from '../data/gheeData';

export default function Footer({ onOpenInquiry, onOpenPolicy }) {
  // Mobile accordion state (all closed by default)
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    policies: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'What Is Ghee', href: '#about' },
    { name: 'How It Is Made', href: '#bilona-process' },
    { name: 'Purity Promise', href: '#purity-promise' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const policyLinks = [
    { name: 'Terms & Conditions', type: 'terms', href: '#terms' },
    { name: 'Shipping Policy', type: 'shipping', href: '#shipping' },
    { name: 'Return Policy', type: 'returns', href: '#returns' },
    { name: 'Privacy Policy', type: 'privacy', href: '#privacy' },
  ];

  const handlePolicyClick = (e, type) => {
    e.preventDefault();
    if (onOpenPolicy) {
      onOpenPolicy(type);
    }
  };

  return (
    <footer className="bg-white text-[#252A24] pt-6 pb-6 relative overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-3">
          
          {/* Brand Logo & Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/images/brand-logo.png"
                alt="Bhagvat Prasadam Ghee Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#555F58] leading-relaxed">
              We bring the sacred heritage of royal handcrafted traditional Bilona ghee into your everyday wellbeing and auspicious rituals.
            </p>
            <p className="font-serif text-sm font-semibold text-[#164E3D]">
              Pure Natural Divine
            </p>
          </div>

          {/* Quick Links (Dropdown on mobile, open on md+) */}
          <div className="lg:col-span-2 space-y-3">
            <button
              type="button"
              onClick={() => toggleSection('quickLinks')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h4 className="font-serif text-sm font-bold text-[#164E3D] uppercase tracking-wider">
                Quick Links
              </h4>
              <span className={`md:hidden transition-transform duration-200 text-[#164E3D] ${openSections.quickLinks ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <div className={`${openSections.quickLinks ? 'block' : 'hidden'} md:block pt-1 md:pt-0`}>
              <ul className="space-y-2 text-xs text-[#555F58]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="hover:text-[#164E3D] font-medium transition-colors flex items-center gap-1.5"
                    >
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Customer Care & Policies (Dropdown on mobile, open on md+) */}
          <div className="lg:col-span-3 space-y-3">
            <button
              type="button"
              onClick={() => toggleSection('policies')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h4 className="font-serif text-sm font-bold text-[#164E3D] uppercase tracking-wider">
                Customer Care &amp; Policies
              </h4>
              <span className={`md:hidden transition-transform duration-200 text-[#164E3D] ${openSections.policies ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <div className={`${openSections.policies ? 'block' : 'hidden'} md:block pt-1 md:pt-0`}>
              <ul className="space-y-2 text-xs text-[#555F58]">
                {policyLinks.map((policy) => (
                  <li key={policy.name}>
                    <button
                      type="button"
                      onClick={(e) => handlePolicyClick(e, policy.type)}
                      className="hover:text-[#164E3D] font-medium transition-colors text-left"
                    >
                      {policy.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Location (Dropdown on mobile, open on md+) */}
          <div className="lg:col-span-3 space-y-3">
            <button
              type="button"
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between text-left md:pointer-events-none"
            >
              <h4 className="font-serif text-sm font-bold text-[#164E3D] uppercase tracking-wider">
                Contact &amp; Location
              </h4>
              <span className={`md:hidden transition-transform duration-200 text-[#164E3D] ${openSections.contact ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <div className={`${openSections.contact ? 'block' : 'hidden'} md:block pt-1 md:pt-0`}>
              <div className="space-y-3 text-xs text-[#555F58]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#164E3D] shrink-0" />
                  <a href="tel:+918850011652" className="hover:text-[#164E3D] font-semibold text-[#252A24]">
                    +91 88500 11652
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#164E3D] shrink-0" />
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#164E3D] font-medium">
                    {BRAND_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#164E3D] shrink-0 mt-0.5" />
                  <a 
                    href="https://goo.gl/maps/VkN5zYqj6yp8YqZJ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#164E3D] font-medium leading-relaxed no-underline"
                  >
                    411 412, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat 394107
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Traditional Vedic Ghee Process Line Art (Edge to edge / Full Width seamlessly on Pure White) */}
        <div className="pt-1 pb-3 flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="/images/ghee-line-art-footer.png"
              alt="Traditional Vedic Ghee Bilona Process line art illustration showing milk, curd, churning, butter, slow heating, and pure ghee"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-1 text-center sm:text-left text-[11px] text-[#7A847E]">
          <div>
            &copy; 2026 Bhagvat Prasadam Ghee. All rights reserved. Powered by Megascale
          </div>
        </div>

      </div>
    </footer>
  );
}
