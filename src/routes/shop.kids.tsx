import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { BANNERS } from "@/data/site";

export const Route = createFileRoute("/shop/kids")({
  head: () => ({
    meta: [
      { title: "Kids — TWILA" },
      { name: "description", content: "Tiny treasures crafted with extraordinary care — first studs, charms and naming-day gifts." },
      { property: "og:image", content: BANNERS.kids.image },
    ],
  }),
  component: () => (
    <CategoryPage
      dataKey="kids"
      bannerHeight="70vh"
      disableBento
      disableCarousel
      showcase={{
        title: "Exclusive Kids Jewels",
        collageImages: [
          { src: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?auto=format&fit=crop&w=900&q=80", alt: "Kids pendant" },
          { src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80", alt: "Kids charm" },
          { src: "https://images.unsplash.com/photo-1609245224731-2ce0f0c3c6b6?auto=format&fit=crop&w=900&q=80", alt: "Kids studs" },
          { src: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80", alt: "Kids bracelet" },
          { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80", alt: "Kids chain" },
          { src: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80", alt: "Kids ring" },
        ],
        storyTitle: "Little Sparkles, Big Smiles",
        storyLead: "Made for Playful Moments",
        storyBody: "Thoughtfully crafted mini pieces with safe finishes and lightweight comfort, designed to celebrate milestones and everyday joy.",
        storyImage: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
        storyImageAlt: "Smiling child portrait",
      }}
      bentoEyebrow="Atelier · Kids"
      bentoHeading="Tiny treasures, big care"
      bentoTiles={[
        { type: "image", title: "First Studs", image: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?auto=format&fit=crop&w=1000&q=80", body: "Hypoallergenic, secure backings.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "925", title: "Skin-safe silver" },
        { type: "image", title: "Charms", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" },
        { type: "text", title: "Designed for little hands", body: "Smooth edges, lightweight, secure clasps — and built to be re-sized as they grow." },
        { type: "cta", title: "Naming-day gifts", body: "Personalised pieces, ready to box.", ctaLabel: "Explore", ctaHref: "/shop/kids" },
        { type: "stat", stat: "0–12", title: "Years" },
      ]}
      carouselEyebrow="For little ones"
      carouselTitle="The kids' edit"
      carouselCta="See all kids"
      carouselHref="/shop/kids"
      gridEyebrow="Curated"
      gridHeading="Kids pieces"
      gridHidePrice
      filters={["All", "Studs", "Charms", "Bracelets", "Pendants"]}
    />
  ),
});
