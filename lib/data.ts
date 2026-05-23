// ============================================================
//  DATA FILE — Replace everything here with your real data
// ============================================================

export type Product = {
  id: string;
  name: string;
  nameEn: string;
  category: "upholstery" | "curtains" | "pillows" | "accessories";
  collection: string;
  price: number;        // price per meter in SAR
  image: string;        // URL or /images/your-image.jpg
  images: string[];     // multiple images for gallery
  colors: string[];     // color hex codes e.g. ["#8B0000","#C0C0C0"]
  colorNames: string[]; // e.g. ["أحمر داكن","فضي"]
  width: number;        // fabric width in cm
  weight: number;       // grams per sqm
  material: string;     // e.g. "100% بوليستر"
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
  description: string;
};

export type Collection = {
  id: string;
  name: string;
  image: string;
  count: number; // number of products
};

export type Branch = {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapUrl: string;
};

// ============================================================
//  PRODUCTS — Add/edit your products here
// ============================================================
export const products: Product[] = [
  {
    id: "BS-001",
    name: "مخمل كلاسيك أحمر",
    nameEn: "Classic Red Velvet",
    category: "upholstery",
    collection: "Heritage",
    price: 85,
    image: "https://picsum.photos/seed/p1/600/600",
    images: [
      "https://picsum.photos/seed/p1/600/600",
      "https://picsum.photos/seed/p1b/600/600",
      "https://picsum.photos/seed/p1c/600/600",
    ],
    colors: ["#8B0000", "#CC0000", "#FF6666"],
    colorNames: ["أحمر داكن", "أحمر", "أحمر فاتح"],
    width: 140,
    weight: 610,
    material: "100% بوليستر",
    inStock: true,
    isNew: false,
    isBestseller: true,
    description: "مخمل فاخر بملمس ناعم ومريح، مثالي لتنجيد الكنب والمجالس الراقية. يتميز بمتانة عالية وألوان ثابتة لا تبهت.",
  },
  {
    id: "BS-002",
    name: "جاكار ذهبي كلاسيك",
    nameEn: "Classic Gold Jacquard",
    category: "upholstery",
    collection: "Heritage",
    price: 120,
    image: "https://picsum.photos/seed/p2/600/600",
    images: [
      "https://picsum.photos/seed/p2/600/600",
      "https://picsum.photos/seed/p2b/600/600",
    ],
    colors: ["#C9A96E", "#8B7355", "#D4B896"],
    colorNames: ["ذهبي", "بني ذهبي", "كريمي"],
    width: 140,
    weight: 450,
    material: "70% بوليستر 30% فيسكوز",
    inStock: true,
    isNew: true,
    isBestseller: false,
    description: "قماش جاكار فاخر بنقوش كلاسيكية راقية، يضفي طابع الأناقة على أي مجلس أو صالون.",
  },
  {
    id: "BS-003",
    name: "ستارة شيفون أبيض",
    nameEn: "White Sheer Curtain",
    category: "curtains",
    collection: "Modern",
    price: 45,
    image: "https://picsum.photos/seed/p3/600/600",
    images: [
      "https://picsum.photos/seed/p3/600/600",
      "https://picsum.photos/seed/p3b/600/600",
    ],
    colors: ["#FFFFFF", "#F5F5F5", "#E8E8E8"],
    colorNames: ["أبيض ناصع", "أبيض كريمي", "رمادي فاتح"],
    width: 300,
    weight: 80,
    material: "100% بوليستر",
    inStock: true,
    isNew: false,
    isBestseller: true,
    description: "قماش شيفون شفاف ناعم للستائر، يسمح بمرور الضوء الطبيعي مع الحفاظ على الخصوصية.",
  },
  {
    id: "BS-004",
    name: "بلاك أوت كتان",
    nameEn: "Linen Blackout",
    category: "curtains",
    collection: "Premium",
    price: 95,
    image: "https://picsum.photos/seed/p4/600/600",
    images: ["https://picsum.photos/seed/p4/600/600"],
    colors: ["#2C2C2C", "#5C4033", "#4A4A6A"],
    colorNames: ["رمادي غامق", "بني", "كحلي"],
    width: 280,
    weight: 320,
    material: "65% قطن 35% بوليستر",
    inStock: true,
    isNew: true,
    isBestseller: false,
    description: "قماش بلاك أوت بملمس الكتان الطبيعي، يحجب الضوء بالكامل مثالي لغرف النوم.",
  },
  {
    id: "BS-005",
    name: "مخمل ناعم رمادي",
    nameEn: "Soft Gray Velvet",
    category: "upholstery",
    collection: "Modern",
    price: 75,
    image: "https://picsum.photos/seed/p5/600/600",
    images: ["https://picsum.photos/seed/p5/600/600"],
    colors: ["#808080", "#A0A0A0", "#C0C0C0"],
    colorNames: ["رمادي داكن", "رمادي", "رمادي فاتح"],
    width: 140,
    weight: 580,
    material: "100% بوليستر",
    inStock: true,
    isNew: false,
    isBestseller: true,
    description: "مخمل ناعم بدرجات الرمادي الأنيقة، يناسب الديكورات العصرية والمينيمال.",
  },
  {
    id: "BS-006",
    name: "شانيل مزخرف",
    nameEn: "Patterned Chenille",
    category: "upholstery",
    collection: "Luxury",
    price: 110,
    image: "https://picsum.photos/seed/p6/600/600",
    images: ["https://picsum.photos/seed/p6/600/600"],
    colors: ["#8B0000", "#2C2C2C", "#4A3728"],
    colorNames: ["أحمر خمري", "أسود", "بني داكن"],
    width: 140,
    weight: 520,
    material: "60% أكريليك 40% بوليستر",
    inStock: false,
    isNew: false,
    isBestseller: false,
    description: "قماش شانيل فاخر بنقوش مزخرفة جميلة، متعدد الاستخدامات للكنب والوسائد.",
  },
  {
    id: "BS-007",
    name: "ستارة مخمل ملكي",
    nameEn: "Royal Velvet Curtain",
    category: "curtains",
    collection: "Luxury",
    price: 150,
    image: "https://picsum.photos/seed/p7/600/600",
    images: ["https://picsum.photos/seed/p7/600/600"],
    colors: ["#8B0000", "#1C1C5E", "#2C5F2E"],
    colorNames: ["أحمر ملكي", "أزرق ملكي", "أخضر ملكي"],
    width: 140,
    weight: 650,
    material: "100% بوليستر",
    inStock: true,
    isNew: false,
    isBestseller: true,
    description: "ستارة مخمل ثقيل بمظهر ملكي فاخر، تمنح المكان طابع الفخامة والأناقة الكلاسيكية.",
  },
  {
    id: "BS-008",
    name: "وسادة جاكار مزخرف",
    nameEn: "Jacquard Pillow Fabric",
    category: "pillows",
    collection: "Heritage",
    price: 55,
    image: "https://picsum.photos/seed/p8/600/600",
    images: ["https://picsum.photos/seed/p8/600/600"],
    colors: ["#C9A96E", "#8B0000", "#2C2C2C"],
    colorNames: ["ذهبي", "أحمر", "أسود"],
    width: 140,
    weight: 380,
    material: "80% بوليستر 20% فيسكوز",
    inStock: true,
    isNew: true,
    isBestseller: false,
    description: "قماش جاكار مزخرف لصنع الوسائد الديكورية الفاخرة.",
  },
];

// ============================================================
//  COLLECTIONS
// ============================================================
export const collections: Collection[] = [
  { id: "Heritage", name: "مجموعة التراث", image: "https://picsum.photos/seed/col1/300/400", count: 12 },
  { id: "Modern", name: "مجموعة مودرن", image: "https://picsum.photos/seed/col2/300/400", count: 8 },
  { id: "Luxury", name: "مجموعة لاكشري", image: "https://picsum.photos/seed/col3/300/400", count: 15 },
  { id: "Premium", name: "مجموعة بريميوم", image: "https://picsum.photos/seed/col4/300/400", count: 10 },
  { id: "Classic", name: "مجموعة كلاسيك", image: "https://picsum.photos/seed/col5/300/400", count: 7 },
  { id: "Desert Rose", name: "مجموعة ديزرت روز", image: "https://picsum.photos/seed/col6/300/400", count: 9 },
];

// ============================================================
//  BRANCHES — Add your real branches here
// ============================================================
export const branches: Branch[] = [
  {
    id: "riyadh-1",
    city: "الرياض",
    name: "فرع العليا",
    address: "تقاطع الملك عبدالله مع العليا العام",
    phone: "920000531",
    whatsapp: "966546618873",
    hours: "السبت - الخميس: 9ص - 11م\nالجمعة: 4م - 11م",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "jeddah-1",
    city: "جدة",
    name: "فرع التحلية",
    address: "شارع التحلية مقابل التحلية سنتر",
    phone: "920000531",
    whatsapp: "966546618873",
    hours: "السبت - الخميس: 9ص - 11:30م\nالجمعة: 5م - 11:30م",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "dammam-1",
    city: "الدمام",
    name: "فرع الدمام",
    address: "طريق الواجهة البحرية",
    phone: "920000531",
    whatsapp: "966546618873",
    hours: "السبت - الخميس: 9ص - 10:30م\nالجمعة: مغلق",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "makkah-1",
    city: "مكة المكرمة",
    name: "فرع مكة",
    address: "شارع إبراهيم الجفالي",
    phone: "920000531",
    whatsapp: "966546618873",
    hours: "السبت - الخميس: 9ص - 10:30م\nالجمعة: مغلق",
    mapUrl: "https://maps.google.com",
  },
];

// ============================================================
//  COMPANY INFO — Edit your real info here
// ============================================================
export const companyInfo = {
  nameAr: "بن صديق للأقمشة الفاخرة",
  nameEn: "Bin Siddiq Fabric",
  tagline: "أقمشة فاخرة وجودة لا مثيل لها منذ عام ١٩٤٢",
  phone: "920000531",
  whatsapp: "966546618873",
  email: "info@binsiddiq.com",
  website: "binsiddiq.com",
  address: "جدة، المملكة العربية السعودية",
  vatNumber: "300000000000000",   // ← ضع رقم الضريبة الحقيقي
  crNumber: "0000000000",         // ← ضع رقم السجل التجاري الحقيقي
  foundingYear: "1942",
  social: {
    instagram: "https://instagram.com/binsiddiq",
    twitter: "https://twitter.com/binsiddiq",
    facebook: "https://facebook.com/binsiddiq",
    snapchat: "https://snapchat.com/add/binsiddiq",
  },
};

// ============================================================
//  SHIPPING SETTINGS
// ============================================================
export const shippingSettings = {
  flatRate: 35,        // SAR — shipping cost
  freeAbove: 500,      // SAR — free shipping above this amount
  estimatedDays: "3-5 أيام عمل",
};

// Helper functions
export const getProductsByCategory = (cat: string) =>
  products.filter((p) => p.category === cat);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () =>
  products.filter((p) => p.isBestseller || p.isNew).slice(0, 8);

export const searchProducts = (query: string) =>
  products.filter(
    (p) =>
      p.name.includes(query) ||
      p.nameEn.toLowerCase().includes(query.toLowerCase()) ||
      p.collection.toLowerCase().includes(query.toLowerCase())
  );
