import React, { useState } from 'react';
import { 
  X, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/gheeData';

export default function ProductInquiryModal({ isOpen, onClose, initialProduct = '', initialPackSize = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: initialProduct || PRODUCTS[0]?.name || '',
    packSize: initialPackSize || '1 Litre',
    quantity: '1',
    purpose: 'Personal / Family Use',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync state if modal is open and initial product differs
  const [lastProps, setLastProps] = useState({ product: initialProduct, packSize: initialPackSize });
  if (initialProduct !== lastProps.product || initialPackSize !== lastProps.packSize) {
    setLastProps({ product: initialProduct, packSize: initialPackSize });
    if (initialProduct) setFormData(prev => ({ ...prev, product: initialProduct }));
    if (initialPackSize) setFormData(prev => ({ ...prev, packSize: initialPackSize }));
  }

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number so our Gaushala team can assist you.');
      return;
    }
    const id = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(id);
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `*Product Inquiry [${inquiryId}]*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*City:* ${formData.city || 'India'}\n` +
      `*Product:* ${formData.product}\n` +
      `*Pack Size:* ${formData.packSize}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Purpose:* ${formData.purpose}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '') +
      `\nPlease share pricing, current fresh batch details, and delivery timelines.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(inquiryId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#0f3529] text-white rounded-3xl border-2 border-[#D8B879] shadow-2xl p-6 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-[#D8B879] hover:text-[#164E3D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-1 text-left">
              <span className="w-2 h-2 rounded-full bg-[#D8B879]"></span>
              <span className="text-[11px] uppercase tracking-widest text-[#164E3D] font-bold">
                Direct Gaushala Inquiry
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white text-left">
              Inquire for Vedic Ghee
            </h3>
            <p className="text-xs text-[#FAF8F1]/70 text-left mt-1 mb-5">
              Fill in your requirement. Our representative will contact you with batch freshness and rate details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                  Product *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D8B879]"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.name} className="bg-[#164E3D] text-white">
                      {p.name}
                    </option>
                  ))}
                  <option value="Custom Bulk Request / Multiple Tins" className="bg-[#164E3D] text-white">
                    Custom Bulk Request / Multiple Tins
                  </option>
                </select>
              </div>

              {/* Pack Size & Quantity */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    Pack Size *
                  </label>
                  <select
                    name="packSize"
                    value={formData.packSize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D8B879]"
                  >
                    <option value="250 ml Glass Jar">250 ml Glass Jar</option>
                    <option value="500 ml Glass Jar">500 ml Glass Jar</option>
                    <option value="1 Litre Glass Jar">1 Litre Glass Jar</option>
                    <option value="5 Litres Can">5 Litres Can</option>
                    <option value="15 Kg Bulk Tin">15 Kg Bulk Tin</option>
                    <option value="Handcrafted Brass Gifting Hamper">Handcrafted Brass Gifting Hamper</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 2 or 10 Jars"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm placeholder-white/40 focus:outline-none focus:border-[#D8B879]"
                  />
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm placeholder-white/40 focus:outline-none focus:border-[#D8B879]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98250 12345"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm placeholder-white/40 focus:outline-none focus:border-[#D8B879]"
                  />
                </div>
              </div>

              {/* City & Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    City &amp; State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Surat, Gujarat"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm placeholder-white/40 focus:outline-none focus:border-[#D8B879]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FAF8F1] mb-1">
                    Inquiry Type
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#164E3D] border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D8B879]"
                  >
                    <option value="Personal / Family Use">Personal / Family Use</option>
                    <option value="Bulk Wholesale Order (15kg+)">Bulk Wholesale Order (15kg+)</option>
                    <option value="Wedding / Festive Gifting">Wedding / Festive Gifting</option>
                    <option value="Ayurvedic Clinic / Vaidya">Ayurvedic Clinic / Vaidya</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D8B879] hover:bg-[#eeddb7] text-[#164E3D] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Product Inquiry</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-white/50">
                Or WhatsApp us directly at <span className="text-[#164E3D] font-medium">+91 98765 43210</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Result */
          <div className="py-6 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#D8B879]/20 text-[#164E3D] border-2 border-[#D8B879] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-[#164E3D]" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#164E3D] uppercase tracking-widest">
                Inquiry Logged
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Thank You, {formData.name}!
              </h3>
              <p className="text-xs text-[#FAF8F1]/80 max-w-sm mx-auto mt-1">
                We have registered your inquiry for <strong className="text-[#164E3D]">{formData.product}</strong> ({formData.packSize}).
              </p>
            </div>

            {/* Reference Number */}
            <div className="p-3 rounded-xl bg-[#164E3D] border border-[#D8B879]/40 max-w-xs mx-auto flex items-center justify-between">
              <div className="text-left text-xs">
                <span className="text-white/60 block text-[10px]">Reference Number:</span>
                <span className="font-mono font-bold text-sm text-[#164E3D]">{inquiryId}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyId}
                className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Copy reference code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#164E3D]" />}
              </button>
            </div>

            <div className="space-y-2.5 max-w-sm mx-auto pt-2">
              <button
                type="button"
                onClick={handleWhatsAppForward}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp Instantly</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
