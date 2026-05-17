import { CategoryPage } from "@/components/site/CategoryPage";
import { BANNERS, HERO_VIDEO } from "@/data/site";

export function DiamondJewelsPage() {
  return (
    <CategoryPage
      dataKey="diamond"
      bannerVideo={HERO_VIDEO}
      bentoEyebrow="Atelier · Diamond"
      bentoHeading="Brilliance, certified"
      bentoTiles={[
        { type: "image", title: "Solitaire Studio", image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1778990420/closeup-diamond-ring_kpgjps.jpg", body: "Bespoke solitaires from 0.30ct to 3ct.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "VVS", title: "Clarity, minimum", body: "Every solitaire IGI / GIA certified." },
        { type: "image", title: "Cocktail Rings", image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=80" },
        { type: "text", title: "Conflict-free", body: "Diamonds traceable to mine of origin, with full Kimberley compliance." },
        { type: "cta", title: "Design your solitaire", body: "Choose stone, setting and metal in a private session.", ctaLabel: "Begin", ctaHref: "/contact" },
        { type: "image", title: "Everyday Sparkle", image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1778993337/queen-crown-still-life_2_rtbaji.jpg", body: "Clean, versatile diamond pieces for gifting and daily wear." },
        { type: "stat", stat: "18K", title: "Setting standard" },
      ]}
      carouselEyebrow="Diamond journeys"
      carouselTitle="A study in light"
      carouselCta="See all diamond edits"
      carouselHref="/diamond-jewels"
      gridEyebrow="The collection"
      gridHeading="Diamond pieces"
      gridVariant="catalog"
      gridFilterMap={{
        Solitaires: "ring",
        Studs: "studs",
        Pendants: "pendant",
        Bracelets: "bracelet",
        Bands: "band",
      }}
      filters={["All", "Solitaires", "Studs", "Pendants", "Bracelets", "Bands"]}
    />
  );
}
