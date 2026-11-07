import React from 'react';
import { 
  Check, 
  X
} from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function AboutHeritage({ onOpenInquiry }) {
  // 7 Genuine, verified traditional comparisons
  const comparisonRows = [
    {
      param: 'Base Ingredient',
      ourGhee: 'Pure cow milk',
      otherGhee: 'Commercial dairy milk or cream',
    },
    {
      param: 'Preparation Method',
      ourGhee: 'Traditional preparation process',
      otherGhee: 'Industrial production process',
    },
    {
      param: 'Churning Method',
      ourGhee: 'Traditional Bilona method (where applicable)',
      otherGhee: 'Mechanical cream separation',
    },
    {
      param: 'Milk Source',
      ourGhee: 'Desi cow milk (as verified)',
      otherGhee: 'Milk sourced through commercial dairy supply chains',
    },
    {
      param: 'Production Style',
      ourGhee: 'Traditional and quality focused',
      otherGhee: 'Large scale commercial production',
    },
    {
      param: 'Texture & Aroma',
      ourGhee: 'Naturally rich texture and traditional aroma',
      otherGhee: 'Texture and aroma may vary',
    },
    {
      param: 'Preparation Philosophy',
      ourGhee: 'Inspired by traditional Indian dairy practices',
      otherGhee: 'Standardized commercial manufacturing',
    },
  ];

  return (
    <section 
      id="about" 
      className="w-full max-w-full overflow-hidden py-10 sm:py-12 bg-white relative"
      aria-label="What Is Ghee Information Section"
    >
      {/* Subtle organic background dot pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #164E3D15 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 1. "WHAT IS GHEE?" TWO-COLUMN EDITORIAL HERO               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* ── LEFT COLUMN: Text, Heading & Informative Story (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col text-left w-full min-w-0">
            
            {/* Semantic H2 Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#164E3D] leading-[1.18] tracking-tight">
              What Is Ghee?
            </h2>

            {/* Subheading */}
            <h3 className="font-serif text-xl sm:text-2xl lg:text-[25px] font-medium text-[#164E3D] mt-2 mb-4">
              The Golden Essence of Pure Tradition
            </h3>

            {/* First Description Paragraph */}
            <p className="text-[#3A443E] text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-4">
              Ghee is a <strong className="font-semibold text-[#164E3D]">traditional Indian clarified butter</strong> made by gently heating butter to separate moisture and milk solids, leaving behind a rich, <span className="bg-[#FAF5EB] px-1.5 py-0.5 rounded text-[#164E3D] font-medium border border-[#E9DFC8]/60 inline-block">golden and aromatic goodness</span>.
            </p>

            {/* Second Description Paragraph */}
            <p className="text-[#555F58] text-xs sm:text-sm lg:text-base leading-relaxed mb-5">
              For generations, ghee has been treasured in Indian kitchens for its rich aroma, distinctive taste and <span className="bg-[#FAF5EB] px-1.5 py-0.5 rounded text-[#164E3D] font-medium border border-[#E9DFC8]/60 inline-block">traditional significance</span>. Prepared using traditional methods, it brings the authentic taste of Indian tradition to every meal.
            </p>

            {/* SEO-Rich Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164E3D] mt-2 shrink-0" />
                <p className="text-xs sm:text-[13px] text-[#555F58] leading-snug">
                  <strong className="text-[#164E3D] font-semibold">Traditional Desi Ghee:</strong> Slow churned from cultured curd (Dahi), not raw industrial cream.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164E3D] mt-2 shrink-0" />
                <p className="text-xs sm:text-[13px] text-[#555F58] leading-snug">
                  <strong className="text-[#164E3D] font-semibold">Pure Cow Ghee:</strong> Rich in fat soluble vitamins, high smoke point, and signature danedar grains.
                </p>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: ONE Large Beautiful Authentic Photograph (5 Cols) ── */}
          <div className="lg:col-span-5 relative w-full min-w-0">
            
            {/* Subtle decorative frame accent behind image */}
            <div 
              className="absolute -inset-2.5 rounded-[28px] border border-[#164E3D]/15 bg-[#FAF5EB]/50 -z-10 transform translate-x-1 translate-y-1 hidden sm:block" 
              aria-hidden="true"
            />

            {/* Single Cohesive Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E9DFC8] bg-white shadow-xl group w-full">
              <div className="relative aspect-[4/3.2] sm:aspect-[4/3] w-full bg-[#FAF5EB] overflow-hidden">
                <img
                  src="/images/what-is-ghee-traditional-bilona.webp"
                  alt="Traditional Indian Bilona method of preparing homemade desi cow ghee"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  width="1376"
                  height="768"
                />
              </div>
            </div>

          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 2. "KNOW THE TRUTH BEHIND YOUR GHEE" COMPARISON TABLE       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="mt-14 sm:mt-20 pt-4 w-full">
          
          {/* Section Heading Area (Pure White Background) */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4 bg-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#164E3D] tracking-tight leading-tight">
              Know The Truth Behind Your Ghee
            </h2>
            <p className="font-serif text-lg sm:text-xl font-medium text-[#164E3D] mt-2">
              Our Ghee vs Other Ghee
            </p>
          </div>

          {/* Clean Three-Column Comparison Table Container */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E9DFC8] shadow-lg overflow-hidden w-full">
            
            {/* Table Comparison Grid with mobile scroll indicator */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[540px] sm:min-w-[640px]">
                <thead>
                  <tr className="bg-[#FAF8F1]/80">
                    <th className="py-3 sm:py-4 px-3 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#164E3D] w-1/3">
                      Comparison Parameter
                    </th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#164E3D] bg-[#164E3D]/5 w-1/3">
                      <span>Our Ghee</span>
                    </th>
                    <th className="py-3 sm:py-4 px-3 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#555F58] w-1/3">
                      Other Ghee
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9DFC8]/60 text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-[#FAF5EB]/40 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F1]/40'
                      }`}
                    >
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-[#164E3D]">
                        {row.param}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-medium text-[#164E3D] bg-[#164E3D]/5">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#164E3D] text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                          </span>
                          <span className="leading-snug">{row.ourGhee}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-[#555F58]">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FAF5EB] text-[#7A847E] border border-[#E9DFC8] flex items-center justify-center shrink-0">
                            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{row.otherGhee}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
