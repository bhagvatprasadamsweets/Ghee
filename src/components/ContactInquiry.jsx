import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { BRAND_INFO } from '../data/gheeData';

export default function ContactInquiry({ prefilledProduct = '', prefilledPackSize = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: prefilledProduct || 'Pure Gir Cow Ghee',
    packSize: prefilledPackSize || '1000 ML',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync if prefilled props change
  const [lastProps, setLastProps] = useState({ product: prefilledProduct, packSize: prefilledPackSize });
  if (prefilledProduct !== lastProps.product || prefilledPackSize !== lastProps.packSize) {
    setLastProps({ product: prefilledProduct, packSize: prefilledPackSize });
    if (prefilledProduct) setFormData(prev => ({ ...prev, product: prefilledProduct }));
    if (prefilledPackSize) setFormData(prev => ({ ...prev, packSize: prefilledPackSize }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and WhatsApp/Phone number so our team can assist you.');
      return;
    }

    const generatedId = 'GHEE ' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(generatedId);
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const message = encodeURIComponent(
      `*New Ghee Order Inquiry [${inquiryId}]*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*Ghee Type:* ${formData.product}\n` +
      `*Pack / Weight:* ${formData.packSize}\n` +
      (formData.message ? `*Requirement / City:* ${formData.message}\n` : '') +
      `\nPlease share fresh batch pricing and doorstep dispatch details across India.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(inquiryId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-10 sm:py-12 bg-white relative overflow-hidden"
      aria-label="Get In Touch & Place Inquiry Section"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Side by Side Card Container matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ═══════════════════════════════════════════════════════════ */}
          {/* LEFT CARD: Dark Green (#164E3D) Theme                       */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 rounded-[32px] bg-gradient-to-b from-[#164E3D] to-[#0A261D] text-white p-7 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-between text-left">
            
            <div>
              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug mb-3">
                Get In Touch &amp; Place Inquiry
              </h2>

              {/* Sub-description */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8 font-normal">
                Fill out the quick form to receive bespoke quotations, custom festive gift packaging, and express dispatch schedules across India.
              </p>

              {/* Contact Info List with Rounded Icon Badges */}
              <div className="space-y-6">
                
                {/* 1. Kitchen & Gaushala Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-white block">
                      Kitchen &amp; Office
                    </span>
                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                      411 412, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat 394107
                    </p>
                  </div>
                </div>

                {/* 2. Call & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-white block">
                      Call &amp; WhatsApp
                    </span>
                    <p className="text-xs text-white/90 font-medium mt-0.5">
                      +91 88500 11652
                    </p>
                    <p className="text-[11px] text-white/60">
                      Mon to Sat, 9:00 AM to 6:00 PM IST
                    </p>
                  </div>
                </div>

                {/* 3. Email Inquiries */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-white block">
                      Email Inquiries
                    </span>
                    <p className="text-xs text-white/80 mt-0.5">
                      {BRAND_INFO.email}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Inner Card: Fresh Churning & Dispatch Hours */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <Clock className="w-4 h-4 shrink-0 text-white" />
                <span>Fresh Churning &amp; Dispatch Hours</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Monday to Saturday: 9:00 AM to 6:00 PM
              </p>
              <p className="text-[10px] text-white/60 mt-0.5 leading-relaxed">
                Sunday: Reserved for traditional whole curd culturing &amp; sacred Gaushala care.
              </p>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* RIGHT CARD: Pure White Theme (Quick Inquiry Form)          */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 rounded-[32px] bg-white border border-[#E9DFC8] p-7 sm:p-9 lg:p-10 shadow-xl flex flex-col justify-between text-left">
            
            {!submitted ? (
              <div>
                {/* Form Heading */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#164E3D] tracking-tight leading-snug mb-1">
                  Quick Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#7A847E] mb-6">
                  Please provide your details below and we will prepare your fresh pure desi ghee order.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E0D8] bg-[#FBFBFA] focus:bg-white focus:border-[#164E3D] focus:ring-2 focus:ring-[#164E3D]/20 text-sm text-[#252A24] outline-none transition-all placeholder:text-[#9EA8A2]"
                    />
                  </div>

                  {/* Phone & Email (2 Cols) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E5E0D8] bg-[#FBFBFA] focus:bg-white focus:border-[#164E3D] focus:ring-2 focus:ring-[#164E3D]/20 text-sm text-[#252A24] outline-none transition-all placeholder:text-[#9EA8A2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E5E0D8] bg-[#FBFBFA] focus:bg-white focus:border-[#164E3D] focus:ring-2 focus:ring-[#164E3D]/20 text-sm text-[#252A24] outline-none transition-all placeholder:text-[#9EA8A2]"
                      />
                    </div>
                  </div>

                  {/* Ghee Type & Weight / Pack Size (2 Cols) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                        Ghee Type *
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-[#164E3D] bg-white text-sm font-medium text-[#252A24] outline-none transition-all shadow-sm cursor-pointer"
                      >
                        <option value="Pure Gir Cow Ghee">Pure Gir Cow Ghee</option>
                        <option value="Gau Dham Traditional Desi Cow Ghee">Gau Dham Traditional Desi Cow Ghee</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                        Weight / Pack Size *
                      </label>
                      <select
                        name="packSize"
                        value={formData.packSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#E5E0D8] bg-[#FBFBFA] focus:bg-white focus:border-[#164E3D] text-sm text-[#252A24] outline-none transition-all shadow-sm cursor-pointer"
                      >
                        <option value="1000 ML">1000 ML (1 Litre)</option>
                        <option value="500 ML">500 ML</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Special Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-[#164E3D] mb-1.5">
                      Message / Special Requirement
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter delivery city, customized gift box notes, or any special requests..."
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E0D8] bg-[#FBFBFA] focus:bg-white focus:border-[#164E3D] focus:ring-2 focus:ring-[#164E3D]/20 text-sm text-[#252A24] outline-none transition-all resize-none placeholder:text-[#9EA8A2]"
                    />
                  </div>

                  {/* Submit Inquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#164E3D] via-[#103B2F] to-[#0A261D] hover:from-[#103B2F] hover:to-[#05140F] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>

                </form>
              </div>
            ) : (
              /* Success / Confirmation State */
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#FAF5EB] text-[#164E3D] border-2 border-[#164E3D] flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-[#164E3D]" />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#164E3D] uppercase tracking-widest block mb-1">
                    Inquiry Received Successfully
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#164E3D]">
                    Dhanyavad, {formData.name}!
                  </h4>
                  <p className="text-xs text-[#555F58] max-w-md mx-auto mt-2 leading-relaxed">
                    Your inquiry for <strong>{formData.product} ({formData.packSize})</strong> has been registered with our Gaushala dispatch desk.
                  </p>
                </div>

                {/* Reference ID Pill */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#FAF5EB] border border-[#E9DFC8] text-xs">
                  <span className="text-[#555F58]">Reference ID:</span>
                  <span className="font-mono font-bold text-sm text-[#164E3D]">{inquiryId}</span>
                  <button
                    onClick={handleCopyId}
                    className="p-1 rounded hover:bg-white text-[#164E3D] transition-colors"
                    title="Copy Reference ID"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="pt-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Inquiry Details via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#7A847E] mt-2">
                    Instant confirmation from our team on batch availability &amp; delivery time.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
