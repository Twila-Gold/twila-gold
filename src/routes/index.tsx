import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FullWidthSplitCarousel } from "@/components/site/FullWidthSplitCarousel";
import { ProductGlassGrid } from "@/components/site/ProductGlassGrid";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyChooseTwila } from "@/components/site/WhyChooseTwila";
import { CAROUSEL_ITEMS, HERO_VIDEO, HERO_VIDEO_FALLBACK, HERO_VIDEO_SECOND, PRODUCTS, SHOP_AUDIENCES } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

export function HomePage() {
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
      <section className="relative w-full overflow-hidden md:h-[80vh]">
        <img
          src={HERO_VIDEO_FALLBACK}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <video
          key={heroVideoSrc}
          className="relative block w-full h-auto object-cover md:absolute md:inset-0 md:w-full md:h-full"
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/75" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1400px] px-5 lg:px-10 pb-10">
          <div className="reveal max-w-3xl">
            
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(201,169,98,0.08)_100%)]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 md:py-24">
          <div className="reveal grid gap-8 border-y border-black/8 py-10 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:items-end">
            <div>
              <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Shop By</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none">
                Find your edit
              </h2>
            </div>
            <p className="max-w-xl text-sm md:text-base text-[var(--navy)]/70 leading-relaxed md:justify-self-end">
              Curated wardrobes for every signature. Explore distinct selections shaped for daily ritual,
              occasion dressing, and keepsakes made to stay close.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:grid-rows-2">
            {SHOP_AUDIENCES.map((a, i) => (
              <Link
                key={a.key}
                to={a.href}
                className={`group reveal relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_70px_-40px_rgba(11,27,58,0.45)] ${
                  i === 0 ? "min-h-[480px] lg:row-span-2" : "min-h-[230px]"
                }`}
                data-delay={i * 90}
              >
                <img
                  src={a.image}
                  alt={a.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,27,58,0.88)] via-[rgba(11,27,58,0.28)] to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 md:p-8 text-white">
                  <div className="text-[10px] tracking-[0.34em] uppercase text-white/70">
                    {i === 0 ? "Signature Edit" : "Curated Wardrobe"}
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em]">
                        {a.label}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm md:text-base text-white/78 leading-relaxed">
                        {i === 0
                          ? "A refined edit of statement pieces and everyday signatures designed to anchor a jewellery wardrobe."
                          : "Polished selections composed with a lighter, more focused point of view."}
                      </p>
                    </div>
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 transition group-hover:border-[var(--gold)] group-hover:text-gold">
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
