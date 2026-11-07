import React from 'react';
import { 
  X, 
  Check, 
  Send, 
  MessageCircle 
} from 'lucide-react';
import { BRAND_INFO } from '../data/gheeData';
import { handleImageError } from '../utils/imageFallback';

export default function ProductDetailsModal({ product, onClose, onOpenInquiry }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Vedic Amrit! I would like to inquire about "${product.name}". Please share current batch availability, pricing, and dispatch details.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0f3529] text-white rounded-3xl border-2 border-[#D8B879] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[#D8B879] hover:text-[#164E3D] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Hero */}
        <div className="relative aspect-[16/8] w-full bg-black overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3529] via-[#0f3529]/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-left">
            <span className="px-3 py-1 rounded-full bg-[#164E3D] text-[#164E3D] border border-[#D8B879]/50 text-[10px] font-bold tracking-widest uppercase">
              {product.badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#164E3D] font-medium">
              {product.subtitle}
            </p>
          </div>
        </div>

        {/* Body Specs & Nutrition */}
        <div className="p-6 sm:p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#164E3D] mb-1">
              About This Sacred Batch
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF8F1]/85 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#164E3D] mb-2">
              Key Nutritional &amp; Ayurvedic Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#FAF8F1]/90">
                  <Check className="w-4 h-4 text-[#164E3D] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition Table */}
          {product.nutritionPer100g && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#164E3D] mb-2">
                Nutritional Values (Approx per 100g)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {Object.entries(product.nutritionPer100g).map(([k, v]) => (
                  <div key={k} className="p-2.5 rounded-xl bg-[#164E3D] border border-white/10">
                    <span className="text-white/60 block text-[10px] capitalize">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="font-mono font-bold text-[#164E3D]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pack sizes and texture */}
          <div className="p-4 rounded-2xl bg-[#164E3D] border border-[#D8B879]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-white/60 block text-[10px]">Aroma &amp; Texture Profile:</span>
              <span className="font-semibold text-white">{product.aroma} • {product.texture}</span>
            </div>
            <div>
              <span className="text-white/60 block text-[10px]">Available Pack Sizes:</span>
              <span className="font-medium text-[#164E3D]">{product.packSizes.join(', ')}</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#0d2a20] border-t border-[#D8B879]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#FAF8F1]/70 text-center sm:text-left">
            Inquiry-only reserve • Freshly churned weekly
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(product.name, product.defaultPack);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#D8B879] hover:bg-[#eeddb7] text-[#164E3D] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Inquire For This Ghee</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow"
              title="Inquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
