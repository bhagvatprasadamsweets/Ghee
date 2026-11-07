import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShoppingBag, ExternalLink } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

/* ─── Product Varieties ──────────────────────────────────────── */
const VARIETIES = [
  {
    id: 'gau-dham',
    name: 'Gau Dham Traditional Desi Cow Ghee',
    shortName: 'Gau Dham Ghee',
    subtitle: '100% Vedic A2 Bilona Churned Sacred Gir Cow Herd',
    description:
      'Gau Dham Traditional Desi Cow Ghee is made using authentic ancient Ayurvedic Shastric wisdom. Fresh whole milk from free grazing indigenous Gir cows is cultured into probiotic curd overnight, and hand-churned with bi directional wooden Valona. 100% natural aroma, rich golden danedar grains, and wholesome prana.',
    mainImage: '/images/gau-dham-bilona.jpg',
    thumbImage: '/images/gau-dham-bilona.jpg',
    link: 'https://www.bhagvatprasadam.com/products/gau-dham-traditional-desi-cow-ghee?variant=46964366803093',
    highlights: [
      '30 Litres Cow Milk per 1 Litre Ghee',
      'Whole Curd Churned (No Cream Boiling)',
      'Rich Golden Danedar Crystals',
      'NABL Tested 0% Vanaspati / Palm Oil',
    ],
  },
  {
    id: 'pure-gir',
    name: 'Pure Gir Cow Ghee',
    shortName: 'Pure Gir Cow Ghee',
    subtitle: 'Sacred Indigenous Gir Cows 100% A2 Beta Casein Rich',
    description:
      'Handcrafted exclusively from indigenous, pasture grazing Gir cows. Rich in sacred A2 beta casein proteins and vital fat soluble nutrients that kindle digestion, mental clarity, robust immunity, and wholesome Ayurvedic nourishment for the entire family.',
    mainImage: '/images/traditional-bilona-farm.jpg',
    thumbImage: '/images/traditional-bilona-farm.jpg',
    link: 'https://www.bhagvatprasadam.com/products/ghee?variant=45385751920789',
    highlights: [
      'Indigenous Gir Breed with Surya Ketu Nadi',
      'Wooden Valona Bi Directional Churned',
      'A2 Beta Casein Protein Certified',
      'Rich Natural Aroma & Healing Prana',
    ],
  },
];

export default function Hero({ onOpenInquiry }) {
  const [selected, setSelected] = useState(0);
  const variety = VARIETIES[selected];

  return (
    <section
      id="home"
      className="relative w-full max-w-full bg-white overflow-hidden"
    >
      <div className="relative w-full overflow-hidden">
        {/* Subtle clean background dot-pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #164E3D18 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
          
          {/* Two-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center w-full">

            {/* ═══════════════════ LEFT CONTENT (7 COLS = 58%) ═══════════════════ */}
            <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 order-2 lg:order-1 text-left w-full min-w-0">

              {/* Main H1 Heading */}
              <div>
                <h1 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-[#164E3D] break-words">
                  {variety.name}
                </h1>
                <p className="mt-1 text-xs sm:text-base font-semibold text-[#164E3D] tracking-wide break-words">
                  {variety.subtitle}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="text-[#555F58] text-xs sm:text-sm leading-relaxed max-w-full">
                {variety.description}
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                {variety.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7FAF8] border border-[#E3EAE5] text-[#164E3D] text-xs font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#164E3D] shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              {/* ── Product Variety Selector (Clean Image Thumbnails) ── */}
              <div className="pt-1 w-full">
                <p className="text-[11px] font-bold tracking-widest text-[#555F58] uppercase mb-2">
                  SELECT VARIETY:
                </p>
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  {VARIETIES.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setSelected(i)}
                      aria-label={v.name}
                      className={`p-1 rounded-xl border-2 transition-all duration-200 ${
                        selected === i
                          ? 'border-[#164E3D] bg-[#E8F0EB] shadow-md scale-105'
                          : 'border-[#E3EAE5] bg-white hover:border-[#164E3D]/50 hover:bg-[#F7FAF8]'
                      }`}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm">
                        <img
                          src={v.thumbImage}
                          alt={v.name}
                          onError={handleImageError}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Action Buttons ── */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenInquiry) {
                      onOpenInquiry(variety.name);
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-[#164E3D] hover:bg-[#103B2F] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>INQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Buy Now button dynamically linking to the selected product URL */}
                <a
                  href={variety.link || "https://www.bhagvatprasadam.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-white border-2 border-[#164E3D] text-[#164E3D] hover:bg-[#164E3D] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm group"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0 text-[#164E3D] group-hover:text-white transition-colors" />
                  <span>BUY NOW</span>
                </a>
              </div>

            </div>

            {/* ═══════════════════ RIGHT IMAGE (5 COLS = 42%) ═══════════════════ */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 flex items-center justify-center w-full min-w-0">
              {/* Clickable Product Image linked to its exact product URL */}
              <a 
                href={variety.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${variety.name} on official Bhagvat Prasadam store`}
                className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto block group cursor-pointer"
              >
                <div className="relative rounded-2xl border-2 sm:border-4 border-white shadow-xl overflow-hidden aspect-[4/3.4] sm:aspect-[4/3.8] bg-[#F7FAF8] group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={variety.mainImage}
                    alt={`${variety.name} Pure Vedic Bilona Ghee in Traditional Jar`}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Hover indicator pill */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#164E3D]/90 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
                    <span>View Product</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Full-width banner below hero content */}
      <div className="w-full max-w-full overflow-hidden leading-none bg-[#dce9c8]">
        <img
          src="/images/pure-gir-cow-ghee-banner.png"
          alt="Pure Gir Cow Ghee 100% Natural & Pure Traditional Vedic Process"
          onError={handleImageError}
          className="w-full h-auto object-contain object-center block"
          loading="eager"
        />
      </div>
    </section>
  );
}
