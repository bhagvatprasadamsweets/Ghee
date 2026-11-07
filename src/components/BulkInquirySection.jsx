import React from 'react';
import { 
  Building2, 
  PackageCheck, 
  Award, 
  Truck, 
  FileSpreadsheet, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/gheeData';

export default function BulkInquirySection({ onOpenInquiry }) {
  const bulkSectors = [
    {
      title: "Ayurvedic Clinics & Vaidyas",
      desc: "Authentic Dadhi Mathita A2 Ghee acting as supreme Yogavahi for Panchakarma, Nasya, and classical herbal decoctions."
    },
    {
      title: "Royal Halwais & Sweet Artists",
      desc: "Exceptional heat tolerance, natural golden hue, and deep rich aroma that transforms traditional Indian sweets and dry fruit halwas."
    },
    {
      title: "Corporate & Wedding Gifting",
      desc: "Handcrafted pure brass pots packed in royal forest green velvet boxes with custom company/family crest printing."
    },
    {
      title: "Temple Trusts & Spiritual Ashrams",
      desc: "100% Shuddh Bilona Ghee from forest grazing Gomata for sacred Maha Yajnas, Hawans, and daily divine deity Bhog/Prasad."
    }
  ];

  const handleWhatsAppBulk = () => {
    const text = encodeURIComponent(
      `Namaste Vedic Amrit team! We are interested in wholesale/bulk commercial procurement (15kg+ tins or gifting hampers). Please connect us with your B2B department.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-8 bg-white relative">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Golden Border Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#164E3D] via-[#0f3529] to-[#0d2a20] text-white p-8 sm:p-12 lg:p-16 border-2 border-[#D8B879] shadow-2xl relative overflow-hidden">
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2e24] border border-[#D8B879]/50 text-[#164E3D] text-xs font-bold uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5 text-[#164E3D]" />
                Institutional, Wholesale &amp; B2B Procurement
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F1] leading-tight">
                Bulk Supply Directly from Our Gaushala
              </h2>

              <p className="text-sm sm:text-base text-[#FAF8F1]/85 leading-relaxed">
                Whether you need monthly contracted supplies of 15 Kg food grade tins or luxury brass gift sets for high profile weddings, we provide farm direct purity with standardized batch test reports and GST compliant invoicing.
              </p>

              {/* B2B Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <PackageCheck className="w-5 h-5 text-[#164E3D] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Tiered Wholesale Rates</div>
                    <div className="text-white/70">Substantial price benefits for 15kg, 45kg &amp; 150kg orders</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Award className="w-5 h-5 text-[#164E3D] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Batch COA &amp; Lab Certs</div>
                    <div className="text-white/70">NABL chemical test report included with every shipment</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Truck className="w-5 h-5 text-[#164E3D]" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Insured Freight Logistics</div>
                    <div className="text-white/70">Palletized road freight across all Indian states</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <FileSpreadsheet className="w-5 h-5 text-[#164E3D] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Custom Branding &amp; Packaging</div>
                    <div className="text-white/70">Private labeling options for luxury organic stores</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('Bulk / Wholesale Order (15kg+)', '15 Kg Bulk Tin')}
                  className="px-7 py-3.5 rounded-full bg-[#D8B879] hover:bg-[#eeddb7] text-[#164E3D] font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Submit Bulk Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppBulk}
                  className="px-7 py-3.5 rounded-full bg-[#0d2e24] hover:bg-[#123e31] text-[#FAF8F1] border border-[#D8B879]/70 font-semibold text-xs tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#164E3D]" />
                  <span>WhatsApp B2B Desk</span>
                </button>
              </div>
            </div>

            {/* Right: Who Procures From Us */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs uppercase font-bold text-[#164E3D] tracking-wider mb-2 text-left">
                Key Institutional Clients:
              </div>

              {bulkSectors.map((sector, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-[#D8B879]/20 hover:border-[#D8B879]/60 transition-colors text-left"
                >
                  <h4 className="font-serif text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]"></span>
                    {sector.title}
                  </h4>
                  <p className="text-xs text-white/75 mt-1 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
