import { CategoryPage } from "@/components/site/CategoryPage";
import { HERO_VIDEO_SECOND, PRODUCTS, platinumImg } from "@/data/site";

export function PlatinumJewelsPage() {
  const filters = [
    "All",
    ...new Set(PRODUCTS.platinum.map((p) => p.tag.split("·")[0].trim())),
  ];

  return (
    <CategoryPage
      dataKey="platinum"
      bannerVideo={HERO_VIDEO_SECOND}
      bentoEyebrow="Atelier · Platinum"
      bentoHeading="Rare metal, refined silhouettes"
      bentoTiles={[
        { type: "image", title: "Couple Bands", image: platinumImg(0), body: "30+ silhouettes, engraved to order.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "PT950", title: "Pure platinum", body: "Naturally white, hypoallergenic." },
        { type: "image", title: "Solitaires", image: platinumImg(1), body: "Certified stones in PT950 settings." },
        { type: "text", title: "Why platinum", body: "30 times rarer than gold. Holds stones with quiet, lasting precision." },
        { type: "cta", title: "Design a band", body: "Choose finish, profile and engraving in a private session.", ctaLabel: "Enquire", ctaHref: "/contact" },
        { type: "image", title: "Architectural", image: platinumImg(4), body: "Sculptural profiles with enduring finish." },
        { type: "stat", stat: "30×", title: "Rarer than gold" },
      ]}
      carouselEyebrow="Platinum edits"
      carouselTitle="Rare finishes"
      carouselCta="See platinum edits"
      carouselHref="/platinum-jewels"
      gridEyebrow="The collection"
      gridHeading="Platinum pieces"
      gridVariant="catalog"
      filters={filters}
    />
  );
}
