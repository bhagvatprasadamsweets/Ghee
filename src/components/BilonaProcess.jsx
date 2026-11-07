import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export default function BilonaProcess({ onOpenInquiry }) {
  const [currentStep, setCurrentStep] = useState(0);

  // 6 Verified Ghee Making Process Steps with 100% SEO Content & Value Highlights
  const steps = [
    {
      number: 1,
      stepLabel: 'STEP 1',
      title: 'Fresh Desi Cow Milk Collection',
      desc: 'The sacred journey begins at dawn with wholesome milk ethically harvested from pasture grazing indigenous Gir cows. Nurtured on natural green fodder and medicinal forest herbs, our cows produce pure nutrient dense milk that serves as the unadulterated foundation of authentic Vedic ghee.',
      image: '/images/bilona-step1-milking.webp',
      alt: 'Fresh pure cow milk ethically harvested at dawn for authentic Vedic Bilona ghee preparation',
      tag: 'Indigenous Gir Breed',
      highlights: [
        'Ethically milked pasture grazing Indian Gir cows',
        'Natural whole cow milk rich in vital nutrients and aroma',
        'Zero synthetic hormones, chemical feeds, or artificial boosters',
      ],
      keyStat: '100% Pure Raw Cow Milk',
    },
    {
      number: 2,
      stepLabel: 'STEP 2',
      title: 'Traditional Curd Preparation (Dahi)',
      desc: 'Fresh whole milk is gently brought to a boil in traditional earthen vessels over mild heat, allowed to naturally cool to room temperature, and seeded with an indigenous probiotic starter culture. Slowly fermented overnight into thick, wholesome Vedic curd (Dahi) to develop beneficial digestive enzymes and organic acids.',
      image: '/images/bilona-step2-curd.webp',
      alt: 'Whole cow milk cultured into probiotic curd Dahi in traditional earthen pots',
      tag: 'Earthen Pot Culturing',
      highlights: [
        'Whole milk culturing (Never raw commercial cream boiling)',
        'Traditional earthen pots maintain optimum fermentation temperature',
        'Develops natural probiotic enzymes and gut healing butyric acid',
      ],
      keyStat: 'Slow Overnight Natural Culturing',
    },
    {
      number: 3,
      stepLabel: 'STEP 3',
      title: 'Bi Directional Wooden Bilona Churning',
      desc: 'The thick cultured curd is transferred into large earthen vessels and hand-churned before sunrise using a traditional two way wooden Valona (Bilona). This rhythmic bi directional movement naturally splits whole cultured curd into pure white aromatic butter (Makkhan) and light cooling buttermilk (Chhachh).',
      image: '/images/bilona-step3-churning.webp',
      alt: 'Bi directional wooden Bilona Valona churning whole curd in traditional earthen pot',
      tag: 'Wooden Valona Movement',
      highlights: [
        'Authentic bi directional wooden churner honoring ancient Shastras',
        'Separates delicate fat globules without mechanical heat friction',
        'Generates pure buttermilk and light, fragrant butter flakes',
      ],
      keyStat: 'Vedic Hand Churned Method',
    },
    {
      number: 4,
      stepLabel: 'STEP 4',
      title: 'Fresh White Butter (Makkhan) Collection',
      desc: 'The floating golden white butter clusters (Loni / Makkhan) are gently gathered by hand from the buttermilk and thoroughly washed with pristine freshwater to eliminate residual sourness. This pure, unheated butter retains all the vital fat soluble nutrients and live probiotics before clarifying.',
      image: '/images/bilona-step4-butter.webp',
      alt: 'Fresh white butter Makkhan separated from buttermilk in an authentic earthen bowl',
      tag: 'Pure White Makkhan',
      highlights: [
        'Hand collected unheated butter clusters rich in bioactive lipids',
        'Thoroughly rinsed in cold water to ensure sweet, nutty longevity',
        'Zero industrial separators, emulsifiers, or bleaching agents',
      ],
      keyStat: '100% Cultured Makkhan',
    },
    {
      number: 5,
      stepLabel: 'STEP 5',
      title: 'Slow Heating & Clarification',
      desc: 'The cultured butter is placed in a heavy brass or clay kadai and gently simmered on a very mild, controlled fire. Over several hours of slow boiling, the water content completely evaporates, caramelized milk solids settle at the bottom, and radiant golden liquid ghee clarifies with its heavenly danedar crystalline texture and divine nutty fragrance.',
      image: '/images/bilona-step5-heating.webp',
      alt: 'Slow clarifying of cultured butter on mild wood fire in traditional brass kadai',
      tag: 'Mild Traditional Heat',
      highlights: [
        'Low temperature simmer preserving heat sensitive vitamins A, D, E & K',
        'Golden granular (Danedar) grain crystallization naturally achieved',
        'Subtle, heavenly aroma of authentic village churned desi ghee',
      ],
      keyStat: 'Slow Fire Clarification',
    },
    {
      number: 6,
      stepLabel: 'STEP 6',
      title: 'Straining & Airtight Glass Packaging',
      desc: 'Once cooled to ideal warmth, the pure golden ghee is filtered through fine unbleached muslin fabric to achieve crystal clear purity. It is immediately poured into sanitized food grade glass jars and sealed airtight, safeguarding its natural granular texture, healing prana, and exquisite taste without any synthetic preservatives.',
      image: '/images/bilona-step6-filtering.webp',
      alt: 'Pure golden desi cow ghee filtered through muslin cloth into airtight glass jars',
      tag: 'Airtight Glass Packaging',
      highlights: [
        'Fine muslin cloth filtration for spotless clarified purity',
        'Packed in 100% recyclable, non reactive food grade glass jars',
        'Long natural shelf life with zero added preservatives or chemicals',
      ],
      keyStat: 'Zero Chemical Additives',
    },
  ];

  const current = steps[currentStep];

  return (
    <section 
      id="bilona-process" 
      className="py-10 sm:py-12 bg-white relative overflow-hidden w-full max-w-full"
      aria-label="How Our Ghee Is Made Section"
    >
      {/* Subtle organic background dot pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #164E3D15 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Full width container matched with the rest of the website (max-w-7xl) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#164E3D] tracking-tight leading-tight">
            How Our Ghee Is Made
          </h2>
          <p className="font-serif text-lg sm:text-xl font-medium text-[#164E3D] mt-2">
            From Pure Desi Cow Milk to Golden Ghee.
          </p>
        </div>

        {/* ── Compact Connected Progress Step Tracker ───── */}
        <div className="mb-8 px-2 max-w-4xl mx-auto w-full">
          <div className="relative flex items-center justify-between">
            
            {/* Connecting Line running through all 6 circles */}
            <div 
              className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-1 bg-[#E9DFC8] -z-0"
              aria-hidden="true"
            />

            {/* Active Progress Line */}
            <div 
              className="absolute left-5 top-1/2 -translate-y-1/2 h-1 bg-[#164E3D] transition-all duration-500 ease-out -z-0"
              style={{
                width: `calc(${(currentStep / (steps.length - 1)) * 100}% * ((100% - 40px) / 100%))`,
              }}
              aria-hidden="true"
            />

            {/* Number Circles 1 through 6 */}
            {steps.map((s, idx) => {
              const isActive = currentStep === idx;
              const isPast = currentStep > idx;

              return (
                <button
                  key={s.number}
                  onClick={() => setCurrentStep(idx)}
                  aria-label={`Go to ${s.title}`}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm sm:text-base transition-all duration-300 shadow-md ${
                      isActive
                        ? 'bg-[#164E3D] text-white scale-110 ring-4 ring-[#164E3D]/20 shadow-lg'
                        : isPast
                        ? 'bg-[#164E3D] text-white hover:scale-105'
                        : 'bg-white text-[#7A847E] border-2 border-[#E9DFC8] hover:border-[#164E3D] hover:text-[#164E3D]'
                    }`}
                  >
                    {s.number}
                  </div>
                  <span 
                    className={`hidden sm:block text-[11px] font-bold uppercase mt-1.5 transition-colors ${
                      isActive ? 'text-[#164E3D]' : 'text-[#7A847E]'
                    }`}
                  >
                    Step {s.number}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Balanced Full Width Active Step Card ── */}
        <div className="rounded-3xl bg-white border-2 border-[#E9DFC8] shadow-xl overflow-hidden transition-all duration-500 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch w-full">
            
            {/* LEFT / TOP: Image (6 Cols) */}
            <div className="md:col-span-6 relative bg-[#FAF5EB] overflow-hidden aspect-[16/11] md:aspect-auto md:min-h-[440px] w-full">
              <img
                key={current.number}
                src={current.image}
                alt={current.alt}
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Badge overlay on Image */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-[#164E3D]/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  {current.tag}
                </span>
              </div>

              {/* Bottom Subtle Stat Tag on Image */}
              <div className="absolute bottom-3.5 left-3.5 z-10 hidden sm:block">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#164E3D] text-[11px] font-semibold tracking-wide border border-[#E9DFC8] shadow-sm">
                  {current.keyStat}
                </span>
              </div>
            </div>

            {/* RIGHT: Step Details, SEO Highlights & Controls (6 Cols) */}
            <div className="md:col-span-6 p-6 sm:p-8 lg:p-9 flex flex-col justify-between text-left bg-white w-full min-w-0">
              
              <div className="space-y-4">
                {/* Step Sub-label & Stage Count */}
                <div className="flex items-center justify-between border-b border-[#E9DFC8]/60 pb-2.5">
                  <span className="text-xs font-bold tracking-widest text-[#164E3D] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#164E3D]" />
                    <span>{current.stepLabel} OF 06</span>
                  </span>
                  <span className="text-xs font-serif font-bold text-[#7A847E]">
                    Stage {current.number}/6
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#164E3D] leading-tight tracking-tight">
                  {current.title}
                </h3>

                {/* Step Rich Description (100% SEO) */}
                <p className="text-xs sm:text-sm text-[#555F58] leading-relaxed font-normal">
                  {current.desc}
                </p>

                {/* SEO-Rich Traditional Bilona Highlights (Fills the blank space elegantly) */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#164E3D] uppercase tracking-wider block mb-2">
                    Key Quality Attributes:
                  </span>
                  <div className="space-y-2">
                    {current.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#445048] leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#164E3D] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Bar: Prev / Next */}
              <div className="pt-5 mt-6 border-t border-[#E9DFC8]/60 flex items-center justify-between gap-3">
                
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    currentStep === 0
                      ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400'
                      : 'bg-white border border-[#164E3D] text-[#164E3D] hover:bg-[#FAF5EB]'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                {/* Next or Restart Button */}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-[#164E3D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#103B2F] transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Next: Step {currentStep + 2}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(0)}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-[#164E3D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#103B2F] transition-all shadow-md"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart from Step 1</span>
                  </button>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
