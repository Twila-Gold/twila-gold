import { CategoryPage } from "@/components/site/CategoryPage";
import { gentsImg, PRODUCTS } from "@/data/site";

export function GentsPage() {
  const filters = [
    "All",
    ...new Set(PRODUCTS.gents.map((p) => p.tag.split("·")[0].trim())),
  ];

  return (
    <CategoryPage
      dataKey="gents"
      bannerHeight="70vh"
      disableBento
      disableCarousel
      showcase={{
        title: "Exclusive Gents Jewels",
        storyTitle: "Modern Masculinity, Redefined",
        storyLead: "Bold Elegance for the Modern Man",
        storyBody: "Our gents collection balances clean structure with rich detail - from everyday signets and chains to statement pieces designed to hold presence.",
        storyImage: gentsImg(6),
        storyImageAlt: "Portrait of gentleman wearing jewellery",
      }}
      bentoEyebrow="Atelier · Gents"
      bentoHeading="Quietly powerful"
      bentoTiles={[
        { type: "image", title: "Signets", image: gentsImg(0), body: "Engraved by hand.", span: "md:col-span-2 md:row-span-2" },
        { type: "stat", stat: "PT950", title: "House standard" },
        { type: "image", title: "Chains", image: gentsImg(4) },
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
      gridShowContactActions
      filters={filters}
    />
  );
}
