import { PageBanner } from "@/components/site/PageBanner";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import { BentoShowcase, type BentoTile } from "@/components/site/BentoShowcase";
import {
  FullWidthSplitCarousel,
  type CarouselItem,
} from "@/components/site/FullWidthSplitCarousel";
import { ProductGlassGrid } from "@/components/site/ProductGlassGrid";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BANNERS, CAROUSEL_ITEMS, PRODUCTS } from "@/data/site";

interface Cfg {
  dataKey: keyof typeof PRODUCTS & keyof typeof BANNERS & keyof typeof CAROUSEL_ITEMS;
  bentoEyebrow: string;
  bentoHeading: string;
  bentoTiles: BentoTile[];
  carouselEyebrow: string;
  carouselTitle: string;
  carouselCta: string;
  carouselHref: string;
  gridEyebrow: string;
  gridHeading: string;
  filters?: string[];
  gridFilterMap?: Record<string, string>;
  gridVariant?: "glass" | "catalog";
  gridHidePrice?: boolean;
  gridShowContactActions?: boolean;
  bannerVideo?: string;
  bannerHeight?: string;
  bannerMobileHeight?: string;
  bannerObjectPosition?: string;
  disableBento?: boolean;
  disableCarousel?: boolean;
  showcase?: {
    title: string;
    collageImages?: { src: string; alt: string }[]; // Made optional
    storyTitle: string;
    storyLead: string;
    storyBody: string;
    storyImage: string;
    storyImageAlt: string;
  };
}

export function CategoryPage(cfg: Cfg) {
  const banner = BANNERS[cfg.dataKey];
  const carousel: CarouselItem[] = CAROUSEL_ITEMS[cfg.dataKey];
  const products = PRODUCTS[cfg.dataKey];
  const bannerHeightStyle = {
    "--banner-h": cfg.bannerHeight ?? "80vh",
  } as CSSProperties;

  return (
    <>
      {cfg.bannerVideo ? (
        <section
          className="relative w-full overflow-hidden md:h-[var(--banner-h)]"
          style={bannerHeightStyle}
        >
          <img
            src={banner.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <video
            className="relative block w-full h-auto object-cover md:absolute md:inset-0 md:w-full md:h-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={banner.image}
          >
            <source src={cfg.bannerVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/75" />
          <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1400px] px-5 lg:px-10 pb-10">
            {banner.crumbs.length > 0 && (
              <nav className="text-xs text-white/75 tracking-[0.2em] uppercase mb-3">
                {banner.crumbs.map((c, i) => (
                  <span key={c}>
                    {i === 0 ? (
                      <Link to="/" className="hover:text-gold">{c}</Link>
                    ) : (
                      <span className={i === banner.crumbs.length - 1 ? "text-gold" : ""}>{c}</span>
                    )}
                    {i < banner.crumbs.length - 1 && <span className="mx-2 opacity-60">›</span>}
                  </span>
                ))}
              </nav>
            )}
            <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl">{banner.title}</h1>
            {banner.subtitle && (
              <p className="text-white/80 mt-3 max-w-xl text-base md:text-lg">{banner.subtitle}</p>
            )}
          </div>
        </section>
      ) : (
        <PageBanner
          title={banner.title}
          subtitle={banner.subtitle}
          image={banner.image}
          crumbs={banner.crumbs}
          height={cfg.bannerHeight}
          mobileHeight={cfg.bannerMobileHeight}
          objectPosition={cfg.bannerObjectPosition}
        />
      )}
      {cfg.showcase && cfg.showcase.collageImages && (
        <section className="bg-[var(--cream)]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 md:py-20">
            <h2 className="text-center font-serif text-5xl md:text-6xl text-[var(--navy-deep)] mb-10 md:mb-12">
              {cfg.showcase.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {cfg.showcase.collageImages.slice(0, 6).map((item, i) => (
                <div key={item.src + i} className="overflow-hidden rounded-lg bg-black/5 aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-serif text-5xl md:text-6xl leading-[0.95] text-[var(--navy-deep)]">
                  {cfg.showcase.storyTitle}
                </h3>
                <h4 className="mt-8 font-serif text-3xl text-[var(--navy-deep)]">
                  {cfg.showcase.storyLead}
                </h4>
                <p className="mt-4 text-[var(--navy)]/75 leading-relaxed">
                  {cfg.showcase.storyBody}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl bg-black/5">
                <img
                  src={cfg.showcase.storyImage}
                  alt={cfg.showcase.storyImageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {!cfg.disableBento && (
        <BentoShowcase
          eyebrow={cfg.bentoEyebrow}
          heading={cfg.bentoHeading}
          tiles={cfg.bentoTiles}
        />
      )}
      {!cfg.disableCarousel && (
        <FullWidthSplitCarousel
          eyebrow={cfg.carouselEyebrow}
          title={cfg.carouselTitle}
          ctaLabel={cfg.carouselCta}
          ctaHref={cfg.carouselHref}
          items={carousel}
        />
      )}
      <ProductGlassGrid
        eyebrow={cfg.gridEyebrow}
        heading={cfg.gridHeading}
        products={products}
        filters={cfg.filters}
        filterMap={cfg.gridFilterMap}
        variant={cfg.gridVariant ?? "glass"}
        hidePrice={cfg.gridHidePrice ?? cfg.gridVariant === "catalog"}
        showContactActions={cfg.gridShowContactActions ?? cfg.gridVariant === "catalog"}
      />
      <TrustStrip />
    </>
  );
}
