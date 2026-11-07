import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileCheck, 
  Download, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';
import { BRAND_INFO, QUALITY_METRICS } from '../data/gheeData';

export default function LabReportModal({ isOpen, onClose, onOpenInquiry }) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Vedic Amrit! Please send me the latest signed NABL batch Certificate of Analysis (COA) for your A2 Gir Cow Bilona Ghee.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white text-[#252A24] rounded-3xl border-2 border-[#D8B879] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Certificate Header */}
        <div className="bg-[#164E3D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#D8B879] hover:text-[#164E3D] transition-colors"
            aria-label="Close lab certificate"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0f3529] border border-[#D8B879] flex items-center justify-center text-[#164E3D]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-widest text-[#164E3D] font-bold">
                Government Approved Testing Standard
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Certificate of Analysis (COA)
              </h3>
              <p className="text-xs text-[#FAF8F1]/70">
                NABL Accredited Analytical Dairy Laboratory Report • Batch: VA-2026-A2B
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left max-h-[65vh] overflow-y-auto">
          
          {/* Metadata Box */}
          <div className="p-4 rounded-2xl bg-[#FAF8F1] border border-[#E9DFC8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-gray-400 block text-[10px]">Sample Description:</span>
              <span className="font-bold text-[#164E3D]">A2 Gir Cow Bilona Ghee</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">FSSAI License:</span>
              <span className="font-mono font-medium text-[#252A24]">{BRAND_INFO.fssaiNumber}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">Test Standard:</span>
              <span className="font-medium text-[#252A24]">FSSAI &amp; ISO 9001:2015</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px]">Lab Certification:</span>
              <span className="font-bold text-emerald-700">{BRAND_INFO.nablCert}</span>
            </div>
          </div>

          {/* Test Parameters Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#164E3D] mb-2 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#164E3D]" />
              Physical &amp; Chemical Test Results
            </h4>

            <div className="border border-[#E9DFC8] rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F1] border-b border-[#E9DFC8] text-[#164E3D]">
                    <th className="py-2.5 px-4 font-bold">Parameter</th>
                    <th className="py-2.5 px-4 font-bold">FSSAI Limit</th>
                    <th className="py-2.5 px-4 font-bold">Observed Value</th>
                    <th className="py-2.5 px-4 font-bold text-right">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9DFC8]/60">
                  {QUALITY_METRICS.map((m, i) => (
                    <tr key={i} className="hover:bg-[#FAF8F1]/40">
                      <td className="py-2.5 px-4 font-semibold text-[#252A24]">{m.label}</td>
                      <td className="py-2.5 px-4 text-[#5e665c]">{m.standard}</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-[#164E3D]">{m.ourValue}</td>
                      <td className="py-2.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Passed
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#252A24]">Beta-Casein Protein Variant</td>
                    <td className="py-2.5 px-4 text-[#5e665c]">Genetic Testing</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-[#164E3D]">100% A2 Variant (Pure)</td>
                    <td className="py-2.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#252A24]">Synthetic Colors &amp; Fragrance</td>
                    <td className="py-2.5 px-4 text-[#5e665c]">Must be Absent</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-[#164E3D]">Not Detected (0%)</td>
                    <td className="py-2.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Pure
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
            <strong>Analytical Laboratory Opinion:</strong> The submitted sample of Vedic Amrit A2 Gir Cow Bilona Ghee conforms in all parameters to the statutory quality specifications under the Food Safety and Standards (Food Products Standards and Food Additives) Regulations. The sample is free from adulteration, foreign fats, mineral oils, or prohibited synthetic antioxidants.
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#FAF8F1] border-t border-[#E9DFC8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#5e665c] text-center sm:text-left">
            Need a stamped PDF for commercial or hospital audit?
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry('Official Lab Certificate PDF Copy');
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#164E3D] hover:bg-[#0f3529] text-[#164E3D] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Request Signed PDF</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow"
              title="Get Report on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Copy</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
