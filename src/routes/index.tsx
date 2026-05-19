import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Ear, Gem, Sparkles, X } from "lucide-react";
import { ProductGlassGrid } from "@/components/site/ProductGlassGrid";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyChooseTwila } from "@/components/site/WhyChooseTwila";
import { diamondImg, HERO_VIDEO, HERO_VIDEO_FALLBACK, HERO_VIDEO_SECOND, ladiesImg, PRODUCTS } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

export function HomePage() {
  const ref = useReveal<HTMLDivElement>();
  const [heroVideoSrc, setHeroVideoSrc] = useState(HERO_VIDEO);
  const galleryItems = [
    {
      title: "Bold Elegance",
      image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779101568/ring_pve2na.png",
      alt: "Close-up of a gemstone ring",
    },
    {
      title: "Timeless Beauty",
      image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779101566/chain_bsqwse.png",
      alt: "Traditional gold necklace",
    },
    {
      title: "Everyday Grace",
      image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779101572/neclase_bruf4x.png",
      alt: "Delicate pendant necklace",
    },
    {
      title: "Tiny Treasures",
      image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779101569/kid_la1pgw.png",
      alt: "Child wearing a fine necklace",
    },
  ];
  const clarityCollections = [
    { label: "Gold", to: "/gold-jewels" },
    { label: "Diamond", to: "/diamond-jewels" },
    { label: "Platinum", to: "/platinum-jewels" },
    { label: "Silver", to: "/silver-jewels" },
  ];
  const clarityHighlights = [
    {
      title: "Find Your Shine",
      body: "Discover finely crafted jewelry designed to reflect your unique style with grace and sophistication.",
      image: ladiesImg(7),
      alt: "Close-up of a ring with warm golden reflections",
      to: "/shop/ladies",
    },
    {
      title: "Dreams In Detail",
      body: "Experience exquisite designs that celebrate beauty, detail, and the art of fine jewelry.",
      image: diamondImg(1),
      alt: "Portrait showcasing diamond jewellery styling",
      to: "/diamond-jewels",
    },
  ];
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(1);
  const [openGalleryIndex, setOpenGalleryIndex] = useState<number | null>(null);

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
                src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779101175/section2_ziegnn.webp?auto=format&fit=crop&w=1600&q=80"
                alt="Model wearing fine jewellery"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(120,0,0,0.35)] to-[rgba(95,0,0,0.08)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-3 md:px-5 lg:px-10 py-16 md:py-20">
          <div className="reveal text-center">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-white">
              Discover Your Signature Shine
            </h2>
            <p className="mt-4 text-base md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed">
              Explore our latest designs crafted to elevate your everyday and special moments.
            </p>
          </div>

          <div
            className="mt-12 hidden md:grid gap-1 transition-all duration-500"
            style={{
              gridTemplateColumns: galleryItems
                .map((_, i) => (i === activeGalleryIndex ? "2.2fr" : "1fr"))
                .join(" "),
            }}
          >
            {galleryItems.map((item, i) => (
              <button
                type="button"
                key={item.title}
                onMouseEnter={() => setActiveGalleryIndex(i)}
                onFocus={() => setActiveGalleryIndex(i)}
                onClick={() => setOpenGalleryIndex(i)}
                className="group relative h-[420px] overflow-hidden text-left"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--navy)] text-2xl leading-none">
                      +
                    </span>
                    <span className="font-medium text-lg md:text-2xl">{item.title}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2 md:hidden">
            {galleryItems.map((item, i) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setOpenGalleryIndex(i)}
                className="relative h-52 overflow-hidden text-left"
              >
                <img src={item.image} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {openGalleryIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/92 p-4 md:p-8">
          <button
            type="button"
            onClick={() => setOpenGalleryIndex(null)}
            className="absolute right-4 top-4 md:right-8 md:top-8 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white hover:border-white"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          <div className="mx-auto max-w-[1400px] h-full flex flex-col gap-5 pt-12 md:pt-14">
            <div className="flex-1 overflow-auto rounded-md border border-white/15 bg-black/35 flex items-center justify-center">
              <img
                src={galleryItems[openGalleryIndex].image}
                alt={galleryItems[openGalleryIndex].alt}
                className="mx-auto block h-full w-auto max-w-none object-contain"
              />
            </div>

            <div className="overflow-x-auto">
              <div className="flex gap-3 min-w-max pb-1">
                {galleryItems.map((item, i) => (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => setOpenGalleryIndex(i)}
                    className={`relative h-20 w-28 overflow-hidden rounded border transition ${
                      i === openGalleryIndex ? "border-[var(--gold)]" : "border-white/30"
                    }`}
                  >
                    <img src={item.image} alt={item.alt} className="absolute inset-0 h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-8 md:py-12">
          <div className="border-y border-black/30 py-8 md:py-12">
            <div className="grid gap-6 md:grid-cols-3 md:gap-10 text-center text-black/90">
              <div className="reveal reveal-right reveal-half care-card mx-auto max-w-sm">
                <Gem size={40} strokeWidth={1.2} className="care-icon mx-auto text-[var(--gold)]" />
                <h3 className="mt-2 font-serif text-xl md:text-2xl leading-snug">Ring Sizer</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-black/75">
                  A ring is a crafted piece of jewelry worn on the finger, symbolizing elegance,
                  style, and meaningful milestones.
                </p>
              </div>

              <div className="reveal reveal-right reveal-half care-card mx-auto max-w-sm" data-delay={90}>
                <Sparkles size={40} strokeWidth={1.2} className="care-icon mx-auto text-[var(--gold)]" />
                <h3 className="mt-2 font-serif text-xl md:text-2xl leading-snug">Jewellery Care</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-black/75">
                  Proper jewelry care preserves the beauty, durability, and lasting brilliance of your
                  precious pieces.
                </p>
              </div>

              <div className="reveal reveal-right reveal-half care-card mx-auto max-w-sm" data-delay={180}>
                <Ear size={40} strokeWidth={1.2} className="care-icon mx-auto text-[var(--gold)]" />
                <h3 className="mt-2 font-serif text-xl md:text-2xl leading-snug">Piercing Aftercare</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-black/75">
                  Proper piercing aftercare ensures safe healing while maintaining the beauty and
                  integrity of your jewelry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGlassGrid
        eyebrow="Just in"
        heading="Featured pieces"
        products={[...PRODUCTS.diamond.slice(0, 4), ...PRODUCTS.gold.slice(0, 4)]}
        hidePrice
      />

      <WhyChooseTwila />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 md:py-24">
          <div className="reveal text-center">
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.98] text-[var(--navy-deep)]">
              Crystal Clear Charm
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm md:text-lg leading-relaxed text-[var(--navy)]/72">
              Adorn yourself with the refined brilliance of Twila, where each piece is thoughtfully
              crafted to embody timeless elegance and enduring sophistication, designed to be
              treasured for a lifetime.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {clarityCollections.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full bg-[var(--navy)] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-[var(--navy-deep)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            {clarityHighlights.map((item, index) => (
              <Link
                key={item.title}
                to={item.to}
                className="reveal group relative isolate block min-h-[360px] overflow-hidden border border-black/10 bg-[#ece7df] p-5 md:min-h-[430px] md:p-6"
                data-delay={index * 90}
              >
                <div className="relative h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,34,0.12)_0%,rgba(18,13,34,0.22)_100%)]" />
                  <div className="absolute inset-5 bg-[rgba(28,19,12,0.38)] transition duration-500 group-hover:bg-[rgba(28,19,12,0.46)] md:inset-6" />

                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                    <div className="max-w-[24rem]">
                      <h3 className="font-serif text-3xl md:text-5xl italic leading-none drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="mx-auto mt-4 max-w-[28ch] text-sm md:text-lg leading-relaxed text-white/90">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
