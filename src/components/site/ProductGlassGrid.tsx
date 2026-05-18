import type { Product } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { useMemo, useState } from "react";

interface Props {
  eyebrow?: string;
  heading?: string;
  products: Product[];
  filters?: string[];
  filterMap?: Record<string, string>;
  hidePrice?: boolean;
  variant?: "glass" | "catalog";
  showContactActions?: boolean;
}

export function ProductGlassGrid({
  eyebrow,
  heading,
  products,
  filters,
  filterMap,
  hidePrice = false,
  variant = "glass",
  showContactActions = false,
}: Props) {
  const ref = useReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState(filters?.[0] ?? "All");

  const filteredProducts = useMemo(() => {
    if (!filters || filters.length === 0) return products;
    if (activeFilter === filters[0] || activeFilter.toLowerCase() === "all") return products;

    const rawNeedle = (filterMap?.[activeFilter] ?? activeFilter).toLowerCase();
    const candidates = [
      rawNeedle,
      rawNeedle.replace(/es$/, ""),
      rawNeedle.replace(/s$/, ""),
    ].filter(Boolean);

    return products.filter((p) => {
      const tag = p.tag.toLowerCase();
      return candidates.some((c) => tag.includes(c));
    });
  }, [activeFilter, filters, filterMap, products]);

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
      {(eyebrow || heading) && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 reveal">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">{eyebrow}</div>
            )}
            {heading && <h2 className="font-serif text-4xl md:text-5xl">{heading}</h2>}
          </div>
          {filters && (
              <div className={variant === "catalog" ? "flex flex-wrap gap-2 md:gap-3" : "glass-light glass-gold-border rounded-full p-1.5 inline-flex flex-wrap gap-1"}>
                {filters.map((f, i) => (
                <button
                  key={f}
                    onClick={() => setActiveFilter(f)}
                      className={
                        variant === "catalog"
                          ? `px-4 md:px-5 py-2 rounded-full text-xs tracking-[0.22em] uppercase border transition ${
                              activeFilter === f
                                ? "bg-navy text-white border-navy"
                                : "bg-white text-[var(--navy)]/75 border-black/10 hover:border-[var(--gold)] hover:text-[var(--navy-deep)]"
                            }`
                          : `px-4 py-1.5 text-xs uppercase tracking-[0.2em] rounded-full transition ${
                              activeFilter === f
                                ? "bg-navy text-white"
                                : "text-[var(--navy)]/75 hover:text-[var(--navy-deep)]"
                            }`
                      }
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {filteredProducts.map((p, i) => (
          <article
            key={p.id}
            className={variant === "catalog"
              ? "bg-white border border-black/8 rounded-xl overflow-hidden group"
              : "glass-light glass-gold-border rounded-2xl overflow-hidden card-lift group"
            }
            data-delay={i * 50}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className={variant === "catalog"
                  ? "w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  : "w-full h-full object-cover shimmer-img"
                }
              />
              {p.isNew && (
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-[var(--gold)] text-[var(--navy-deep)] px-2.5 py-1 rounded-full font-semibold">
                  New
                </span>
              )}
            </div>
            <div className="p-4 md:p-5">
              <h3 className="font-serif text-xl text-[var(--navy-deep)] leading-tight">{p.name}</h3>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--navy)]/60 mt-1">
                {p.tag.split("·")[0].trim()}
              </div>
              {showContactActions && (
                <>
                  <div className="mt-4 text-[10px] tracking-[0.24em] uppercase text-[var(--navy)]/60">
                    Enquire
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/918075403921"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-md text-[10px] tracking-[0.22em] uppercase bg-[var(--gold)] text-[var(--navy-deep)] hover:bg-[var(--navy)] hover:text-white transition"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="tel:+918075403921"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-md text-[10px] tracking-[0.22em] uppercase border border-black/15 text-[var(--navy)] hover:border-[var(--gold)] hover:text-[var(--navy-deep)] transition"
                    >
                      Call
                    </a>
                  </div>
                </>
              )}
              {!hidePrice && (
                <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between">
                  <span className="font-medium text-[var(--navy-deep)]">{p.price}</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold">View ›</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-10 text-center text-sm tracking-[0.08em] text-[var(--navy)]/65">
          No products available in this filter yet.
        </div>
      )}
    </section>
  );
}
