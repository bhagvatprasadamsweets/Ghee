import React from 'react';
import { handleImageError } from '../utils/imageFallback';

export default function PurityPromise({ onOpenInquiry }) {
  // 6 Premium Verified Purity Promise Cards
  const promises = [
    {
      id: '01',
      title: 'Pure Cow Milk',
      desc: 'Use quality cow milk as the foundation of our ghee.',
      image: '/images/bilona-step1-milking.webp',
      alt: 'Pure quality cow milk collected as the pure foundation of Bhagvat Prasadam ghee',
    },
    {
      id: '02',
      title: 'Traditional Bilona Method',
      desc: 'Prepared using the traditional Bilona method.',
      image: '/images/bilona-step3-churning.webp',
      alt: 'Traditional wooden Bilona method of churning whole curd into pure butter',
    },
    {
      id: '03',
      title: 'No Artificial Colours',
      desc: 'No artificial colours added.',
      image: '/images/bilona-step5-heating.webp',
      alt: 'Natural golden color of authentic cow ghee with zero artificial colours added',
    },
    {
      id: '04',
      title: 'No Added Preservatives',
      desc: 'Focus on maintaining natural product quality without added preservatives.',
      image: '/images/bilona-step4-butter.webp',
      alt: 'Natural product quality preserved without added preservatives or chemicals',
    },
    {
      id: '05',
      title: 'Hygienic Preparation',
      desc: 'Clean and hygienic preparation and handling.',
      image: '/images/bilona-step2-curd.webp',
      alt: 'Clean and hygienic preparation and handling in traditional sacred vessels',
    },
    {
      id: '06',
      title: 'Quality Packaging',
      desc: 'Carefully packed to maintain product quality.',
      image: '/images/bilona-step6-filtering.webp',
      alt: 'Carefully packed pure desi ghee in glass jars to maintain natural aroma and quality',
    },
  ];

  return (
    <section 
      id="purity-promise" 
      className="py-10 sm:py-12 bg-white relative overflow-hidden"
      aria-label="Our Promise of Purity Section"
    >
      {/* Subtle organic background dot pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #164E3D15 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#164E3D] tracking-tight leading-tight">
            Our Promise of Purity
          </h2>
          
          <p className="font-serif text-lg sm:text-xl font-medium text-[#164E3D] mt-2">
            Pure Ingredients Traditional Craft Honest Quality
          </p>

          <p className="text-sm sm:text-base text-[#555F58] mt-3 leading-relaxed max-w-2xl mx-auto font-normal">
            Every drop of Bhagvat Prasadam desi cow ghee is crafted with unwavering reverence, honoring traditional Vedic dairy traditions and natural integrity.
          </p>
        </div>

        {/* ── Responsive Grid: 2 Columns on Mobile (2 ke niche 2 cards), 2-Col Tablet, 3-Col Desktop ── */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
          {promises.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#E9DFC8] hover:border-[#164E3D] p-3 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left group relative overflow-hidden"
            >
              {/* Subtle top light green ambient glow on hover */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#164E3D]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" 
                aria-hidden="true"
              />

              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-4 bg-[#FAF5EB] border border-[#E9DFC8]/70">
                  <img
                    src={item.image}
                    alt={item.alt}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-sm sm:text-xl lg:text-2xl font-bold text-[#164E3D] mb-1 sm:mb-2 leading-snug tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[11px] sm:text-xs lg:text-sm text-[#555F58] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Trust Mark */}
              <div className="pt-2 sm:pt-4 mt-3 sm:mt-5 border-t border-[#E9DFC8]/60 flex items-center justify-between text-[9px] sm:text-[11px] text-[#7A847E]">
                <span className="text-[#164E3D] font-semibold">
                  Verified Standard
                </span>
                <span className="font-serif italic text-[#164E3D] hidden xs:inline">
                  Bhagvat Prasadam
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
