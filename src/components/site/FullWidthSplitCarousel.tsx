import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export interface CarouselItem {
  title: string;
  image: string;
  meta: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  items: CarouselItem[];
  bgClassName?: string;
  carouselOnly?: boolean;
}

export function FullWidthSplitCarousel({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  items,
  bgClassName = "bg-navy",
  carouselOnly = false,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const ref = useReveal<HTMLElement>();

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className={`relative ${bgClassName} text-white overflow-hidden`}
      aria-label={title}
    >
      {/* decorative curves */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/3 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-3xl" />

      <div className={`relative mx-auto max-w-[1400px] pl-5 lg:pl-10 pr-0 py-20 lg:py-28 ${carouselOnly ? "" : "grid lg:grid-cols-12 gap-10 items-center"} overflow-x-clip`}>
        {/* LEFT */}
        {!carouselOnly && (
          <div className="lg:col-span-4 pr-5 lg:pr-0 reveal">
            {eyebrow && (
              <div className="text-[11px] tracking-[0.35em] uppercase text-gold/80 mb-4">
                {eyebrow}
              </div>
            )}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {title}
            </h2>
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.28em] uppercase border-b border-white/40 pb-1 hover:text-gold hover:border-gold transition"
            >
              {ctaLabel} <ChevronRight size={16} />
            </Link>
          </div>
        )}

        {/* RIGHT carousel */}
        <div className={`${carouselOnly ? "" : "lg:col-span-8"} relative`}>
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 pr-10 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((it, i) => (
              <article
                data-card
                key={it.title + i}
                className="snap-start shrink-0 w-[280px] md:w-[320px] glass-light card-lift rounded-3xl overflow-hidden text-[var(--navy-deep)] reveal"
                data-delay={i * 70}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/10 group">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    className="w-full h-full object-cover shimmer-img"
                  />
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

          {/* Controls */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous collections"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-dark items-center justify-center hover:text-gold transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next collections"
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[var(--navy-deep)] items-center justify-center shadow-xl hover:bg-gold hover:text-white transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
