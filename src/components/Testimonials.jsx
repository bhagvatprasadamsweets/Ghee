import React from 'react';
import { 
  Sparkles, 
  Star, 
  Quote, 
  CheckCircle 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/gheeData';

export default function Testimonials({ onOpenInquiry }) {
  return (
    <section className="py-8 bg-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2e24] border border-[#D8B879]/50 text-[#164E3D] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#164E3D]" />
            Words of Reverence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E3D] tracking-tight">
            Trusted by Doctors, Chefs &amp; Families
          </h2>

          <p className="text-[#5e665c] text-base sm:text-lg leading-relaxed">
            Read authentic experiences from those who have reintroduced the true golden nectar of Vedic Bilona Ghee to their daily lives and establishments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-8 rounded-3xl bg-[#0f3529] border border-[#D8B879]/30 hover:border-[#D8B879] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8B879] text-[#164E3D]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-[#164E3D] flex items-center gap-1 bg-[#164E3D] px-2.5 py-0.5 rounded-full border border-[#D8B879]/30">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {t.verified}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#FAF8F1]/90 italic leading-relaxed mb-6 font-serif">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8B879]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#164E3D] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#FAF8F1]/60">
                    {t.role}
                  </p>
                </div>

                <Quote className="w-8 h-8 text-[#164E3D]/20 group-hover:text-[#164E3D]/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action prompt */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 p-2 px-6 rounded-full bg-[#0d2e24] border border-[#D8B879]/40 text-xs sm:text-sm text-[#FAF8F1]">
            <span>Ready to experience the golden aroma yourself?</span>
            <button
              onClick={() => onOpenInquiry()}
              className="text-[#164E3D] font-bold hover:underline flex items-center gap-1"
            >
              Send an Inquiry &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
