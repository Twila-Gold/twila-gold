import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const template = fs.readFileSync(path.join(root, "dist/index.html"), "utf-8");
const { render } = await import(path.join(root, "dist/server/entry-server.js"));

const ROUTE_META = {
  "/": {
    title: "TWILA | House of Fine Jewellery — Gold, Diamonds & Platinum",
    description:
      "Discover TWILA's exquisite collection of 22K gold, diamond, platinum and silver jewellery. Heirloom-grade craftsmanship for every occasion. Shop online today.",
    canonical: "https://twilagold.com/",
  },
  "/about": {
    title: "About TWILA | A House of Fine Jewellery",
    description:
      "Learn about TWILA — a fine jewellery house crafting heirloom-grade gold, diamond, platinum and silver pieces with tradition and modern aesthetics. Our story.",
    canonical: "https://twilagold.com/about",
  },
  "/contact": {
    title: "Contact TWILA | Get in Touch",
    description:
      "Reach out to TWILA for enquiries about our fine jewellery collections — gold, diamond, platinum and silver. We're here to help you find the perfect piece.",
    canonical: "https://twilagold.com/contact",
  },
  "/gold-jewels": {
    title: "Gold Jewellery | 22K & 24K Gold Collection — TWILA",
    description:
      "Browse TWILA's heirloom-grade 22K and 24K gold jewellery — pendants, bracelets, earrings, necklaces and more. Crafted with quiet precision for every occasion.",
    canonical: "https://twilagold.com/gold-jewels",
  },
  "/diamond-jewels": {
    title: "Diamond Jewellery | VVS & Certified Diamonds — TWILA",
    description:
      "Discover TWILA's certified diamond jewellery set in 18K gold — solitaires, bridal sets, earrings, bracelets and necklaces. Brilliance, certified and exquisitely crafted.",
    canonical: "https://twilagold.com/diamond-jewels",
  },
  "/platinum-jewels": {
    title: "Platinum Jewellery | PT950 Collection — TWILA",
    description:
      "Explore TWILA's PT950 platinum jewellery — couple bands, solitaire pendants, sleek chains and architectural pieces. Timeless silhouettes, expertly crafted.",
    canonical: "https://twilagold.com/platinum-jewels",
  },
  "/silver-jewels": {
    title: "Silver Jewellery | 925 Sterling Silver Collection — TWILA",
    description:
      "Shop TWILA's 925 sterling silver jewellery — everyday pendants, waist chains, anklets, rings and chains. Elegant everyday silver at accessible prices.",
    canonical: "https://twilagold.com/silver-jewels",
  },
  "/shop": {
    title: "Shop Fine Jewellery | Gents, Ladies & Kids — TWILA",
    description:
      "Shop TWILA's curated fine jewellery edits for gents, ladies and kids. Gold, diamond, platinum and silver pieces for every occasion and every person.",
    canonical: "https://twilagold.com/shop",
  },
  "/shop/ladies": {
    title: "Ladies Jewellery | Fine Jewels for Her — TWILA",
    description:
      "Shop TWILA's ladies' fine jewellery — rings, earrings, anklets, nosepins and pendants in gold, diamond and platinum. Timeless silhouettes for her.",
    canonical: "https://twilagold.com/shop/ladies",
  },
  "/shop/gents": {
    title: "Gents Jewellery | Fine Jewels for Him — TWILA",
    description:
      "Explore TWILA's gents' jewellery — rings, chains, bracelets and studs in 18K gold, 22K gold and PT950 platinum. Quietly powerful pieces for the modern gentleman.",
    canonical: "https://twilagold.com/shop/gents",
  },
  "/shop/kids": {
    title: "Kids Jewellery | Tiny Treasures — TWILA",
    description:
      "Discover TWILA's kids' jewellery — pendants, earrings, bangles and bracelets in 22K gold and 925 silver. Tiny treasures crafted with extraordinary care.",
    canonical: "https://twilagold.com/shop/kids",
  },
};

for (const [url, meta] of Object.entries(ROUTE_META)) {
  const appHtml = render(url);

  const html = template
    .replace("<!--ssr-outlet-->", appHtml)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/>/,
      `<link rel="canonical" href="${meta.canonical}" />`,
    )
    .replace(/(<meta property="og:title" content=)".*?"/, `$1"${meta.title}"`)
    .replace(/(<meta property="og:description" content=)".*?"/, `$1"${meta.description}"`)
    .replace(/(<meta property="og:url" content=)".*?"/, `$1"${meta.canonical}"`)
    .replace(/(<meta name="twitter:title" content=)".*?"/, `$1"${meta.title}"`)
    .replace(
      /(<meta name="twitter:description" content=)".*?"/,
      `$1"${meta.description}"`,
    );

  const filePath =
    url === "/"
      ? path.join(root, "dist/index.html")
      : path.join(root, `dist${url}/index.html`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");
  console.log(`✓ ${url}`);
}

console.log("Prerendering complete.");
