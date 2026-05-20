import { CategoryPage } from "@/components/site/CategoryPage";
import { PRODUCTS, platinumImg } from "@/data/site";

const PLATINUM_BANNER_VIDEO =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/TWILA_05_lir7w2.mp4";

export function PlatinumJewelsPage() {
  const filters = [
    "All",
    ...new Set(PRODUCTS.platinum.map((p) => p.tag.split("·")[0].trim())),
  ];

  return (
    <CategoryPage
      dataKey="platinum"
      bannerVideo={PLATINUM_BANNER_VIDEO}
      disableCarousel
      bentoHeading="Enduring style with refined artistry."
      bentoTiles={[
        { type: "image", title: "Couple Bands", image: platinumImg(0), body: "30+ silhouettes, engraved to order.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "PT950", title: "Pure platinum", body: "Naturally white, hypoallergenic." },
        { type: "image", title: "Solitaires", image: platinumImg(1), body: "Certified stones in PT950 settings." },
        { type: "text", title: "Why platinum", body: "30 times rarer than gold. Holds stones with quiet, lasting precision." },
        { type: "cta", title: "Design a band", body: "Choose finish, profile and engraving in a private session.", ctaLabel: "Enquire", ctaHref: "/contact" },
        { type: "image", title: "Architectural", image: platinumImg(4), body: "Sculptural profiles with enduring finish." },
        { type: "stat", stat: "30×", title: "Rarer than gold" },
      ]}
      gridHeading="Platinum pieces"
      gridVariant="catalog"
      filters={filters}
    />
  );
}
