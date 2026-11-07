import React, { useState } from 'react';
import { 
  ChevronDown
} from 'lucide-react';
import { FAQS } from '../data/gheeData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-12 bg-white relative">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E3D] tracking-tight">
            Everything You Need to Know
          </h2>

          <p className="text-[#555F58] text-base leading-relaxed mt-2">
            Transparent answers regarding our Vedic Bilona method, laboratory testing, storage life, and inquiry procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#E9DFC8] overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#164E3D] leading-snug">
                    {faq.question}
                  </span>
                  <span 
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-[#164E3D] text-white rotate-180' : 'bg-[#FAF8F1] text-[#164E3D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#555F58] leading-relaxed border-t border-[#E9DFC8]/50 text-left">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
