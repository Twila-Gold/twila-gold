import { CategoryPage } from "@/components/site/CategoryPage";

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
          { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80", alt: "Ladies necklace" },
          { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80", alt: "Ladies pendant" },
          { src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80", alt: "Ladies ring" },
          { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80", alt: "Ladies diamond set" },
          { src: "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=900&q=80", alt: "Ladies chain" },
          { src: "https://images.unsplash.com/photo-1583937443351-d1ea0a1ebcfb?auto=format&fit=crop&w=900&q=80", alt: "Ladies ring detail" },
        ],
        storyTitle: "Grace, Crafted Daily",
        storyLead: "Timeless Elegance for Every Chapter",
        storyBody: "From subtle everyday sparkle to occasion-led statements, each piece is created to feel refined, wearable, and unmistakably personal.",
        storyImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
        storyImageAlt: "Portrait of woman wearing jewellery",
      }}
      bentoEyebrow="Atelier · Ladies"
      bentoHeading="Timeless silhouettes"
      bentoTiles={[
        { type: "image", title: "Bridal Atelier", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80", body: "Twelve-piece sets, hand-finished.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "22K", title: "Bridal standard" },
        { type: "image", title: "Cocktail", image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=80" },
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
