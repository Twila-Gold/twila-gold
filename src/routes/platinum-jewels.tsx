import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { BANNERS, HERO_VIDEO_SECOND } from "@/data/site";

export const Route = createFileRoute("/platinum-jewels")({
  head: () => ({
    meta: [
      { title: "Platinum Jewels — TWILA" },
      { name: "description", content: "PT950 platinum jewellery — couple bands, solitaires and architectural silhouettes." },
      { property: "og:title", content: "Platinum Jewels — TWILA" },
      { property: "og:image", content: BANNERS.platinum.image },
    ],
  }),
  component: () => (
    <CategoryPage
      dataKey="platinum"
      bannerVideo={HERO_VIDEO_SECOND}
      bentoEyebrow="Atelier · Platinum"
      bentoHeading="Rare metal, refined silhouettes"
      bentoTiles={[
        { type: "image", title: "Couple Bands", image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1778990420/closeup-diamond-ring_kpgjps.jpg", body: "30+ silhouettes, engraved to order.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "PT950", title: "Pure platinum", body: "Naturally white, hypoallergenic." },
        { type: "image", title: "Solitaires", image: "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=900&q=80" },
        { type: "text", title: "Why platinum", body: "30 times rarer than gold. Holds stones with quiet, lasting precision." },
        { type: "cta", title: "Design a band", body: "Choose finish, profile and engraving in a private session.", ctaLabel: "Enquire", ctaHref: "/contact" },
        { type: "image", title: "Architectural", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" },
        { type: "stat", stat: "30×", title: "Rarer than gold" },
      ]}
      carouselEyebrow="Platinum edits"
      carouselTitle="Rare finishes"
      carouselCta="See platinum edits"
      carouselHref="/platinum-jewels"
      gridEyebrow="The collection"
      gridHeading="Platinum pieces"
      gridVariant="catalog"
      gridFilterMap={{
        Bands: "band",
        Solitaires: "ring",
        Bracelets: "bracelet",
        Chains: "chain",
        Studs: "studs",
      }}
      filters={["All", "Bands", "Solitaires", "Bracelets", "Chains", "Studs"]}
    />
  ),
});
