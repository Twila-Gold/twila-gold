import { CategoryPage } from "@/components/site/CategoryPage";
import { diamondImg } from "@/data/site";

const DIAMOND_BANNER_VIDEO =
  "https://res.cloudinary.com/dbntg4yrs/video/upload/TWILA_02_qvi1vi.mp4";

export function DiamondJewelsPage() {
  return (
    <CategoryPage
      dataKey="diamond"
      bannerVideo={DIAMOND_BANNER_VIDEO}
      disableCarousel
      bentoHeading="Brilliance, certified"
      bentoTiles={[
        { type: "image", title: "Solitaire Studio", image: diamondImg(0), body: "Bespoke solitaires from 0.30ct to 3ct.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "VVS", title: "Clarity, minimum", body: "Every solitaire IGI / GIA certified." },
        { type: "image", title: "Cocktail Rings", image: diamondImg(2), body: "Statement silhouettes for evening wear." },
        { type: "text", title: "Conflict-free", body: "Diamonds traceable to mine of origin, with full Kimberley compliance." },
        { type: "cta", title: "Design your solitaire", body: "Choose stone, setting and metal in a private session.", ctaLabel: "Begin", ctaHref: "/contact" },
        { type: "image", title: "Everyday Sparkle", image: diamondImg(4), body: "Clean, versatile diamond pieces for gifting and daily wear." },
        { type: "stat", stat: "18K", title: "Setting standard" },
      ]}
      gridEyebrow="The collection"
      gridHeading="Diamond pieces"
      gridVariant="catalog"
      filters={["All", "Bracelet", "Earrings", "Locket", "Necklace", "Ring", "Nosepin"]}
    />
  );
}
