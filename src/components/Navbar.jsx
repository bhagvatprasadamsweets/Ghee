import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import AppPromoBanner from './AppPromoBanner';

const announcements = [
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'FREE SHIPPING ON YOUR FIRST ORDER ABOVE ₹599',
];

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnnounceIndex, setActiveAnnounceIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Smooth rotation between free shipping offers
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveAnnounceIndex((prev) => (prev + 1) % announcements.length);
        setFade(true);
      }, 300);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'HOME',              href: '#home' },
    { name: 'WHAT IS GHEE',      href: '#about' },
    { name: 'HOW IT IS MADE',    href: '#bilona-process' },
    { name: 'PURITY PROMISE',    href: '#purity-promise' },
    { name: 'FAQ',               href: '#faq' },
    { name: 'CONTACT',           href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-sm">
      {/* ── Line 1: Rotating Free Shipping Announcement Bar (Dark Green Theme) ── */}
      <div className="w-full bg-[#164E3D] text-white py-0.5 px-3 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-center select-none overflow-hidden leading-tight">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[16px]">
          <span
            className={`transition-opacity duration-300 ease-in-out inline-flex items-center ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>{announcements[activeAnnounceIndex]}</span>
          </span>
        </div>
      </div>

      {/* ── Line 2: Mobile App Discount Banner (Dark Green Theme) ── */}
      <AppPromoBanner variant="header" />

      {/* ── Line 3: Main Navbar (White Background, Balanced 70px) ── */}
      <nav
        className={`w-full bg-white border-b border-[#DCE7E0] transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-[70px] flex items-center justify-between gap-2 sm:gap-4 w-full">

            {/* LEFT: Brand Logo (Balanced ~50px height) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center shrink-0 group"
            >
              <img
                src="/images/brand-logo.png"
                alt="Bhagvat Prasadam Ghee Logo"
                width="160"
                height="56"
                loading="eager"
                decoding="async"
                className="h-11 sm:h-[50px] w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* CENTER: Nav links — Desktop */}
            <div className="hidden lg:flex items-center justify-center gap-6 flex-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[11px] font-bold tracking-widest text-[#164E3D] hover:text-[#103B2F] py-1 group whitespace-nowrap transition-colors duration-150"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C6A15B] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* RIGHT: BUY NOW & Hamburger Toggle for Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <a
                href="https://www.bhagvatprasadam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-1.5 h-8 sm:h-9 px-2.5 sm:px-4 rounded text-[10px] sm:text-[11px] font-bold tracking-wide bg-[#164E3D] text-white hover:bg-[#103B2F] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>BUY NOW</span>
              </a>

              {/* Hamburger 3-Line Menu Button on Mobile / Tablet */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-[#FAF5EB] text-[#164E3D] border border-[#E9DFC8] hover:bg-[#164E3D] hover:text-white transition-colors shrink-0 flex items-center justify-center"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* ── Mobile Accordion Menu (Opens cleanly when clicked) ── */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 px-2 border-t border-[#DCE7E0] bg-white animate-fadeIn">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2.5 text-xs font-bold tracking-widest text-[#164E3D] hover:text-white hover:bg-[#164E3D] rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
}
