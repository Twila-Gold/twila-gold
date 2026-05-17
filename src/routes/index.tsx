import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { FullWidthSplitCarousel } from "@/components/site/FullWidthSplitCarousel";
import { ProductGlassGrid } from "@/components/site/ProductGlassGrid";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyChooseTwila } from "@/components/site/WhyChooseTwila";
import { CAROUSEL_ITEMS, HERO_VIDEO, HERO_VIDEO_FALLBACK, HERO_VIDEO_SECOND, PRODUCTS, SHOP_AUDIENCES } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TWILA — Fine Jewellery in Gold, Diamonds & Platinum" },
      {
        name: "description",
        content:
          "Heirloom-grade fine jewellery. Explore TWILA's curated collections in 22K gold, certified diamonds, platinum and silver.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const ref = useReveal<HTMLDivElement>();
  const [heroVideoSrc, setHeroVideoSrc] = useState(HERO_VIDEO);

  const handleHeroVideoEnded = () => {
    if (heroVideoSrc !== HERO_VIDEO_SECOND) {
      setHeroVideoSrc(HERO_VIDEO_SECOND);
    }
  };

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ height: "min(86vh, 820px)" }}>
        <img
          src={HERO_VIDEO_FALLBACK}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <video
          key={heroVideoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop={heroVideoSrc === HERO_VIDEO_SECOND}
          playsInline
          preload="metadata"
          poster={HERO_VIDEO_FALLBACK}
          onEnded={handleHeroVideoEnded}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/55 via-[var(--navy-deep)]/30 to-[var(--navy-deep)]/85" />
        <div className="relative h-full mx-auto max-w-[1400px] px-5 lg:px-10 flex flex-col justify-end pb-16 md:pb-24 text-white">
          <div className="reveal max-w-3xl">
            <div className="text-[11px] tracking-[0.4em] uppercase text-gold mb-5 flex items-center gap-3">
              <Play size={12} /> The Spring Edit · 2026
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02]">
              Quietly precious.
              <br />
              Endlessly yours.
            </h1>
            <p className="mt-5 text-white/85 text-lg max-w-xl">
              A house of fine jewellery — where heirloom craftsmanship meets a
              calm, modern point of view.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] font-medium tracking-[0.18em] uppercase text-xs hover:bg-white transition"
              >
                Explore Collection <ChevronRight size={16} />
              </Link>
              <Link
                to="/gold-jewels"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white tracking-[0.18em] uppercase text-xs hover:border-gold hover:text-gold transition"
              >
                Discover Gold
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
        <div className="text-center reveal mb-12">
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Shop By</div>
          <h2 className="font-serif text-4xl md:text-5xl">Find your edit</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          {SHOP_AUDIENCES.map((a, i) => (
            <Link
              key={a.key}
              to={a.href}
              className="group reveal text-center"
              data-delay={i * 80}
            >
              <div className="overflow-hidden rounded-full aspect-square border border-black/10 group-hover:border-[var(--gold)] transition">
                <img
                  src={a.image}
                  alt={a.label}
                  loading="lazy"
                  className="w-full h-full object-cover shimmer-img"
                />
              </div>
              <div className="mt-4 font-serif text-xl md:text-2xl tracking-[0.18em] uppercase group-hover:text-gold transition">
                {a.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FullWidthSplitCarousel
        eyebrow="Featured journeys"
        title="Discover our collections"
        ctaLabel="See all collections"
        ctaHref="/shop"
        items={CAROUSEL_ITEMS.home}
        bgClassName="bg-navy"
      />

      <ProductGlassGrid
        eyebrow="Just in"
        heading="Featured pieces"
        products={[...PRODUCTS.diamond.slice(0, 4), ...PRODUCTS.gold.slice(0, 4)]}
        hidePrice
      />

      {/* Brand story strip */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
              The House of Twila
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Five generations of jewellers, one quiet philosophy.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Every piece is hand-finished in our Bengaluru atelier, with metals
              traceable to source and gemstones independently certified. We make
              jewellery you'll keep, repair, re-set and pass on.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.28em] uppercase border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition"
            >
              Visit the atelier <ChevronRight size={14} />
            </Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="rounded-2xl aspect-[3/4] object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1583937443351-d1ea0a1ebcfb?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="rounded-2xl aspect-[3/4] object-cover mt-10"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <WhyChooseTwila />

      <TrustStrip />
    </div>
  );
}
