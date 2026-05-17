// Centralized placeholder data. All images via Unsplash (free, hotlinkable).
const u = (id: string, w = 1200, h = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const HERO_VIDEO =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/v1778957559/TWILA_03_z3a5ca.mp4";
export const HERO_VIDEO_SECOND =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/v1778957557/TWILA_01_hedlxd.mp4";
export const HERO_VIDEO_FALLBACK =
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80";

export const SHOP_AUDIENCES = [
  { key: "gents", label: "Gents", href: "/shop/gents", image: u("photo-1622398925373-3f91b1e275f5", 600, 600) },
  { key: "ladies", label: "Ladies", href: "/shop/ladies", image: u("photo-1611591437281-460bfbe1220a", 600, 600) },
  { key: "kids", label: "Kids", href: "/shop/kids", image: u("photo-1561828995-aa79a2db86dd", 600, 600) },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Gold Jewels", href: "/gold-jewels" },
  { label: "Diamond Jewels", href: "/diamond-jewels" },
  { label: "Platinum Jewels", href: "/platinum-jewels" },
  { label: "Silver Jewels", href: "/silver-jewels" },
  { label: "Shop", href: "/shop", hasMenu: true },
  { label: "Contact Us", href: "/contact" },
];

export type Product = {
  id: string;
  name: string;
  tag: string;
  price: string;
  image: string;
  isNew?: boolean;
};

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

const make = (prefix: string, image: string, items: [string, string, number, boolean?][]): Product[] =>
  items.map(([name, tag, price, isNew], i) => ({
    id: `${prefix}-${i}`,
    name,
    tag,
    price: inr(price),
    image,
    isNew,
  }));

// Per-category product lists (image varies per item)
const goldImgs = [
  "photo-1599643477877-530eb83abc8e",
  "photo-1611591437281-460bfbe1220a",
  "photo-1602173574767-37ac01994b2a",
  "photo-1535632787350-4e68ef0ac584",
  "photo-1573408301185-9146fe634ad0",
  "photo-1606760227091-3dd870d97f1d",
  "photo-1620656798579-1984d9e87df7",
  "photo-1631982690223-8aa4be0a2497",
];
const diamondImgs = [
  "photo-1605100804763-247f67b3557e",
  "photo-1515562141207-7a88fb7ce338",
  "photo-1599643478518-a784e5dc4c8f",
  "photo-1602752250015-52934bc45613",
  "photo-1611652022419-a9419f74343d",
  "photo-1635767798638-3e25273a8236",
  "photo-1602874801007-bd458bb1b8b6",
  "photo-1551845728-6820a30c64e1",
];
const platImgs = [
  "photo-1583937443351-d1ea0a1ebcfb",
  "photo-1602752250015-52934bc45613",
  "photo-1573408301185-9146fe634ad0",
  "photo-1605100804763-247f67b3557e",
  "photo-1611652022419-a9419f74343d",
  "photo-1602173574767-37ac01994b2a",
];
const silverImgs = [
  "photo-1611652022419-a9419f74343d",
  "photo-1609245224731-2ce0f0c3c6b6",
  "photo-1535632787350-4e68ef0ac584",
  "photo-1573408301185-9146fe634ad0",
  "photo-1620656798579-1984d9e87df7",
  "photo-1602173574767-37ac01994b2a",
];

const buildList = (
  prefix: string,
  imgs: string[],
  items: [string, string, number, boolean?][]
): Product[] =>
  items.map(([name, tag, price, isNew], i) => ({
    id: `${prefix}-${i}`,
    name,
    tag,
    price: inr(price),
    image: u(imgs[i % imgs.length], 800, 1000),
    isNew,
  }));

export const PRODUCTS: Record<string, Product[]> = {
  gold: buildList("gold", goldImgs, [
    ["Aurelia Necklace", "Necklace · 22K", 184500, true],
    ["Veda Bangle Pair", "Bangles · 22K", 142000],
    ["Surya Pendant", "Pendant · 22K", 38900],
    ["Ananta Earrings", "Earrings · 22K", 64200, true],
    ["Mira Chain", "Chain · 22K", 92500],
    ["Lavanya Ring", "Ring · 22K", 31200],
    ["Ojas Mangalsutra", "Mangalsutra · 22K", 78900],
    ["Tara Stud Set", "Studs · 22K", 21800],
  ]),
  diamond: buildList("dia", diamondImgs, [
    ["Solitaire Aria", "Ring · 18K + VVS1", 248000, true],
    ["Halo Eternal", "Ring · 18K", 196500],
    ["Cascade Necklace", "Necklace · 18K", 412000],
    ["Brilliance Studs", "Studs · 18K", 89500],
    ["Lumière Pendant", "Pendant · 18K", 134500, true],
    ["Reverie Bracelet", "Bracelet · 18K", 178200],
    ["Étoile Earrings", "Earrings · 18K", 152000],
    ["Marquise Band", "Band · 18K", 96400],
  ]),
  platinum: buildList("plat", platImgs, [
    ["Axis Band", "Band · PT950", 84200, true],
    ["Norra Solitaire", "Ring · PT950", 312000],
    ["Helix Bracelet", "Bracelet · PT950", 198400],
    ["Polaris Pendant", "Pendant · PT950", 76800],
    ["Vega Studs", "Studs · PT950", 62400, true],
    ["Orbit Chain", "Chain · PT950", 142500],
  ]),
  silver: buildList("silver", silverImgs, [
    ["Luna Hoops", "Hoops · 925", 4800, true],
    ["Aria Pendant", "Pendant · 925", 3200],
    ["Mara Cuff", "Cuff · 925", 6700],
    ["Iris Studs", "Studs · 925", 2400],
    ["Nova Ring", "Ring · 925", 3900, true],
    ["Sable Chain", "Chain · 925", 5400],
  ]),
  gents: buildList("gents", [...platImgs, ...goldImgs], [
    ["Kingsman Signet", "Ring · 18K", 124500, true],
    ["Atlas Bracelet", "Bracelet · PT950", 168000],
    ["Regent Chain", "Chain · 22K", 184000],
    ["Onyx Cufflinks", "Cufflinks · PT950", 92000],
    ["Heritage Band", "Band · 22K", 64500, true],
    ["Eclipse Pendant", "Pendant · 18K", 78400],
  ]),
  ladies: buildList("ladies", [...diamondImgs, ...goldImgs], [
    ["Reine Necklace", "Necklace · 18K", 286000, true],
    ["Fleur Earrings", "Earrings · 22K", 72400],
    ["Soliel Bracelet", "Bracelet · 18K", 142500],
    ["Bloom Bangles", "Bangles · 22K", 198000],
    ["Étoile Studs", "Studs · 18K", 64200, true],
    ["Maharani Set", "Set · 22K", 412000],
  ]),
  kids: buildList("kids", silverImgs, [
    ["Little Star Pendant", "Pendant · 925", 2800, true],
    ["Mini Hoops", "Hoops · 18K", 14200],
    ["Charm Bracelet", "Bracelet · 925", 3600],
    ["Tiny Studs", "Studs · 22K", 8400],
    ["Initial Chain", "Chain · 925", 4200, true],
    ["Bunny Ring", "Ring · 925", 1900],
  ]),
};

export const BANNERS: Record<string, { title: string; subtitle: string; image: string; crumbs: string[] }> = {
  gold: {
    title: "Gold Jewels",
    subtitle: "Heirloom-grade craftsmanship in 22K and 24K gold.",
    image: u("photo-1620656798579-1984d9e87df7", 2000, 1100),
    crumbs: ["Home", "Gold Jewels"],
  },
  diamond: {
    title: "Diamond Jewels",
    subtitle: "Brilliance, certified — solitaires and statement pieces.",
    image: u("photo-1605100804763-247f67b3557e", 2000, 1100),
    crumbs: ["Home", "Diamond Jewels"],
  },
  platinum: {
    title: "Platinum Jewels",
    subtitle: "Rare metal, refined silhouettes — engineered to last.",
    image: u("photo-1583937443351-d1ea0a1ebcfb", 2000, 1100),
    crumbs: ["Home", "Platinum Jewels"],
  },
  silver: {
    title: "Silver Jewels",
    subtitle: "Everyday elegance in sterling 925.",
    image: u("photo-1611652022419-a9419f74343d", 2000, 1100),
    crumbs: ["Home", "Silver Jewels"],
  },
  shop: {
    title: "The Boutique",
    subtitle: "Curated edits for him, her, and the little ones.",
    image: u("photo-1515562141207-7a88fb7ce338", 2000, 1100),
    crumbs: ["Home", "Shop"],
  },
  gents: {
    title: "Gents",
    subtitle: "Quietly powerful pieces for the modern gentleman.",
    image: u("photo-1622398925373-3f91b1e275f5", 2000, 1100),
    crumbs: ["Home", "Shop", "Gents"],
  },
  ladies: {
    title: "Ladies",
    subtitle: "Timeless silhouettes, written in precious metal.",
    image: u("photo-1611591437281-460bfbe1220a", 2000, 1100),
    crumbs: ["Home", "Shop", "Ladies"],
  },
  kids: {
    title: "Kids",
    subtitle: "Tiny treasures crafted with extraordinary care.",
    image: u("photo-1561828995-aa79a2db86dd", 2000, 1100),
    crumbs: ["Home", "Shop", "Kids"],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Visit the boutique or speak with a private advisor.",
    image: u("photo-1583937443351-d1ea0a1ebcfb", 2000, 1100),
    crumbs: ["Home", "Contact"],
  },
};

export const CAROUSEL_ITEMS: Record<string, { title: string; image: string; meta: string }[]> = {
  home: [
    { title: "Bridal Diamonds", image: u("photo-1605100804763-247f67b3557e", 800, 600), meta: "NEW · 18K" },
    { title: "Heritage Gold", image: u("photo-1620656798579-1984d9e87df7", 800, 600), meta: "22K · 8 LOOKS" },
    { title: "Platinum Edits", image: u("photo-1583937443351-d1ea0a1ebcfb", 800, 600), meta: "PT950" },
    { title: "Everyday Silver", image: u("photo-1611652022419-a9419f74343d", 800, 600), meta: "925 · NEW" },
    { title: "Gents Signature", image: u("photo-1622398925373-3f91b1e275f5", 800, 600), meta: "MEN · 12 LOOKS" },
    { title: "Kids Charms", image: u("photo-1561828995-aa79a2db86dd", 800, 600), meta: "MINI · 925" },
    { title: "Solitaire Studio", image: u("photo-1515562141207-7a88fb7ce338", 800, 600), meta: "BESPOKE" },
  ],
  gold: [
    { title: "Bridal Edit", image: u("photo-1620656798579-1984d9e87df7", 800, 600), meta: "22K" },
    { title: "Temple Series", image: u("photo-1599643477877-530eb83abc8e", 800, 600), meta: "22K · NEW" },
    { title: "Daily Gold", image: u("photo-1606760227091-3dd870d97f1d", 800, 600), meta: "18K" },
    { title: "Mangalsutra", image: u("photo-1611591437281-460bfbe1220a", 800, 600), meta: "22K" },
    { title: "Studded Gold", image: u("photo-1535632787350-4e68ef0ac584", 800, 600), meta: "22K + UNCUT" },
  ],
  diamond: [
    { title: "Solitaires", image: u("photo-1605100804763-247f67b3557e", 800, 600), meta: "VVS · NEW" },
    { title: "Bridal Brilliance", image: u("photo-1515562141207-7a88fb7ce338", 800, 600), meta: "18K" },
    { title: "Cocktail Rings", image: u("photo-1602874801007-bd458bb1b8b6", 800, 600), meta: "18K" },
    { title: "Studs & Hoops", image: u("photo-1599643478518-a784e5dc4c8f", 800, 600), meta: "18K" },
    { title: "Tennis Bracelets", image: u("photo-1611652022419-a9419f74343d", 800, 600), meta: "VS+" },
  ],
  platinum: [
    { title: "Couple Bands", image: u("photo-1583937443351-d1ea0a1ebcfb", 800, 600), meta: "PT950" },
    { title: "Solitaire Studio", image: u("photo-1602752250015-52934bc45613", 800, 600), meta: "PT950 · NEW" },
    { title: "Sleek Chains", image: u("photo-1573408301185-9146fe634ad0", 800, 600), meta: "PT950" },
    { title: "Architectural", image: u("photo-1605100804763-247f67b3557e", 800, 600), meta: "PT950" },
  ],
  silver: [
    { title: "Everyday 925", image: u("photo-1611652022419-a9419f74343d", 800, 600), meta: "NEW" },
    { title: "Stackables", image: u("photo-1609245224731-2ce0f0c3c6b6", 800, 600), meta: "925" },
    { title: "Statement", image: u("photo-1535632787350-4e68ef0ac584", 800, 600), meta: "925" },
    { title: "Gifts Under ₹5K", image: u("photo-1620656798579-1984d9e87df7", 800, 600), meta: "925" },
  ],
  gents: [
    { title: "Signets", image: u("photo-1622398925373-3f91b1e275f5", 800, 600), meta: "18K" },
    { title: "Chains", image: u("photo-1573408301185-9146fe634ad0", 800, 600), meta: "22K · NEW" },
    { title: "Bracelets", image: u("photo-1583937443351-d1ea0a1ebcfb", 800, 600), meta: "PT950" },
    { title: "Cufflinks", image: u("photo-1602752250015-52934bc45613", 800, 600), meta: "PT950" },
  ],
  ladies: [
    { title: "Bridal", image: u("photo-1611591437281-460bfbe1220a", 800, 600), meta: "22K · NEW" },
    { title: "Cocktail", image: u("photo-1602874801007-bd458bb1b8b6", 800, 600), meta: "18K" },
    { title: "Daily Wear", image: u("photo-1606760227091-3dd870d97f1d", 800, 600), meta: "22K" },
    { title: "Statement Sets", image: u("photo-1620656798579-1984d9e87df7", 800, 600), meta: "22K" },
  ],
  kids: [
    { title: "First Studs", image: u("photo-1561828995-aa79a2db86dd", 800, 600), meta: "22K" },
    { title: "Charms", image: u("photo-1611652022419-a9419f74343d", 800, 600), meta: "925 · NEW" },
    { title: "Naming Day", image: u("photo-1609245224731-2ce0f0c3c6b6", 800, 600), meta: "GIFTS" },
  ],
  shop: [
    { title: "Staff Picks", image: u("photo-1605100804763-247f67b3557e", 800, 600), meta: "EDIT · NEW" },
    { title: "New Arrivals", image: u("photo-1620656798579-1984d9e87df7", 800, 600), meta: "JUST IN" },
    { title: "Gifting", image: u("photo-1611652022419-a9419f74343d", 800, 600), meta: "FROM ₹4K" },
    { title: "Bridal Atelier", image: u("photo-1611591437281-460bfbe1220a", 800, 600), meta: "BESPOKE" },
  ],
};
