// Brand Configuration & Inquiry Data for Vedic Amrit Ghee
export const BRAND_INFO = {
  name: "Vedic Amrit",
  tagline: "Pure Vedic A2 Gir Cow Bilona Ghee",
  subTagline: "Handcrafted in Earthen Pots from Forest-Grazing Indigenous Gir Cows",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "inquiry@vedicamritghee.com",
  address: "Vedic Amrit Organic Gaushala, Gir Somnath Foothills, Talala Gir, Gujarat - 362150, India",
  hours: "Monday - Sunday: 8:00 AM - 8:00 PM IST",
  fssaiNumber: "10723031000452",
  nablCert: "NABL/TC-9821/2026",
};

export const PRODUCTS = [
  {
    id: "a2-gir-cow-bilona",
    name: "Royal Vedic A2 Gir Cow Bilona Ghee",
    subtitle: "Traditional 5-Step Hand-Churned in Earthen Pots",
    badge: "Most Popular",
    category: "cow",
    aroma: "Nutty, Rich & Heavenly",
    texture: "Golden Danedar (Granular)",
    color: "Natural Golden Yellow",
    rating: 4.9,
    reviewsCount: 384,
    shortDesc: "Prepared from pure A2 milk of free grazing Gir cows using the bi directional wooden bilona churning of whole curd at sunrise.",
    description: "Our signature A2 Gir Cow Bilona Ghee is prepared strictly following the ancient Charaka Samhita guidelines. Indigenous Gir cows roam freely in the herbal grasslands of Gir forest. Fresh milk is boiled over earthen chulha with cow dung cakes, cultured into curd overnight, and churned using a wooden bilona in clay pots. Yields an authentic golden granular ghee packed with A2 beta casein, butyric acid, and fat soluble vitamins.",
    packSizes: ["250 ml", "500 ml", "1 Litre", "5 Litres", "15 Kg Bulk Tin"],
    defaultPack: "1 Litre",
    benefits: [
      "100% Pure A2 Gir Cow Milk (No A1 protein)",
      "High smoke point (250°C / 482°F) ideal for cooking",
      "Rich in natural Butyric acid for gut health",
      "Enhances memory, eyesight, and joint lubrication",
      "Zero preservatives, chemicals, or artificial aroma"
    ],
    nutritionPer100g: {
      energy: "897 kcal",
      totalFat: "99.7 g",
      saturatedFat: "65.2 g",
      cholesterol: "0.19 g",
      vitaminA: "653 mcg",
      vitaminE: "2.8 mg",
      omega3: "1.4 g"
    },
    image: "/images/ghee-jar.jpg",
    inStockStatus: "Fresh Batch Ready for Dispatch",
  },
  {
    id: "ahimsa-pasture-cow-ghee",
    name: "Ahimsa Vedic Cultured Gir Cow Ghee",
    subtitle: "Mother-Calf First • Cruelty-Free Vedic Dairy",
    badge: "Ethical & Cruelty Free",
    category: "cow",
    aroma: "Mild Sweet Herbal",
    texture: "Velvety Danedar",
    color: "Deep Amber Yellow",
    rating: 5.0,
    reviewsCount: 192,
    shortDesc: "Ethically harvested where the calf drinks to its fill first. Cows are never artificially inseminated or given hormones.",
    description: "True Ahimsa Ghee honors the mother cow as Gomata. In our gaushala, the calf is always fed first from two teats. The remaining milk is collected gently. The cows graze on medicinal wild herbs like Ashwagandha, Shatavari, and Shankhpushpi in the open forest, producing milk naturally enriched with healing bio-compounds.",
    packSizes: ["500 ml", "1 Litre", "5 Litres"],
    defaultPack: "1 Litre",
    benefits: [
      "100% Ahimsa Certified — Calf fed first",
      "Non-GMO, grass-fed forest-grazing Gir cows",
      "Slowly simmered on low flame for 6+ hours",
      "Revered for Ayurvedic Nasya and Panchakarma therapies",
      "Natural source of CLA (Conjugated Linoleic Acid)"
    ],
    nutritionPer100g: {
      energy: "900 kcal",
      totalFat: "99.8 g",
      saturatedFat: "64.8 g",
      cholesterol: "0.18 g",
      vitaminA: "690 mcg",
      vitaminE: "3.1 mg",
      omega3: "1.6 g"
    },
    image: "/images/cow-pasture.jpg",
    inStockStatus: "Limited Batch Fresh Harvest",
  },  {
    id: "gau-dham-traditional-desi-cow-ghee",
    name: "Gau Dham Traditional Desi Cow Ghee",
    subtitle: "Slow-Simmered over Earthen Chulha Fire • 100% Shuddh",
    badge: "Bestseller",
    category: "cow",
    aroma: "Distinct Warm Nutty Makkhan Aroma",
    texture: "Golden Danedar Crystals",
    color: "Natural Golden Yellow",
    rating: 4.9,
    reviewsCount: 380,
    shortDesc: "Made through authentic Vedic bilona process from whole cultured curd of indigenous cows. Handcrafted on mild wood fire.",
    description: "Prepared from pure cow milk following sacred Gau Dham traditions. Milk is cultured into curd and hand churned with a wooden valona. Slowly clarified over earthen chulha on wood fire flames to create a deeply aromatic, golden danedar ghee packed with wholesome nutrition.",
    packSizes: ["250 ml", "500 ml", "1 Litre", "5 Litres", "15 Kg Tin"],
    defaultPack: "1 Litre",
    benefits: [
      "100% pure desi cow ghee without artificial additives",
      "Superior golden grain structure (danedar crystals)",
      "Slow-simmered on earthen fire preserving vital prana",
      "Improves digestion, metabolism, and immune stamina",
      "NABL lab tested 0% vanaspati, palm oil, or chemicals"
    ],
    nutritionPer100g: {
      energy: "898 kcal",
      totalFat: "99.8 g",
      saturatedFat: "65.4 g",
      cholesterol: "0.20 g",
      vitaminA: "650 mcg",
      vitaminE: "2.8 mg",
      omega3: "1.4 g"
    },
    image: "/images/gau-dham-bilona.jpg",
    inStockStatus: "Fresh Batch Direct Gaushala Harvest",
  },
  {
    id: "brahmi-medhya-ghee",
    name: "Vedic Brahmi & Shankhpushpi Medhya Ghee",
    subtitle: "Ayurvedic Cognitive & Memory Formulation",
    badge: "Ayurvedic Medhya",
    category: "ayurvedic",
    aroma: "Earthy Herbal Essence",
    texture: "Smooth Semi-Granular",
    color: "Herbal Greenish Gold",
    rating: 4.9,
    reviewsCount: 165,
    shortDesc: "Infused with organic Brahmi, Shankhpushpi, and Gotu Kola herbs according to ancient Ayurvedic Sneha Kalpana methodology.",
    description: "An authentic classical Ayurvedic formulation where pure A2 Gir Cow Ghee acts as a bio-carrier (Yogavahi) for the memory-enhancing herbs Brahmi and Shankhpushpi. Gently decocted over 36 hours so the active bacosides penetrate cellular barriers, supporting mental focus, restful sleep, and nervous system tranquility.",
    packSizes: ["250 ml", "500 ml", "1 Litre"],
    defaultPack: "500 ml",
    benefits: [
      "Potent Medhya Rasayana for students and professionals",
      "Calms aggravated Vata and Pitta doshas",
      "Supports natural sleep cycles and memory retention",
      "Prepared as per Sharangadhara Samhita classical text",
      "100% organic certified wildcrafted herbs"
    ],
    nutritionPer100g: {
      energy: "890 kcal",
      totalFat: "98.9 g",
      saturatedFat: "64.0 g",
      cholesterol: "0.17 g",
      vitaminA: "640 mcg",
      bacosidesActive: "Potent Herbal Extract",
      omega3: "1.3 g"
    },
    image: "/images/ayurvedic-herbs.jpg",
    inStockStatus: "Handcrafted in Small Batches",
  },
  {
    id: "ashwagandha-rasayana-ghee",
    name: "Ashwagandha & Shatavari Rasayana Ghee",
    subtitle: "Vitality, Ojas & Immunity Elixir",
    badge: "Vitality Formula",
    category: "ayurvedic",
    aroma: "Rich Warm Botanical",
    texture: "Golden Smooth Danedar",
    color: "Warm Golden Ochre",
    rating: 4.9,
    reviewsCount: 142,
    shortDesc: "Synergistic blend of wild Nagori Ashwagandha and Himalayan Shatavari slow-cooked with pure A2 Bilona cow ghee.",
    description: "Designed for daily rejuvenation (Rasayana). Ashwagandha builds physical vigor and stress resilience, while Shatavari provides deep hormonal nourishment and tissue rejuvenation. The pure A2 Gir Cow ghee ensures maximum bioavailability and deep cellular absorption of herbal active withanolides.",
    packSizes: ["250 ml", "500 ml", "1 Litre"],
    defaultPack: "500 ml",
    benefits: [
      "Builds Ojas (cellular vitality & immune defense)",
      "Helps combat daily fatigue and chronic stress",
      "Supports hormonal harmony in men and women",
      "Can be taken with warm milk before bedtime",
      "Non-habit forming, gentle on digestive fire (Agni)"
    ],
    nutritionPer100g: {
      energy: "892 kcal",
      totalFat: "98.8 g",
      saturatedFat: "64.2 g",
      cholesterol: "0.18 g",
      vitaminA: "650 mcg",
      withanolides: "Standardized Organic Extract",
      omega3: "1.3 g"
    },
    image: "/images/clay-pot.jpg",
    inStockStatus: "Limited Seasonal Batch",
  },
  {
    id: "royal-gift-hamper",
    name: "Shubh Lagna & Utsav Royal Gifting Box",
    subtitle: "Brass Jar & Velvet Box for Weddings & Corporate Gifting",
    badge: "Festive & Gifting",
    category: "gifting",
    aroma: "Pure Divine Bilona Aroma",
    texture: "Pure Golden Danedar Cow Ghee",
    color: "Presented in Handcrafted Brass Jar",
    rating: 5.0,
    reviewsCount: 118,
    shortDesc: "A symbol of auspicious blessing. Pure A2 Ghee packaged in hand-hammered pure brass containers with custom royal gift packaging.",
    description: "In Vedic traditions, ghee is the ultimate symbol of auspiciousness (Mangalya), health, and prosperity. Our Royal Gift Hampers are custom-curated for wedding return gifts, Diwali celebrations, corporate appreciation, and spiritual ceremonies. Comes in food-safe tin-lined handcrafted pure brass jars packed in a royal forest green and gold velvet box with personalized greeting cards.",
    packSizes: ["1 Kg Brass Jar Box", "Custom Hamper Sets", "Bulk Corporate 50+ Units"],
    defaultPack: "1 Kg Brass Jar Box",
    benefits: [
      "Handcrafted pure brass jar with food grade tin lining (Kalai)",
      "Luxury forest-green velvet box with golden embossing",
      "Custom name/company logo printing for 20+ hampers",
      "Includes personalized blessing/greeting scroll inside",
      "Safe wooden freight packaging for nationwide delivery"
    ],
    nutritionPer100g: {
      energy: "897 kcal",
      totalFat: "99.7 g",
      saturatedFat: "65.2 g",
      cholesterol: "0.19 g",
      packaging: "Hand hammered Brass Vessel",
      purityGuarantee: "100% Certified Vedic"
    },
    image: "/images/gifting-hamper.jpg",
    inStockStatus: "Custom Orders & Gifting Ready",
  },
  {
    id: "bulk-commercial-tin",
    name: "Gaushala Reserve 15 Kg Commercial Pack",
    subtitle: "Wholesale for Ayurvedic Doctors, Temples & Luxury Catering",
    badge: "B2B / Wholesale",
    category: "bulk",
    aroma: "Authentic Churned Freshness",
    texture: "Consistent Granular Texture",
    color: "Pure Golden Amber",
    rating: 4.9,
    reviewsCount: 88,
    shortDesc: "Direct gaushala wholesale pack in food grade epoxy-coated tins with tamper evident seal and batch test certificates.",
    description: "Specially packed for commercial clients, Ayurvedic pharmacies, luxury heritage resorts, temple trusts (for Prasad and Hawan), and fine sweet confectioners who refuse to compromise on authenticity. Supplied with batch specific NABL testing certificates and GST invoice for seamless B2B procurement.",
    packSizes: ["15 Kg Food Grade Tin", "Multi Tin Pallets (60 Kg+)", "Custom Volume Contract"],
    defaultPack: "15 Kg Food Grade Tin",
    benefits: [
      "Direct Gaushala wholesale pricing tiers",
      "Tamper-proof food grade sealed containers",
      "Batch wise Certificate of Analysis (COA) included",
      "Insured palletized road freight across all Indian states",
      "Dedicated account manager for recurring monthly supply"
    ],
    nutritionPer100g: {
      energy: "897 kcal",
      totalFat: "99.7 g",
      saturatedFat: "65.2 g",
      cholesterol: "0.19 g",
      moisture: "< 0.25%",
      fssaiApproved: "Commercial Batch Certified"
    },
    image: "/images/danedar-ghee.jpg",
    inStockStatus: "Wholesale Bookings Open",
  }
];

export const BILONA_PROCESS_STEPS = [
  {
    step: "01",
    title: "Sacred A2 Gir Cow Grazing & Milking",
    subtitle: "Pure Indigenous Breeds",
    desc: "Our indigenous Gir cows roam freely across open forest pasturelands, grazing on organic grasses and natural medicinal herbs. Calves are fed first, and fresh milk is gathered by hand at dawn.",
    icon: "cow"
  },
  {
    step: "02",
    title: "Slow Fire Boiling & Curd Culturing",
    subtitle: "Earthen Clay Pots & Natural Flame",
    desc: "The fresh raw milk is boiled slowly in heavy brass and clay vessels over cow dung cake flames. After cooling, it is inoculated with natural culture overnight to form dense, probiotic rich whole curd (Dahi).",
    icon: "flame"
  },
  {
    step: "03",
    title: "Bi Directional Wooden Bilona Churning",
    subtitle: "The Sacred Valona Movement",
    desc: "Before sunrise, the whole curd is churned in earthen matkas using a wooden bilona rotating in clockwise and counter clockwise directions. This gentle mechanical motion separates fresh white butter (Makkhan).",
    icon: "churn"
  },
  {
    step: "04",
    title: "Separation of Pure Makkhan",
    subtitle: "Preserving Live Nutrients",
    desc: "The floating fresh butter (Makkhan) is washed with clean water to remove remaining whey and buttermilk, leaving pure lactic fat loaded with conjugated linoleic acid and natural fat soluble enzymes.",
    icon: "drop"
  },
  {
    step: "05",
    title: "Slow Simmering into Golden Danedar Ghee",
    subtitle: "Granular Perfection",
    desc: "Makkhan is simmered on a very mild flame until all residual moisture evaporates and the milk solids settle at the bottom. As it cools slowly, it naturally crystallizes into aromatic, golden danedar grains.",
    icon: "sparkles"
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Starting Raw Material",
    bilona: "Whole cultured Curd (Dahi) from pure A2 Gir Cow milk",
    commercial: "Industrial cream / malai skimmed mechanically from mixed milk"
  },
  {
    feature: "Milk Required for 1 Litre",
    bilona: "28 to 32 Litres of pure indigenous Gir Cow milk",
    commercial: "Only 12 to 14 Litres of mechanical mixed dairy cream"
  },
  {
    feature: "Churning Method",
    bilona: "Bi-directional wooden churner (Valona) in earthen pots",
    commercial: "High speed steel industrial centrifuge / cream separator"
  },
  {
    feature: "Protein Type",
    bilona: "100% Pure A2 Beta Casein (Gentle on stomach)",
    commercial: "Often contains A1 Beta Casein (can cause digestive discomfort)"
  },
  {
    feature: "Heating Temperature",
    bilona: "Gentle slow simmer below 110°C over natural fire",
    commercial: "High industrial heat (>140°C) destroying natural micronutrients"
  },
  {
    feature: "Texture & Aroma",
    bilona: "Naturally granular (Danedar) with sweet earthy aroma",
    commercial: "Uniform oily paste, often added artificial buttery flavors"
  },
  {
    feature: "Digestibility & Healing",
    bilona: "Easily assimilated, boosts Agni, approved in Ayurveda",
    commercial: "Heavy to digest, can increase unwanted triglycerides"
  }
];

export const QUALITY_METRICS = [
  {
    label: "Reichert Meissl (RM) Value",
    standard: "Min 28.0",
    ourValue: "30.4",
    status: "Exceptional Purity"
  },
  {
    label: "Baudouin Test (Vanaspati)",
    standard: "Must be Negative",
    ourValue: "Negative (0%)",
    status: "100% Pure Ghee"
  },
  {
    label: "Moisture Content",
    standard: "Max 0.5%",
    ourValue: "0.18%",
    status: "Long Natural Shelf Life"
  },
  {
    label: "Free Fatty Acids (FFA)",
    standard: "Max 1.4%",
    ourValue: "0.42%",
    status: "Very Low Acidity"
  },
  {
    label: "Peroxide Value",
    standard: "Max 0.6 meq/kg",
    ourValue: "0.0 meq/kg",
    status: "Zero Rancidity"
  },
  {
    label: "Heavy Metals & Pesticides",
    standard: "Zero Tolerance",
    ourValue: "Not Detected (ND)",
    status: "NABL Certified Clean"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Indigenous Gir Cows Grazing in Pastures",
    category: "gaushala",
    image: "/images/cow-pasture.jpg",
    caption: "Free grazing Gir cows in organic green fields near Gir Somnath foothills."
  },
  {
    id: 2,
    title: "Golden Danedar Granular Texture",
    category: "texture",
    image: "/images/danedar-ghee.jpg",
    caption: "Naturally crystallized golden ghee granules packed with nutty aroma."
  },
  {
    id: 3,
    title: "Traditional Wooden Bilona in Clay Pot",
    category: "process",
    image: "/images/clay-pot.jpg",
    caption: "Morning churning of cultured curd using age old wooden valona."
  },
  {
    id: 4,
    title: "Pure Golden Spoon Dripping with Goodness",
    category: "texture",
    image: "/images/golden-spoon.jpg",
    caption: "Lustrous aroma and clarity extracted under slow natural simmer."
  },
  {
    id: 5,
    title: "Vedic Herbs Decocting with A2 Ghee",
    category: "process",
    image: "/images/ayurvedic-herbs.jpg",
    caption: "Slow infusion of Brahmi, Ashwagandha and medicinal roots."
  },
  {
    id: 6,
    title: "Luxury Glass Jar & Brass Gifting Box",
    category: "packaging",
    image: "/images/gifting-hamper.jpg",
    caption: "Handcrafted packaging preserving freshness without plastic contact."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Rajeshwar Sharma, BAMS",
    role: "Senior Ayurvedic Vaidya, Ahmedabad",
    content: "In my 24 years of clinical Ayurvedic practice, finding genuinely cultured Bilona ghee has been rare. Vedic Amrit Gir Cow Ghee matches classical Shastric parameters. Its grain texture and aroma are unmatchable. I prescribe it regularly for Nasya and digestive therapy.",
    rating: 5,
    verified: "Verified Doctor Customer"
  },
  {
    id: 2,
    name: "Meenakshi Kothari",
    role: "Homemaker & Food Connoisseur, Mumbai",
    content: "The moment you open the jar, the fragrance takes you back 40 years to our ancestral village in Saurashtra. The granules (daana) in every spoonful are so fine and golden. We use it for my children's dal and milk daily.",
    rating: 5,
    verified: "Family Inquiry Customer"
  },
  {
    id: 3,
    name: "Chef Anirudh Singhania",
    role: "Executive Head Chef, Royal Heritage Resort, Udaipur",
    content: "We procure 60 kg of Vedic Amrit Bilona Ghee every month for our royal Rajasthani and Gujarati dining menu. Guests frequently inquire about the unforgettable aroma of our Dal Baati and Ghevar. Consistent quality and prompt logistics.",
    rating: 5,
    verified: "Bulk Commercial Client"
  },
  {
    id: 4,
    name: "Siddharth & Priyal Mehta",
    role: "Wedding Gifting Organizers, Surat",
    content: "We ordered 250 units of the Royal Brass Jar Hamper for our daughter's wedding return gifts. Every single relative praised the uniqueness, pure spiritual sentiment, and luxurious velvet packaging. Truly memorable!",
    rating: 5,
    verified: "Custom Gifting Client"
  }
];

export const FAQS = [
  {
    question: "What makes authentic A2 Bilona Ghee different from supermarket ghee?",
    answer: "Most commercial ghee is made in factories by skimming raw cream (malai) directly from mixed milk using industrial centrifuges and boiling it at very high temperatures (>140°C). Authentic Vedic Bilona Ghee is made by culturing whole A2 Gir cow milk into curd (Dahi), churning it bi directionally with a wooden bilona to harvest fresh butter (Makkhan), and simmering it slowly in earthen pots. It takes 28 to 32 litres of pure milk to make just 1 litre of Bilona ghee, preserving live enzymes, vitamins, and granular (danedar) texture."
  },
  {
    question: "How do I place an inquiry, and what happens after I submit?",
    answer: "Since this is an exclusive, batch crafted product, we do not take rushed ecommerce card payments. Simply submit the inquiry form on this website or click 'Inquire on WhatsApp'. Our gaushala team will instantly share current batch availability, dispatch schedules, wholesale or retail pricing sheets, and confirm your doorstep delivery details."
  },
  {
    question: "Do you supply for bulk orders, wholesale, corporate gifting, or temples?",
    answer: "Yes! We specialize in bulk procurement for Ayurvedic doctors, luxury restaurants, temples, sweet makers, and corporate gifting. We provide 15 Kg food grade tins, custom branded wooden hampers, and batch NABL lab test certificates with attractive tiered inquiry rates."
  },
  {
    question: "How is the ghee packaged to avoid breakage during shipping?",
    answer: "We use heavy-gauge, food grade UV protective glass jars sealed with tamper evident golden caps. Each jar is nestled in custom honeycomb air-cushioning and double wall corrugated shockproof boxes. We have a 99.8% safe pan India delivery record via premium express couriers."
  },
  {
    question: "What is the shelf life of Vedic Amrit Ghee, and how should it be stored?",
    answer: "Authentic Bilona Ghee has an extremely low moisture content (< 0.2%) and natural antioxidants, giving it a natural shelf life of 12 to 18 months without refrigeration. Always store in a cool, dry place away from direct sunlight and use a clean, dry spoon."
  },
  {
    question: "Is your ghee tested for adulteration and heavy metals?",
    answer: "Every single batch is independently tested by NABL accredited laboratories. We verify negative Baudouin test (0% vanaspati/palm oil), RM value > 28, zero chemical pesticides, and zero synthetic colors. You can view or request our latest lab report directly through this website."
  },
  {
    question: "Can I visit your Gaushala in Gujarat?",
    answer: "Absolutely! We welcome families, ayurvedic doctors, and conscious buyers to visit our organic Gaushala in the Gir Somnath foothills. You can witness the cows grazing freely and watch the morning bilona churning. Please send us an inquiry 2 to 3 days in advance to arrange your visit."
  },
  {
    question: "Do you deliver all over India and internationally?",
    answer: "Yes, we dispatch daily to over 19,000 pin codes across all Indian states with express tracking. For international bulk or personal inquiries, we also arrange air freight compliance and phytosanitary documentation upon request."
  }
];
