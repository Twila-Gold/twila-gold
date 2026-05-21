// Centralized placeholder data. All images via Unsplash (free, hotlinkable).
const u = (id: string, w = 1200, h = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const HERO_VIDEO =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/v1778957559/TWILA_03_z3a5ca.mp4";
export const HERO_VIDEO_SECOND =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/v1778957557/TWILA_01_hedlxd.mp4";
export const HERO_VIDEO_FALLBACK =
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80";

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

/** Gold collection imagery — used for banners, products, and carousels site-wide. */
export const GOLD_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106203/valentines-day-still-life-design_nultgk.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106199/akali-m5-s4-bg-a_npwny8.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779107772/earrings.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779178532/ChatGPT_Image_May_19_2026_01_45_04_PM_gkpcly.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106200/ChatGPT-Image-Apr-16-2026-01_47_54-PM_brrtbj.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106199/ChatGPT-Image-Apr-16-2026-01_41_28-PM_m5qgqn.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106199/ChatGPT-Image-Apr-16-2026-01_13_47-PM_kpt37w.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106199/ChatGPT-Image-Apr-12-2026-08_24_30-PM_go3co7.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779106199/button-top-earrings-for-women_l6s08s.webp",
] as const;

export const goldImg = (i: number) => GOLD_IMAGES[i % GOLD_IMAGES.length];

/** Diamond collection imagery — used for banners, products, and carousels site-wide. */
export const DIAMOND_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174481/1_tekt4m.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174481/2_al5kfx.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174481/3_kussld.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174481/4_jmndqq.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174481/5_x8zp77.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174482/6_qafr8t.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174480/7_szfbnr.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779174502/8_sumaul.png",
] as const;

export const diamondImg = (i: number) => DIAMOND_IMAGES[i % DIAMOND_IMAGES.length];

/** Platinum collection imagery — used for banners, products, and carousels site-wide. */
export const PLATINUM_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/1_zqoqmw.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/2_sfxdvg.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/3_bkwok6.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/4_voilqs.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/5_uv4klq.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170256/6_l3evic.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170257/7_y45geb.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779170257/8_bgdw8u.jpg",
] as const;

export const platinumImg = (i: number) => PLATINUM_IMAGES[i % PLATINUM_IMAGES.length];

/** Silver collection imagery — used for banners, products, and carousels site-wide. */
export const SILVER_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131281/1_amcopg.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131269/2_tevdqa.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131268/3_yijyce.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131279/4_p8cpqx.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131866/5_ywwg4b.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131287/6_vvizur.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131287/7_bmh8te.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779131269/8_fhzqxv.webp",

] as const;

export const silverImg = (i: number) => SILVER_IMAGES[i % SILVER_IMAGES.length];

/** Gents collection imagery — used for banners, products, and carousels site-wide. */
export const GENTS_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112404/Ring-Men_vrc4of.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112402/bracelet_pdpv4u.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112402/Round-Mens-Stud_vxwzff.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112402/mens-ring_dupdy5.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112402/Silver-Chain_lgaego.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112401/Platinum-nose-pin_gozquj.webp",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112405/ChatGPT-Image-Apr-15-2026-07_36_49-PM_pccsby.png",
] as const;

export const gentsImg = (i: number) => GENTS_IMAGES[i % GENTS_IMAGES.length];

/** Ladies collection imagery — used for banners, products, and carousels site-wide. */
export const LADIES_IMAGES = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112545/ChatGPT-Image-Apr-16-2026-10_43_48-PM-800x1200_f6r56l.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112544/ChatGPT-Image-Apr-16-2026-10_36_33-PM_q6wniz.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112544/ChatGPT-Image-Apr-16-2026-10_30_29-PM_dnyls5.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112544/ChatGPT-Image-Apr-16-2026-10_27_02-PM-e1776358706279_nugpi9.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112543/ChatGPT-Image-Apr-16-2026-10_24_53-PM_anwuvn.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112542/ChatGPT-Image-Apr-16-2026-10_22_45-PM_pnjbst.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112541/brace_kmhwfq.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112541/banner-ladies_n2zcqf.png",
] as const;

export const ladiesImg = (i: number) => LADIES_IMAGES[i % LADIES_IMAGES.length];

// Define KIDS_IMAGES and kidsImg in the same pattern as other image constants
export const KIDS_IMAGES: string[] = [
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112708/ChatGPT-Image-Apr-15-2026-08_47_40-PM_ontmo5.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112707/kkU5X86GTZBz8Oqyfs8jkpZkq5lKo81V1MpNsR_IbT0ybvGT4MiLGtf_DWlL_juwx60.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112706/earrinmg_dp4r71.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112707/FDp5B-mUqm7owAXAqPEij6KXADL0Ta4kkFPxPb7Y7q8ozAC_kGihF_l_akOm_qwijrc.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112706/ChatGPT-Image-Apr-16-2026-12_04_47-PM-800x1200_p4jgei.png",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112706/cZNvz9CVJJ8NS-tTvSXPLKx7Ts9Z0WlHwZE3tQwu0yJubasdtQuS28pHKgag_hmys6i.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112705/aa_oshucu.jpg",
  "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779112704/A-gH5PwGsqcD4v-G53Bd3gqz8G-uSe9ob3PKR7ER3QMllfRblhnNJAZ4t_dP_valqce.jpg",
];

export const kidsImg = (i: number) => KIDS_IMAGES[i % KIDS_IMAGES.length];

export const SHOP_AUDIENCES = [
  { key: "gents", label: "Gents", href: "/shop/gents", image: gentsImg(6) },
  { key: "ladies", label: "Ladies", href: "/shop/ladies", image: ladiesImg(7) },
  { key: "kids", label: "Kids", href: "/shop/kids", image: kidsImg(8) },
];

const productImage = (src: string, w = 800, h = 1000) =>
  src.startsWith("http") ? src : u(src, w, h);

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
const goldImgs = [...GOLD_IMAGES];
const diamondImgs = [...DIAMOND_IMAGES];
const platImgs = [...PLATINUM_IMAGES];
const silverImgs = [...SILVER_IMAGES];
const gentsImgs = [...GENTS_IMAGES];
const ladiesImgs = [...LADIES_IMAGES];

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
    image: productImage(imgs[i % imgs.length], 800, 1000),
    isNew,
  }));

export const PRODUCTS: Record<string, Product[]> = {
  gold: buildList("gold", goldImgs, [
    ["Eterna", "Pendant · 22K", 184500, true],
    ["Aurex", "Bracelet · 22K", 142000],
    ["Rubelle", "Earrings · 22K", 38900],
    ["Zarielle", "Earrings · 22K", 64200, true],
    ["Regalia", "Necklace · 22K", 92500],
    ["Auralis", "Waist Chain · 22K", 31200],
    ["Rouvina", "Earrings · 22K", 78900],
    ["Nooré", "Anklets · 22K", 21800],
  ]),
  diamond: buildList("dia", diamondImgs, [
    ["Stellis", "Bracelet · 18K + VVS1", 248000, true],
    ["Zirelle", "Earrings · 18K", 196500],
    ["Diora", "Earrings · 18K", 412000],
    ["Eterna Spark", "Locket · 18K", 89500],
    ["Verdant Grace", "Necklace · 18K", 134500, true],
    ["Pure Aura", "Ring · 18K", 178200],
    ["Lumi Petal", "Nosepin · 18K", 152000],
    ["Eclipse Shine", "Necklace · 18K", 96400],
  ]),
  platinum: buildList("plat", platImgs, [
    ["Lunex", "Bracelet · PT950", 84200, true],
    ["Aurelle", "Bangles · PT950", 312000],
    ["Virelle", "Bangles · PT950", 198400],
    ["Elara", "Pendant · PT950", 76800],
    ["Celestia", "Necklace · PT950", 62400, true],
    ["Aurevia", "Necklace · PT950", 142500],
    ["Elyan", "Ring · PT950", 142500],
    ["Orvian", "Ring · PT950", 142500],
  ]),
  silver: buildList("silver", silverImgs, [
    ["Silver Stag", "Pendant · 925", 4800, true],
    ["Silver Love", "Waist Chain · 925", 3200],
    ["Crimson Charm", "Anklet · 925", 6700],
    ["Scarlet", "Anklet · 925", 2400],
    ["Celeste", "Ring · 925", 3900, true],
    ["Veyron", "Chain · 925", 5400],
    ["Zenith", "Chain · 925", 5400],
    ["Ethereal", "Waist Chain · 925", 5400],
  ]),
  gents: buildList("gents", gentsImgs, [
    ["Adler", "Ring · 18K", 124500, true],
    ["Aurum Cuff", "Bangles · PT950", 168000],
    ["Nova Stud", "Stud · 22K", 184000],
    ["Regalis", "Ring · PT950", 92000],
    ["Dravyn", "Chain · 22K", 64500, true],
    ["Kairo", "Stud · 18K", 78400],
  ]),
  ladies: buildList("ladies", ladiesImgs, [
    ["Velric", "Ring · 18K", 286000, true],
    ["Reine", "Ring · 22K", 72400],
    ["Soliel", "Anklets · 18K", 142500],
    ["Fluer", "Earrings · 22K", 198000],
    ["Bloom", "Pendant · 18K", 64200, true],
    ["Etoile", "Nosepin · 22K", 412000],
  ]),
  kids: buildList("kids", KIDS_IMAGES, [
    ["Zenor", "Pendant · 925", 2800, true],
    ["Astrix", "Ring · 18K", 14200],
    ["Elira", "Earstud · 925", 3600],
    ["Orlina", "Bangles · 22K", 8400],
    ["Rynox", "Bracelet · 925", 4200, true],
    ["Avenza", "Waist Chain · 925", 1900],
  ]),
};

// Silver categories for filtering on the silver page
export const SILVER_CATEGORIES = [
  "Pendant",
  "Waist Chain",
  "Anklet",
  "Ring",
  "Chain",
];

export const BANNERS: Record<string, { title: string; subtitle: string; image: string; crumbs: string[] }> = {
  gold: {
    title: "Gold Jewels",
    subtitle: "Heirloom-grade craftsmanship in 22K and 24K gold.",
    image: goldImg(0),
    crumbs: ["Home", "Gold Jewels"],
  },
  diamond: {
    title: "Diamond Jewels",
    subtitle: "Brilliance, certified — solitaires and statement pieces.",
    image: diamondImg(0),
    crumbs: ["Home", "Diamond Jewels"],
  },
  platinum: {
    title: "Platinum Jewels",
    subtitle: "Timeless silhouettes, expertly crafted.",
    image: platinumImg(0),
    crumbs: ["Home", "Platinum Jewels"],
  },
  silver: {
    title: "Silver Jewels",
    subtitle: "Everyday Silver Elegance",
    image: silverImg(0),
    crumbs: ["Home", "Silver Jewels"],
  },
  shop: {
    title: "Crafted for Him, Her & Little Ones",
    subtitle: "Curated edits for him, her, and the little ones.",
    image: u("photo-1515562141207-7a88fb7ce338", 2000, 1100),
    crumbs: ["Home", "Shop"],
  },
  gents: {
    title: "Gents",
    subtitle: "Quietly powerful pieces for the modern gentleman.",
    image: gentsImg(0),
    crumbs: ["Home", "Shop", "Gents"],
  },
  ladies: {
    title: "Ladies",
    subtitle: "Timeless silhouettes, written in precious metal.",
    image: ladiesImg(7),
    crumbs: ["Home", "Shop", "Ladies"],
  },
  kids: {
    title: "Kids",
    subtitle: "Tiny treasures crafted with extraordinary care.",
    image: kidsImg(0),
    crumbs: ["Home", "Shop", "Kids"],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Your trusted partner is just one message away",
    image: platinumImg(6),
    crumbs: ["Home", "Contact"],
  },
  about: {
    title: "About Us",
    subtitle: "Crafting timeless jewellery with passion and precision.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2000&h=900&q=80",
    crumbs: ["Home", "About Us"],
  },
};

export const CAROUSEL_ITEMS: Record<string, { title: string; image: string; meta: string }[]> = {
  home: [
    { title: "Bridal Diamonds", image: diamondImg(0), meta: "NEW · 18K" },
    { title: "Heritage Gold", image: goldImg(0), meta: "22K · 8 LOOKS" },
    { title: "Platinum Edits", image: platinumImg(0), meta: "PT950" },
    { title: "Everyday Silver", image: silverImg(0), meta: "925 · NEW" },
    { title: "Gents Signature", image: gentsImg(0), meta: "MEN · 12 LOOKS" },
    { title: "Kids Charms", image: kidsImg(0), meta: "MINI · 925" },
    { title: "Solitaire Studio", image: diamondImg(1), meta: "BESPOKE" },
  ],
  gold: [
    { title: "Bridal Edit", image: goldImg(0), meta: "22K" },
    { title: "Temple Series", image: goldImg(1), meta: "22K · NEW" },
    { title: "Daily Gold", image: goldImg(2), meta: "18K" },
    { title: "Mangalsutra", image: goldImg(3), meta: "22K" },
    { title: "Studded Gold", image: goldImg(4), meta: "22K + UNCUT" },
  ],
  diamond: [
    { title: "Solitaires", image: diamondImg(0), meta: "VVS · NEW" },
    { title: "Bridal Brilliance", image: diamondImg(1), meta: "18K" },
    { title: "Cocktail Rings", image: diamondImg(2), meta: "18K" },
    { title: "Studs & Hoops", image: diamondImg(3), meta: "18K" },
    { title: "Tennis Bracelets", image: diamondImg(4), meta: "VS+" },
  ],
  platinum: [
    { title: "Couple Bands", image: platinumImg(0), meta: "PT950" },
    { title: "Solitaire Studio", image: platinumImg(1), meta: "PT950 · NEW" },
    { title: "Sleek Chains", image: platinumImg(2), meta: "PT950" },
    { title: "Architectural", image: platinumImg(3), meta: "PT950" },
  ],
  silver: [
    { title: "Everyday 925", image: silverImg(0), meta: "NEW" },
    { title: "Stackables", image: silverImg(1), meta: "925" },
    { title: "Statement", image: silverImg(2), meta: "925" },
    { title: "Gifts Under ₹5K", image: silverImg(3), meta: "925" },
  ],
  gents: [
    { title: "Signets", image: gentsImg(0), meta: "18K" },
    { title: "Chains", image: gentsImg(4), meta: "22K · NEW" },
    { title: "Bracelets", image: gentsImg(1), meta: "PT950" },
    { title: "Cufflinks", image: gentsImg(5), meta: "PT950" },
  ],
  ladies: [
    { title: "Bridal", image: ladiesImg(0), meta: "22K · NEW" },
    { title: "Cocktail", image: ladiesImg(1), meta: "18K" },
    { title: "Daily Wear", image: ladiesImg(2), meta: "22K" },
    { title: "Statement Sets", image: ladiesImg(3), meta: "22K" },
  ],
  kids: [
    { title: "First Studs", image: u("photo-1561828995-aa79a2db86dd", 800, 600), meta: "22K" },
    { title: "Charms", image: silverImg(4), meta: "925 · NEW" },
    { title: "Naming Day", image: silverImg(5), meta: "GIFTS" },
  ],
  shop: [
    { title: "Editors Choice", image: diamondImg(5), meta: "Handpicked Favourites" },
    { title: "New In", image: goldImg(7), meta: "Freshly added" },
    { title: "The  Art of Gifting", image: silverImg(6), meta: "Timeless Gestures" },
    { title: "Bridal Elegance", image: ladiesImg(0), meta: "Crafted to celebrate" },
  ],
};
