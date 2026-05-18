import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FullWidthSplitCarousel } from "@/components/site/FullWidthSplitCarousel";
import { ProductGlassGrid } from "@/components/site/ProductGlassGrid";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyChooseTwila } from "@/components/site/WhyChooseTwila";
import { CAROUSEL_ITEMS, HERO_VIDEO, HERO_VIDEO_FALLBACK, HERO_VIDEO_SECOND, PRODUCTS } from "@/data/site";
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

      {/* FIND YOUR EDIT */}
      <section className="bg-[#ededed]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-12 md:py-16">
          <div className="reveal grid overflow-hidden rounded-sm md:grid-cols-2">
            <div className="bg-[#efefef] px-7 py-10 md:px-14 md:py-16 lg:px-20 lg:py-20 text-[#131313]">
              <div className="text-[10px] tracking-[0.32em] uppercase text-black/55 mb-8">Find Your Edit</div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02]">
                Timeless
                <br />
                Elegance, Crafted
                <br />
                for You
              </h2>

              <div className="mt-10">
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">Shine Beyond Ordinary</h3>
                <p className="mt-4 text-lg leading-relaxed text-black/80 max-w-[46ch]">
                  Discover the perfect blend of artistry and sophistication with our exclusive jewelry collection.
                  Each piece is designed to reflect grace, beauty, and individuality, making every moment you
                  wear it truly unforgettable.
                </p>
              </div>

              <div className="my-10 h-px w-full bg-black/35" />

              <div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">Pure. Elegant. Timeless.</h3>
                <p className="mt-4 text-lg leading-relaxed text-black/80 max-w-[46ch]">
                  Our craftsmanship combines tradition with modern aesthetics, ensuring every detail shines with
                  precision. Whether it&apos;s a statement piece or everyday elegance, we create jewelry that complements
                  your unique style.
                </p>
              </div>
            </div>

            <div className="relative min-h-[460px] md:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
                alt="Model wearing fine jewellery"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(120,0,0,0.35)] to-[rgba(95,0,0,0.08)]" />
            </div>
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
