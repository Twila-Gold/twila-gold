import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BANNERS, CAROUSEL_ITEMS, SHOP_AUDIENCES } from "@/data/site";
import { ChevronRight, Sparkles } from "lucide-react";
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

      {/* Staff picks — static grid */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 lg:py-28">
          <div className="reveal mb-10">
            <div className="text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-3">From the boutique</div>
            <h2 className="font-serif text-4xl md:text-5xl">Staff picks &amp; new arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {CAROUSEL_ITEMS.shop.map((it, i) => (
              <article
                key={it.title}
                className="reveal glass-light card-lift rounded-3xl overflow-hidden text-[var(--navy-deep)]"
                data-delay={i * 70}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/10 group">
                  <img src={it.image} alt={it.title} loading="lazy" className="w-full h-full object-cover shimmer-img" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl">{it.title}</h3>
                  <div className="mt-3 pt-3 border-t border-black/10 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--navy)]/70">
                    <Sparkles size={13} className="text-[var(--gold)]" />
                    {it.meta}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />
    </div>
  );
}
