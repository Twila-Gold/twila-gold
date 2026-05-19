import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BANNERS, HERO_VIDEO_SECOND, PRODUCTS } from "@/data/site";


// Use only categories present in the silver dataset
const filters = ["All", "Pendant", "Waist Chain", "Anklet", "Ring", "Chain"];

export function SilverJewelsPage() {
  const banner = BANNERS.silver;
  const products = PRODUCTS.silver;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    // Match only the product type (before '·'), case-insensitive
    return products.filter((p) => {
      const type = p.tag.split("·")[0].trim().toLowerCase();
      return type === activeFilter.toLowerCase();
    });
  }, [activeFilter, products]);

  return (
    <>
      <section className="relative w-full overflow-hidden md:h-[80vh]">
        <img
          src={banner.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <video
          className="relative block w-full h-auto object-cover md:absolute md:inset-0 md:w-full md:h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={banner.image}
        >
          <source src={HERO_VIDEO_SECOND} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/75" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1400px] px-5 lg:px-10 pb-10">
          {banner.crumbs.length > 0 && (
            <nav className="text-xs text-white/75 tracking-[0.2em] uppercase mb-3">
              {banner.crumbs.map((c, i) => (
                <span key={c}>
                  {i === 0 ? (
                    <Link to="/" className="hover:text-gold">{c}</Link>
                  ) : (
                    <span className={i === banner.crumbs.length - 1 ? "text-gold" : ""}>{c}</span>
                  )}
                  {i < banner.crumbs.length - 1 && <span className="mx-2 opacity-60">›</span>}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl">{banner.title}</h1>
          {banner.subtitle && (
            <p className="text-white/80 mt-3 max-w-xl text-base md:text-lg">{banner.subtitle}</p>
          )}
        </div>
      </section>

      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Products</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)] leading-tight">
              Discover Silver Collections
            </h2>
            <p className="mt-4 text-[var(--navy)]/75 leading-relaxed">
              Crafted for Everyday Elegance
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
            {filters.map((name) => (
              <button
                key={name}
                onClick={() => setActiveFilter(name)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs tracking-[0.22em] uppercase border transition ${
                  activeFilter === name
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-[var(--navy)]/75 border-black/10 hover:border-[var(--gold)] hover:text-[var(--navy-deep)]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((p) => (
              <article key={p.id} className="bg-white border border-black/8 rounded-xl overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.onerror = null;
                      img.src = banner.image;
                    }}
                  />
                  {p.isNew && (
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-[var(--gold)] text-[var(--navy-deep)] px-2.5 py-1 rounded-full font-semibold">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl text-[var(--navy-deep)] leading-tight">{p.name}</h3>
                  <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[var(--navy)]/55">{p.tag.split("·")[0].trim()}</div>
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
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-10 text-center text-sm tracking-[0.08em] text-[var(--navy)]/65">
              No products available in this filter yet.
            </div>
          )}
        </div>
      </section>

      <TrustStrip />
    </>
  );
}
