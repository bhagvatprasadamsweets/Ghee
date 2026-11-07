import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  Sun, 
  Truck, 
  Leaf,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs({ onOpenInquiry }) {
  const pillars = [
    {
      icon: <Sun className="w-7 h-7 text-[#164E3D]" />,
      title: "Indigenous Gir Cows (Surya Ketu Nadi)",
      desc: "Our sacred Gir cows possess a prominent hump housing the Surya Ketu Nadi, which absorbs solar energy to enrich the milk with natural golden carotene, bio available Vitamin A, and authentic A2 Beta Casein.",
      highlight: "100% Native Gir Breed"
    },
    {
      icon: <Droplets className="w-7 h-7 text-[#164E3D]" />,
      title: "Ancient Curd Bilona Churning",
      desc: "We follow the authentic Shastric protocol: Milk is cultured into whole curd (Dahi) overnight and hand churned with a wooden Valona at Brahma Muhurta (dawn). Absolutely zero industrial cream separators.",
      highlight: "Charaka Samhita Method"
    },
    {
      icon: <CheckCircle2 className="w-7 h-7 text-[#164E3D]" />,
      title: "Naturally Danedar (Granular) Texture",
      desc: "Real Bilona Ghee forms natural crystalline golden granules when cooled slowly in clay pots. This unique texture and aromatic depth cannot be duplicated by industrial hydrogenated or chemical processes.",
      highlight: "Signature Golden Grain"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#164E3D]" />,
      title: "NABL Certified Lab Purity",
      desc: "Every single lot undergoes independent laboratory analysis for RM value (>28.0), zero peroxide rancidity, and negative Baudouin test confirming 0% vanaspati or adulterating vegetable oils.",
      highlight: "Batch wise COA Available"
    },
    {
      icon: <Leaf className="w-7 h-7 text-[#164E3D]" />,
      title: "Zero Chemicals & Pure Ahimsa",
      desc: "Our cows graze on open grasslands rich in wild medicinal herbs. They are never fed bone meal, slaughterhouse wastes, synthetic growth hormones (BST), or prophylactic antibiotics.",
      highlight: "Ethical & Cruelty Free"
    },
    {
      icon: <Truck className="w-7 h-7 text-[#164E3D]" />,
      title: "Shockproof Glass Jar Delivery",
      desc: "We pack only in heavy food grade UV safe glass jars with eco friendly corrugated honeycomb protection. 100% free doorstep transit replacement guarantee across 19,000+ Indian pincodes.",
      highlight: "Zero Plastic Leaching"
    }
  ];

  return (
    <section id="why-us" className="py-8 bg-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2e24] border border-[#D8B879]/50 text-[#164E3D] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#164E3D]" />
            Purity You Can Trust
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E3D] tracking-tight">
            Why Vedic Amrit is the Sacred Choice
          </h2>

          <p className="text-[#5e665c] text-base sm:text-lg leading-relaxed">
            In an era where supermarket shelves are flooded with adulterated, chemical processed ghee, we hold sacred the timeless traditions of pure Vedic dairy farming.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[#0f3529] border border-[#D8B879]/30 hover:border-[#D8B879] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#164E3D] border border-[#D8B879]/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#D8B879]/15 text-[#164E3D] border border-[#D8B879]/30">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#164E3D] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF8F1]/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8B879]/20 flex items-center justify-between text-xs text-[#164E3D]">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Pure Standard
                </span>
                <span className="text-white/40">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Gaushala Promise */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0d2a20] to-[#0f3529] border border-[#D8B879]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <div className="text-xs text-[#164E3D] uppercase font-bold tracking-widest">
              Direct Gaushala Guarantee
            </div>
            <div className="font-serif text-2xl font-bold text-white">
              “If our Ghee fails any government NABL lab purity test, we refund 100% of your order.”
            </div>
            <div className="text-xs text-[#FAF8F1]/70">
              Such is our unwavering confidence in the integrity of our Gir cows and Vedic Bilona process.
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#eeddb7] text-[#164E3D] font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2"
          >
            <span>Inquire for Fresh Batch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
