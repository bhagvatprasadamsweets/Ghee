import React, { useEffect } from 'react';
import { X, ShieldCheck, Truck, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';

export default function PolicyModal({ isOpen, policyType, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !policyType) return null;

  const policies = {
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Official Terms of Service for Bhagvat Prasadam Traditional Ghee',
      icon: <FileText className="w-7 h-7 text-[#164E3D]" />,
      lastUpdated: 'November 2026',
      sections: [
        {
          heading: '1. Overview and Acceptance of Terms',
          content: 'Welcome to Bhagvat Prasadam. By accessing or using our informational website and submitting inquiries for our artisanal Bilona ghee products, you acknowledge and agree to comply with these Terms and Conditions. Our platform is exclusively designed as an inquiry and product discovery portal to connect discerning households, temples, and culinary institutions with our Gaushala dispatch desk.'
        },
        {
          heading: '2. Inquiry Based Product Allocation',
          content: 'All products showcased on this website are handcrafted in limited artisanal batches strictly following traditional Vedic Bilona methods. An online inquiry submission does not constitute a confirmed financial order. Product reservations and dispatch schedules are formally finalized only after direct communication and verification with our Gaushala team via WhatsApp or telephone.'
        },
        {
          heading: '3. Product Specifications and Purity Commitments',
          content: 'We take utmost care to ensure that our product descriptions, nutritional facts, and ingredient disclosures are genuine and accurate. Because authentic cow ghee is a seasonal, handcrafted natural agricultural produce, slight variations in natural aroma, golden color depth, and granular danedar texture may naturally occur depending on seasonal herbs grazed by our indigenous cows.'
        },
        {
          heading: '4. Intellectual Property Rights',
          content: 'All content published on this website, including but not limited to brand logos, photography, process illustrations, editorial descriptions, and website graphics, is the exclusive property of Bhagvat Prasadam and is protected under applicable copyright and intellectual property laws.'
        },
        {
          heading: '5. Limitation of Liability and Governing Law',
          content: 'Bhagvat Prasadam shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this platform. All disputes and matters arising shall be subject exclusively to the jurisdiction of the competent courts in Surat, Gujarat, India.'
        }
      ]
    },
    shipping: {
      title: 'Shipping Policy',
      subtitle: 'Safe, Break Resistant Packaging & Express Domestic Dispatch',
      icon: <Truck className="w-7 h-7 text-[#164E3D]" />,
      lastUpdated: 'November 2026',
      sections: [
        {
          heading: '1. Order Processing and Fresh Harvest Dispatch',
          content: 'Every jar of Bhagvat Prasadam cow ghee is prepared with reverence and carefully inspected before dispatch. Orders confirmed through our Gaushala desk are typically packed and handed over to our verified national logistics partners within 24 to 48 business hours.'
        },
        {
          heading: '2. Break Safe Protective Packaging',
          content: 'We use high quality, food grade glass jars to protect the sacred prana, aroma, and granular crystalline texture of authentic ghee. To prevent any accidental breakage in transit, each glass jar is encased in specialized multi-layer shock absorbent bubble cushioning and sturdy corrugated outer master cartons.'
        },
        {
          heading: '3. Estimated Delivery Timelines',
          content: 'Standard surface express transit times across India typically range between 3 to 6 business days depending on the recipient location. Metro cities and western Indian regions usually receive consignments within 2 to 4 days, whereas remote interior pin codes may take up to 7 business days.'
        },
        {
          heading: '4. Live Consignment Tracking',
          content: 'Once your consignment is handed over to our logistics courier partner, a live tracking airway bill (AWB) number and direct tracking link are shared with you via WhatsApp and SMS for real time delivery monitoring.'
        },
        {
          heading: '5. Undelivered or Delayed Shipments',
          content: 'In the rare circumstance of logistical delays caused by severe weather conditions or local regional disruptions, our customer care desk coordinates directly with the courier hub to expedite prompt clearance.'
        }
      ]
    },
    returns: {
      title: 'Return Policy',
      subtitle: 'Customer Satisfaction, Transit Damage & Replacement Standards',
      icon: <RefreshCw className="w-7 h-7 text-[#164E3D]" />,
      lastUpdated: 'November 2026',
      sections: [
        {
          heading: '1. Nature of Food & Dairy Products',
          content: 'Due to strict hygiene, food safety regulations, and the perishable natural character of pure cow ghee, opened or unsealed edible food items cannot be returned or restocked once delivered.'
        },
        {
          heading: '2. Transit Damage & Defect Guarantee',
          content: 'Your complete peace of mind is our highest priority. In the unlikely event that your glass jar arrives damaged, cracked, leaking, or with broken tamper seals, we will promptly arrange a 100% free immediate replacement or issue a full refund without hassle.'
        },
        {
          heading: '3. How to Report Transit Damage',
          content: 'Please notify our customer care team on WhatsApp (+91 88500 11652) or email (inquiry@vedicamritghee.com) within 48 hours of delivery. Kindly share clear photographs or an unboxing video showing the damaged jar and outer shipping label.'
        },
        {
          heading: '4. Resolution and Dispatch of Replacements',
          content: 'Upon review of the photographs, our team initiates a fresh replacement dispatch within 24 hours at zero additional shipping expense to you.'
        },
        {
          heading: '5. Order Cancellation',
          content: 'Inquiry requests and confirmed orders may be cancelled at any time before the consignment is packaged and dispatched from our Gaushala facility.'
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Data Protection, Confidentiality and Customer Trust Commitment',
      icon: <ShieldCheck className="w-7 h-7 text-[#164E3D]" />,
      lastUpdated: 'November 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          content: 'When you submit an inquiry form or reach out to us via WhatsApp, we only collect essential customer coordinates such as your name, telephone/WhatsApp number, email address, delivery city, and requested ghee pack preferences.'
        },
        {
          heading: '2. How We Use Your Information',
          content: 'The information you provide is utilized solely to answer product queries, share authentic batch availability reports, provide bespoke delivery estimates, and coordinate door to door courier dispatches.'
        },
        {
          heading: '3. Absolute Zero Third Party Data Sharing',
          content: 'We maintain strict privacy ethics. We do not sell, rent, monetize, or disclose your personal contact information to any third party advertising networks or data brokers. Your information is shared only with verified logistics courier partners strictly for physical package delivery.'
        },
        {
          heading: '4. Security and Data Retention',
          content: 'All communication submitted through our website is encrypted using industry standard SSL/TLS protocols. We store your contact records in secured environments with access limited exclusively to authorized Gaushala staff.'
        },
        {
          heading: '5. Your Rights and Contact',
          content: 'You retain the right to review, update, or request the deletion of your inquiry records at any time by contacting our support team at inquiry@vedicamritghee.com or calling +91 88500 11652.'
        }
      ]
    }
  };

  const activePolicy = policies[policyType] || policies.terms;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      {/* Full Page Header Bar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#E9DFC8] px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FAF5EB] border border-[#E9DFC8] flex items-center justify-center shrink-0">
            {activePolicy.icon}
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#164E3D] uppercase tracking-widest block">
              Bhagvat Prasadam Legal &amp; Trust
            </span>
            <h1 id="policy-modal-title" className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#164E3D] leading-tight">
              {activePolicy.title}
            </h1>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#164E3D] hover:bg-[#103B2F] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shrink-0"
          aria-label="Back to Website"
        >
          <span>Back to Home</span>
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Full Page Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8 text-left">
        <div className="pb-4 border-b border-[#E9DFC8]">
          <p className="text-base sm:text-lg text-[#164E3D] font-serif font-medium">
            {activePolicy.subtitle}
          </p>
          <p className="text-xs text-[#7A847E] mt-1">
            Last Updated: {activePolicy.lastUpdated} • Applicable for all domestic deliveries across India
          </p>
        </div>

        {activePolicy.sections.map((sec, idx) => (
          <article key={idx} className="space-y-2.5 bg-[#FAF5EB]/40 p-5 sm:p-7 rounded-2xl border border-[#E9DFC8]/60">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#164E3D]">
              {sec.heading}
            </h2>
            <p className="font-normal text-sm sm:text-base text-[#555F58] leading-relaxed">
              {sec.content}
            </p>
          </article>
        ))}

        {/* Trust Seal */}
        <div className="pt-6 border-t border-[#E9DFC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7A847E]">
          <span className="flex items-center gap-2 text-[#164E3D] font-semibold text-sm">
            <CheckCircle2 className="w-5 h-5 text-[#164E3D]" />
            <span>Bhagvat Prasadam Verified Dairy Compliance</span>
          </span>
          <span>Customer Helpline: +91 88500 11652</span>
        </div>
      </main>

      {/* Full Page Footer Bar */}
      <footer className="bg-[#FAF5EB] border-t border-[#E9DFC8] py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555F58]">
          <p>&copy; 2026 Bhagvat Prasadam Ghee. Handcrafted with reverence in Gujarat.</p>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#164E3D] text-white hover:bg-[#103B2F] font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            Close &amp; Return to Website
          </button>
        </div>
      </footer>
    </div>
  );
}
