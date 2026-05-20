import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BANNERS, CAROUSEL_ITEMS, SHOP_AUDIENCES, gentsImg, ladiesImg, kidsImg } from "@/data/site";
import { ChevronRight, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const FLIP_CARDS = [
  {
    image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779276295/boy_jm5i5s.png",
    title: "Modern Heirlooms",
    subtitle: "Designed Today, Cherished Forever",
    backTitle: "Legacy for Him",
    backDesc: "Crafted for the modern gentleman, Twila Gold & Diamonds offers bold designs that reflect strength and sophistication. Each piece is a statement of confidence, blending timeless elegance with contemporary style.",
    href: "/shop/gents",
  },
  {
    image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779276295/lady_eyi2bp.png",
    title: "Grace & Gold",
    subtitle: "Elegance Crafted for Her.",
    backTitle: "Feminine Classics",
    backDesc: "Celebrate grace and beauty with Twila Gold & Diamonds' exquisite collection for women. Designed to shine with every moment, our jewels embody elegance, charm, and timeless allure.",
    href: "/shop/ladies",
  },
  {
    image: "https://res.cloudinary.com/dbntg4yrs/image/upload/v1779276295/kid_pi4mqd.png",
    title: "Little Charms",
    subtitle: "Tiny Treasures, Endless Smiles",
    backTitle: "Tiny Classics",
    backDesc: "Delight in the innocence of childhood with Twila Gold & Diamonds' adorable and safe jewelry collection. Each piece is thoughtfully crafted to add a touch of sparkle to your little one's precious moments.",
    href: "/shop/kids",
  },
];

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
              <img src={a.image} alt={a.label} className="absolute position-top inset-0 w-full h-full object-cover object-top shimmer-img" loading="lazy" />
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

      {/* Flip cards — 1 big + 2 small */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-24">
        <div className="reveal text-center mb-12">
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Our Specialities</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)]">Crafted for Every Moment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[580px]">

          {/* ── Big card (Gold) ── */}
          <div className="reveal md:col-span-3 h-72 md:h-full [perspective:1100px]">
            <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out hover:[transform:rotateY(180deg)]">

              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] glass-light glass-gold-border rounded-2xl overflow-hidden">
                <img src={FLIP_CARDS[0].image} alt={FLIP_CARDS[0].title} loading="lazy" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-3xl md:text-4xl">{FLIP_CARDS[0].title}</h3>
                  <p className="text-sm text-white/80 mt-1">{FLIP_CARDS[0].subtitle}</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl glass-light glass-gold-border p-8 flex flex-col items-center justify-center text-center gap-5">
                <div className="w-8 h-px bg-[var(--gold)]" />
                <h3 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)]">{FLIP_CARDS[0].backTitle}</h3>
                <p className="text-base text-[var(--navy)]/70 leading-relaxed">{FLIP_CARDS[0].backDesc}</p>
              </div>

            </div>
          </div>

          {/* ── Two small cards ── */}
          <div className="md:col-span-2 grid grid-rows-2 gap-4">
            {FLIP_CARDS.slice(1).map((card, i) => (
              <div key={card.title} className="reveal h-64 md:h-auto [perspective:1100px]" data-delay={i * 100 + 80}>
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out hover:[transform:rotateY(180deg)]">

                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] glass-light glass-gold-border rounded-2xl overflow-hidden">
                    <img src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-serif text-2xl">{card.title}</h3>
                      <p className="text-sm text-white/80 mt-0.5">{card.subtitle}</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl glass-light glass-gold-border px-5 py-5 flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-6 h-px bg-[var(--gold)]" />
                    <h4 className="font-serif text-2xl text-[var(--navy-deep)]">{card.backTitle}</h4>
                    <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{card.backDesc}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

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
                  <img src={it.image} alt={it.title} loading="lazy" className="w-full h-full object-cover object-top shimmer-img" />
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
