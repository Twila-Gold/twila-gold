import { CategoryPage } from "@/components/site/CategoryPage";
import { goldImg, silverImg } from "@/data/site";

export function KidsPage() {
  return (
    <CategoryPage
      dataKey="kids"
      bannerHeight="70vh"
      disableBento
      disableCarousel
      showcase={{
        title: "Exclusive Kids Jewels",
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
        { type: "image", title: "Charms", image: silverImg(2) },
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
      gridShowContactActions
      filters={["All", "Studs", "Charms", "Bracelets", "Pendants"]}
    />
  );
}
