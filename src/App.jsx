import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutHeritage from './components/AboutHeritage';
import BilonaProcess from './components/BilonaProcess';
import PurityPromise from './components/PurityPromise';
import FAQ from './components/FAQ';
import ContactInquiry from './components/ContactInquiry';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ProductInquiryModal from './components/ProductInquiryModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import LabReportModal from './components/LabReportModal';
import PolicyModal from './components/PolicyModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState('Pure Gir Cow Ghee');
  const [inquiryPackSize, setInquiryPackSize] = useState('1000 ML');

  const [detailsModalProduct, setDetailsModalProduct] = useState(null);
  const [labReportModalOpen, setLabReportModalOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState(null);

  // Trigger inquiry: smooth scroll to #contact section with prefilled product
  const handleOpenInquiry = (productName = 'Pure Gir Cow Ghee', packSize = '1000 ML') => {
    setInquiryProduct(productName);
    setInquiryPackSize(packSize);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetails = (product) => {
    setDetailsModalProduct(product);
  };

  const handleOpenLabReport = () => {
    setLabReportModalOpen(true);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-white text-[#252A24] font-sans selection:bg-[#164E3D]/20 selection:text-[#164E3D] flex flex-col">
      {/* Premium Header / Navigation matching exact section order:
          HOME | WHAT IS GHEE | HOW IT IS MADE | PURITY PROMISE | FAQ | CONTACT */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Page Sections — with pt-[60px] to offset fixed top navbar */}
      <main className="w-full max-w-full overflow-x-hidden flex-1 pt-[60px]">
        {/* 1. HOME (#home) */}
        <Hero 
          onOpenInquiry={handleOpenInquiry} 
          onOpenLabReport={handleOpenLabReport}
        />

        {/* 2. WHAT IS GHEE (#about) */}
        <AboutHeritage onOpenInquiry={handleOpenInquiry} />

        {/* 3. HOW IT IS MADE (#bilona-process) */}
        <BilonaProcess onOpenInquiry={handleOpenInquiry} />

        {/* 4. PURITY PROMISE (#purity-promise) */}
        <PurityPromise onOpenInquiry={handleOpenInquiry} />

        {/* 5. FAQ (#faq) */}
        <FAQ onOpenInquiry={handleOpenInquiry} />

        {/* 6. CONTACT (#contact) */}
        <ContactInquiry 
          prefilledProduct={inquiryProduct} 
          prefilledPackSize={inquiryPackSize}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={handleOpenInquiry} 
        onOpenPolicy={(type) => setPolicyModalType(type)} 
      />

      {/* Floating Utilities (WhatsApp & Scroll Top) */}
      <FloatingWidgets onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Modals */}
      <ProductInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialProduct={inquiryProduct}
        initialPackSize={inquiryPackSize}
      />

      <ProductDetailsModal
        product={detailsModalProduct}
        onClose={() => setDetailsModalProduct(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      <PolicyModal
        isOpen={Boolean(policyModalType)}
        policyType={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      <LabReportModal
        isOpen={labReportModalOpen}
        onClose={() => setLabReportModalOpen(false)}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
}
