import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export interface BentoTile {
  type: "image" | "text" | "stat" | "cta";
  title?: string;
  body?: string;
  image?: string;
  stat?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** tailwind grid-span classes, e.g. "md:col-span-2 md:row-span-2" */
  span?: string;
}

interface Props {
  eyebrow?: string;
  heading?: string;
  tiles: BentoTile[];
}

export function BentoShowcase({ eyebrow, heading, tiles }: Props) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
      {(eyebrow || heading) && (
        <div className="mb-10 max-w-2xl reveal">
          {eyebrow && (
            <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">
              {eyebrow}
            </div>
          )}
          {heading && <h2 className="font-serif text-4xl md:text-5xl">{heading}</h2>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4 md:gap-5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`reveal glass-light glass-gold-border rounded-2xl overflow-hidden card-lift relative group ${
              t.span ?? ""
            }`}
            data-delay={i * 60}
          >
            {t.type === "image" && t.image && (
              <>
                <img
                  src={t.image}
                  alt={t.title ?? ""}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover shimmer-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent" />
                {t.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-serif text-2xl md:text-3xl">{t.title}</h3>
                    {t.body && <p className="text-sm text-white/80 mt-1 line-clamp-2">{t.body}</p>}
                  </div>
                )}
              </>
            )}

            {t.type === "text" && (
              <div className="h-full p-6 flex flex-col justify-between">
                <div>
                  {t.title && (
                    <h3 className="font-serif text-2xl text-[var(--navy-deep)]">{t.title}</h3>
                  )}
                  {t.body && (
                    <p className="text-sm text-[var(--navy)]/70 mt-3 leading-relaxed">{t.body}</p>
                  )}
                </div>
              </div>
            )}

            {t.type === "stat" && (
              <div className="h-full p-6 flex flex-col justify-center items-start">
                <div className="font-serif text-6xl md:text-7xl text-[var(--navy-deep)] leading-none">
                  {t.stat}
                </div>
                {t.title && (
                  <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-[var(--navy)]/70">
                    {t.title}
                  </div>
                )}
                {t.body && <p className="text-sm text-[var(--navy)]/70 mt-2">{t.body}</p>}
              </div>
            )}

            {t.type === "cta" && (
              <div className="h-full p-6 flex flex-col justify-between bg-navy text-white">
                <div>
                  {t.title && <h3 className="font-serif text-2xl">{t.title}</h3>}
                  {t.body && <p className="text-sm text-white/75 mt-2">{t.body}</p>}
                </div>
                {t.ctaHref && t.ctaLabel && (
                  <Link
                    to={t.ctaHref}
                    className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.28em] uppercase text-gold hover:text-white transition"
                  >
                    {t.ctaLabel} <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
