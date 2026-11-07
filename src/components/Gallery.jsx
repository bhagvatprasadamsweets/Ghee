import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  MessageCircle, 
  Eye 
} from 'lucide-react';
import { GALLERY_ITEMS, BRAND_INFO } from '../data/gheeData';
import { handleImageError } from '../utils/imageFallback';

export default function Gallery({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'gaushala', label: 'Gaushala & Gir Cows' },
    { id: 'process', label: 'Bilona Churning' },
    { id: 'texture', label: 'Danedar Texture' },
    { id: 'packaging', label: 'Glass Jars & Hampers' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleWhatsApp = (item) => {
    const text = encodeURIComponent(
      `Namaste Vedic Amrit! I saw the photo "${item.title}" on your website gallery and would like to inquire about this product/process.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="gallery" className="py-8 bg-white relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2e24] border border-[#D8B879]/50 text-[#164E3D] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#164E3D]" />
            Visual Gaushala Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E3D] tracking-tight">
            Our Gaushala &amp; Craft Gallery
          </h2>

          <p className="text-[#5e665c] text-base sm:text-lg leading-relaxed">
            Take a glance into our serene gaushala near the Gir forest, the sacred wooden valona churning at sunrise, and the golden crystalline grains of our handcrafted ghee.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeFilter === f.id
                  ? 'bg-[#D8B879] text-[#164E3D] shadow-lg font-bold'
                  : 'bg-[#0f3529] text-[#FAF8F1]/80 border border-[#D8B879]/30 hover:border-[#D8B879] hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#0d2e24] border border-[#D8B879]/30 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={handleImageError}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-12 h-12 rounded-full bg-[#D8B879] text-[#164E3D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye className="w-6 h-6" />
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#164E3D] font-bold">
                  {item.category}
                </div>
                <h4 className="font-serif text-base font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0f3529] rounded-3xl border-2 border-[#D8B879] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#D8B879] hover:text-[#164E3D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                onError={handleImageError}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 bg-[#0f3529] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs uppercase font-bold text-[#164E3D] tracking-wider">
                  Vedic Amrit Gaushala Archives
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F1]/80 mt-1">
                  {selectedImage.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    const itm = selectedImage;
                    setSelectedImage(null);
                    onOpenInquiry(itm.title);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#D8B879] text-[#164E3D] font-bold text-xs uppercase tracking-wider hover:bg-[#eeddb7] transition-colors shadow"
                >
                  Inquire Now
                </button>

                <button
                  onClick={() => handleWhatsApp(selectedImage)}
                  className="p-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow"
                  title="Inquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
