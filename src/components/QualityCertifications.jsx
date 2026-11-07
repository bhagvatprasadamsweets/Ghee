import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Calculator
} from 'lucide-react';
import { QUALITY_METRICS, BRAND_INFO } from '../data/gheeData';

export default function QualityCertifications({ onOpenLabReport, onOpenInquiry }) {
  const [gheeQuantity, setGheeQuantity] = useState(2); // default 2 Litres

  // Purity Calculator Formulas
  const milkNeeded = gheeQuantity * 30; // 30 Litres milk per 1 Litre Ghee
  const curdFormed = gheeQuantity * 28;
  const churningMinutes = gheeQuantity * 45;
  const cowsPastureHours = gheeQuantity * 12;

  return (
    <section id="quality" className="py-8 bg-white relative">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9DFC8] border border-[#D8B879] text-[#164E3D] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#164E3D]" />
            Lab Tested Purity Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E3D] tracking-tight">
            Scientific Verification Meets Ancient Tradition
          </h2>

          <p className="text-[#5e665c] text-base sm:text-lg leading-relaxed">
            Every lot of Vedic Amrit Ghee is subjected to rigorous independent testing at government-approved NABL laboratories. We hold our products to the strictest purity standards.
          </p>
        </div>

        {/* Quality Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {QUALITY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E9DFC8] shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#164E3D]">
                    Standard: {metric.standard}
                  </span>
                  <span className="p-1 rounded-full bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="font-serif text-lg font-bold text-[#164E3D] mb-1">
                  {metric.label}
                </div>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-mono text-2xl font-bold text-[#164E3D]">
                    {metric.ourValue}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                    {metric.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E9DFC8]/60 text-[11px] text-[#5e665c]">
                FSSAI &amp; NABL Accredited Testing Method
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Milk-to-Ghee Purity Demonstrator */}
        <div className="rounded-3xl bg-white border-2 border-[#D8B879] p-6 sm:p-10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#164E3D]/10 text-[#164E3D] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5 text-[#164E3D]" />
                Interactive Purity Calculator
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#164E3D]">
                See How Much Pure Milk Goes Into Your Ghee
              </h3>

              <p className="text-xs sm:text-sm text-[#5e665c] leading-relaxed">
                Commercial brands add artificial thickeners or palm oil to mimic ghee with very little milk. Authentic Vedic Bilona requires nearly 30 litres of rich indigenous Gir cow milk to produce just 1 litre of pure ghee.
              </p>

              {/* Slider for Quantity */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-sm font-bold text-[#164E3D] mb-2">
                  <span>Desired Quantity of Ghee:</span>
                  <span className="text-lg font-mono text-[#164E3D] bg-[#164E3D] px-3 py-0.5 rounded-lg">
                    {gheeQuantity} Litre{gheeQuantity > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={gheeQuantity}
                  onChange={(e) => setGheeQuantity(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E9DFC8] rounded-lg appearance-none cursor-pointer accent-[#164E3D]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>1 Litre</span>
                  <span>5 Litres</span>
                  <span>10 Litres</span>
                  <span>15 Litres (Commercial Tin)</span>
                </div>
              </div>
            </div>

            {/* Visual Output Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#D8B879] text-center">
                <div className="text-xs text-[#5e665c] font-medium mb-1">Pure A2 Gir Cow Milk</div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#164E3D]">{milkNeeded} L</div>
                <div className="text-[11px] text-[#164E3D] font-bold mt-1">Hand-milked at Dawn</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#D8B879] text-center">
                <div className="text-xs text-[#5e665c] font-medium mb-1">Whole Curd Cultured</div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#164E3D]">{curdFormed} L</div>
                <div className="text-[11px] text-[#164E3D] font-bold mt-1">Overnight in Clay Pots</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#D8B879] text-center">
                <div className="text-xs text-[#5e665c] font-medium mb-1">Wooden Valona Churning</div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#164E3D]">~{churningMinutes} min</div>
                <div className="text-[11px] text-[#164E3D] font-bold mt-1">Gentle Hand Churned</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#D8B879] text-center">
                <div className="text-xs text-[#5e665c] font-medium mb-1">Graze Time on Wild Herbs</div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#164E3D]">~{cowsPastureHours} hrs</div>
                <div className="text-[11px] text-[#164E3D] font-bold mt-1">Open Forest Pasture</div>
              </div>

            </div>

          </div>
        </div>

        {/* Certifications Banner & Lab Report Trigger */}
        <div className="p-8 rounded-3xl bg-[#164E3D] text-white border border-[#D8B879]/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="px-3 py-1 rounded bg-[#D8B879]/20 text-[#164E3D] text-xs font-bold border border-[#D8B879]/40">
                FSSAI Lic. {BRAND_INFO.fssaiNumber}
              </span>
              <span className="px-3 py-1 rounded bg-[#D8B879]/20 text-[#164E3D] text-xs font-bold border border-[#D8B879]/40">
                NABL Accredited Lab Certificate
              </span>
              <span className="px-3 py-1 rounded bg-[#D8B879]/20 text-[#164E3D] text-xs font-bold border border-[#D8B879]/40">
                ISO 9001:2015 Certified Dairy
              </span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F1]">
              Want to inspect the detailed Chemical Analysis of our latest batch?
            </div>
            <div className="text-xs sm:text-sm text-[#FAF8F1]/80">
              Download or view the official Certificate of Analysis (COA) directly.
            </div>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <button
              onClick={onOpenLabReport}
              className="px-6 py-3 rounded-full bg-[#D8B879] hover:bg-[#eeddb7] text-[#164E3D] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4" />
              <span>View Lab Certificate</span>
            </button>

            <button
              onClick={() => onOpenInquiry('Quality Lab Test Documentation')}
              className="px-6 py-3 rounded-full bg-[#0d2e24] hover:bg-[#123e31] text-[#FAF8F1] border border-[#D8B879] font-semibold text-xs tracking-wider transition-all"
            >
              Request Batch Report by Email
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
