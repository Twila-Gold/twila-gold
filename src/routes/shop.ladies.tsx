import { CategoryPage } from "@/components/site/CategoryPage";
import { ladiesImg } from "@/data/site";

export function LadiesPage() {
  return (
    <CategoryPage
      dataKey="ladies"
      bannerHeight="70vh"
      disableBento
      disableCarousel
      showcase={{
        title: "Exclusive Ladies Jewels",
        collageImages: [
          { src: ladiesImg(0), alt: "Ladies necklace" },
          { src: ladiesImg(1), alt: "Ladies pendant" },
          { src: ladiesImg(2), alt: "Ladies ring" },
          { src: ladiesImg(3), alt: "Ladies diamond set" },
          { src: ladiesImg(4), alt: "Ladies chain" },
          { src: ladiesImg(5), alt: "Ladies ring detail" },
        ],
        storyTitle: "Grace, Crafted Daily",
        storyLead: "Timeless Elegance for Every Chapter",
        storyBody: "From subtle everyday sparkle to occasion-led statements, each piece is created to feel refined, wearable, and unmistakably personal.",
        storyImage: ladiesImg(6),
        storyImageAlt: "Portrait of woman wearing jewellery",
      }}
      bentoEyebrow="Atelier · Ladies"
      bentoHeading="Timeless silhouettes"
      bentoTiles={[
        { type: "image", title: "Bridal Atelier", image: ladiesImg(0), body: "Twelve-piece sets, hand-finished.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "22K", title: "Bridal standard" },
        { type: "image", title: "Cocktail", image: ladiesImg(2) },
        { type: "text", title: "For every chapter", body: "From everyday studs to once-in-a-lifetime sets — designed to be worn, not stored." },
        { type: "cta", title: "Private bridal", body: "Plan your set in a calm, private session.", ctaLabel: "Book", ctaHref: "/contact" },
        { type: "stat", stat: "60+", title: "Bridal silhouettes" },
      ]}
      carouselEyebrow="For her"
      carouselTitle="The ladies' edit"
      carouselCta="See all ladies"
      carouselHref="/shop/ladies"
      gridEyebrow="Curated"
      gridHeading="Ladies pieces"
      gridHidePrice
      filters={["All", "Necklaces", "Earrings", "Bangles", "Sets", "Rings"]}
    />
  );
}
