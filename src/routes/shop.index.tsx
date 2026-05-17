import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { FullWidthSplitCarousel } from "@/components/site/FullWidthSplitCarousel";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BANNERS, CAROUSEL_ITEMS, SHOP_AUDIENCES } from "@/data/site";
import { ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function ShopHub() {
  const ref = useReveal<HTMLDivElement>();
  const b = BANNERS.shop;
  return (
    <div ref={ref}>
      <PageBanner title={b.title} subtitle={b.subtitle} image={b.image} crumbs={b.crumbs} height="60vh" />

      {/* 3 audience hero cards */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 pt-8 pb-4">
        <div className="grid md:grid-cols-3 gap-5">
          {SHOP_AUDIENCES.map((a, i) => (
            <Link
              key={a.key}
              to={a.href}
              className="reveal group relative rounded-2xl overflow-hidden aspect-[4/5] card-lift"
              data-delay={i * 80}
            >
              <img src={a.image} alt={a.label} className="absolute inset-0 w-full h-full object-cover shimmer-img" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/15 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <div className="font-serif text-3xl tracking-[0.18em] uppercase">{a.label}</div>
                <div className="mt-2 text-xs tracking-[0.28em] uppercase text-gold inline-flex items-center gap-1">
                  Explore <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FullWidthSplitCarousel
        eyebrow="From the boutique"
        title="Staff picks & new arrivals"
        ctaLabel="See all collections"
        ctaHref="/shop"
        items={CAROUSEL_ITEMS.shop}
        carouselOnly
      />

      <TrustStrip />
    </div>
  );
}
