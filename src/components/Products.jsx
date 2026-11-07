import React from 'react';
import { handleImageError } from '../utils/imageFallback';

export default function Products() {
  // Ghee photography showcase
  const gheePhotos = [
    {
      title: 'Traditional Wooden Bilona Craft',
      desc: 'Handcrafted churning of whole cultured curd',
      image: '/images/traditional-bilona-farm.jpg',
      alt: 'Traditional Bilona churning in authentic Gaushala courtyard',
    },
    {
      title: 'Golden Danedar Crystalline Ghee',
      desc: 'Pure aromatic golden yellow granules',
      image: '/images/gau-dham-bilona.jpg',
      alt: 'Pure golden danedar cow ghee jar',
    },
    {
      title: 'Slow Wood Fire Simmering',
      desc: 'Gentle clarifying over low traditional heat',
      image: '/images/bilona-step5-heating.webp',
      alt: 'Slow heating of pure butter into golden cow ghee',
    },
    {
      title: 'Protected Glass Jar Packaging',
      desc: 'Food grade airtight glass packaging preserving aroma',
      image: '/images/ghee-jar.jpg',
      alt: 'Bhagvat Prasadam premium pure ghee bottle',
    },
  ];

  return (
    <section 
      id="products" 
      className="py-10 sm:py-12 bg-white relative overflow-hidden"
      aria-label="Bhagvat Prasadam Ghee Visual Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Only Ghee Images Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {gheePhotos.map((photo, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-[#E9DFC8] hover:border-[#164E3D] p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#FAF5EB]">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="text-left pt-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#164E3D] mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#555F58] leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
