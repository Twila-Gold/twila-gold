import { CategoryPage } from "@/components/site/CategoryPage";

export function GentsPage() {
  return (
    <CategoryPage
      dataKey="gents"
      bannerHeight="70vh"
      disableBento
      disableCarousel
      showcase={{
        title: "Exclusive Gents Jewels",
        collageImages: [
          { src: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=900&q=80", alt: "Gents bracelet" },
          { src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80", alt: "Gents ring" },
          { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80", alt: "Gents stud" },
          { src: "https://images.unsplash.com/photo-1609245224731-2ce0f0c3c6b6?auto=format&fit=crop&w=900&q=80", alt: "Gents pin" },
          { src: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80", alt: "Gents chain" },
          { src: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80", alt: "Gents ring detail" },
        ],
        storyTitle: "Modern Masculinity, Redefined",
        storyLead: "Bold Elegance for the Modern Man",
        storyBody: "Our gents collection balances clean structure with rich detail - from everyday signets and chains to statement pieces designed to hold presence.",
        storyImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
        storyImageAlt: "Portrait of gentleman wearing jewellery",
      }}
      bentoEyebrow="Atelier · Gents"
      bentoHeading="Quietly powerful"
      bentoTiles={[
        { type: "image", title: "Signets", image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=1000&q=80", body: "Engraved by hand.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "PT950", title: "House standard" },
        { type: "image", title: "Chains", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80" },
        { type: "text", title: "Built for daily wear", body: "Tested clasps, weighted balance, finishes that age beautifully." },
        { type: "cta", title: "Bespoke signet", body: "Engraved with your monogram or family crest.", ctaLabel: "Enquire", ctaHref: "/contact" },
        { type: "stat", stat: "12+", title: "Bracelet silhouettes" },
      ]}
      carouselEyebrow="For him"
      carouselTitle="The gentleman's edit"
      carouselCta="See all gents"
      carouselHref="/shop/gents"
      gridEyebrow="Curated"
      gridHeading="Gents pieces"
      gridHidePrice
      filters={["All", "Rings", "Chains", "Bracelets", "Cufflinks"]}
    />
  );
}
