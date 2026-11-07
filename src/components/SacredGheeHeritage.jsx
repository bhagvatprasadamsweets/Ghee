import React from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  HeartHandshake
} from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function SacredGheeHeritage() {
  const current = {
    name: 'Gau Dham Traditional Ghee',
    hindiName: 'गौ धाम पारंपरिक देसी घी',
    mainImage: '/images/gau-dham-bilona.jpg',
    link: 'https://www.bhagvatprasadam.com/products/gau-dham-traditional-desi-cow-ghee?variant=46964366803093',
    buttonText: 'BUY GAU DHAM COW GHEE',
  };

  return (
    <section 
      id="sacred-heritage" 
      className="relative w-full py-8 bg-white overflow-hidden"
    >
      {/* Subtle organic background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #C6A15B33 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ── Two Column Responsive Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ═══════════════════ LEFT: PRODUCT IMAGES (5 COLS) ═══════════════════ */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Primary Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3.5] group">
              <img
                src={current.mainImage}
                alt={`${current.name} - ${current.hindiName} Authentic Desi Ghee`}
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Bottom-left pinned dark badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg border border-white/20">
                  {current.name} <span className="opacity-80 font-normal">({current.hindiName})</span>
                </div>
              </div>
            </div>


          </div>

          {/* ═══════════════════ RIGHT: 100% SEO CONTENT (7 COLS) ═══════════════════ */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            
            {/* Section H2 Title */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#164E3D] leading-tight tracking-tight">
                The Sacred Heritage of{' '}
                <span className="text-[#164E3D] block sm:inline">
                  Authentic Desi Cow Ghee.
                </span>
              </h2>
            </div>

            {/* Paragraph 1: High Engagement Narrative */}
            <p className="text-[#3A443E] text-sm sm:text-base leading-relaxed">
              From sacred morning Ayurvedic rituals and daily Vedic Agnihotra to nourishing family meals and rich festive Gujarati cuisine, <strong className="font-semibold text-[#164E3D]">Pure A2 Gir Cow Ghee</strong> and <strong className="font-semibold text-[#164E3D]">Gau Dham Desi Ghee</strong> are the very heartbeat of authentic Indian wellness, vitality, and Satvik nourishment.
            </p>

            {/* Paragraph 2: High SEO Density Content (100% SEO Keywords) */}
            <p className="text-[#555F58] text-xs sm:text-sm leading-relaxed">
              Handcrafted in the sacred tradition of <strong className="font-semibold text-[#164E3D]">Nilkanthdham Poicha &amp; Saurashtra Gaushalas, Gujarat</strong>, Bhagvat Prasadam master artisans bring you authentic, unadulterated Vedic nectar: golden danedar <strong className="font-semibold text-[#164E3D]">Pure Gir Cow Ghee</strong> and sacred <strong className="font-semibold text-[#164E3D]">Gau Dham Traditional Desi Cow Ghee</strong>. Every single batch is slowly churned strictly from cultured whole curd (Dahi) using traditional bi-directional wooden Valona churners—with <strong className="font-semibold text-[#164E3D]">zero palm oil, zero preservatives, 0% trans fat, 0% vanaspati dalda</strong>, and pure Satvik devotion.
            </p>

            {/* Two Side-by-Side Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Feature Card 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3EAE5] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#164E3D] shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#164E3D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#164E3D]">
                      100% Vedic A2 Bilona
                    </h3>
                    <p className="text-[11px] text-[#555F58] mt-0.5 leading-normal">
                      Zero cream boiling, zero palm oil, zero preservatives. Naturally churned from whole curd for rich aroma and golden danedar grains.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3EAE5] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#FAF1E3] text-[#164E3D] shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#164E3D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#164E3D]">
                      Poicha Satvik Tradition
                    </h3>
                    <p className="text-[11px] text-[#555F58] mt-0.5 leading-normal">
                      Made with supreme purity, sacred devotion, and free grazing indigenous Gir cows nurtured on open herbal pastures.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* Primary Green CTA Button */}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#164E3D] hover:bg-[#103B2F] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>{current.buttonText}</span>
                <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary White/Green Button */}
              <a
                href="#products"
                className="px-6 py-3 rounded-xl bg-white border-2 border-[#164E3D] text-[#164E3D] hover:bg-[#164E3D] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm"
              >
                EXPLORE GHEE SHOWCASE
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

