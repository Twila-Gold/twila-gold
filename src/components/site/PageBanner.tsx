import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: string[];
  height?: string;
  mobileHeight?: string;
}

export function PageBanner({
  title,
  subtitle,
  image,
  crumbs = [],
  height = "clamp(280px, 42vh, 460px)",
  mobileHeight = "clamp(220px, 34vh, 320px)",
}: PageBannerProps) {
  const bannerHeightStyle = {
    "--banner-h": height,
    "--banner-h-mobile": mobileHeight,
  } as CSSProperties;

  return (
    <section
      className="relative w-full h-[var(--banner-h-mobile)] md:h-[var(--banner-h)]"
      style={bannerHeightStyle}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/75" />
      <div className="relative h-full mx-auto max-w-[1400px] px-5 lg:px-10 flex flex-col justify-end pb-10">
        {crumbs.length > 0 && (
          <nav className="text-xs text-white/75 tracking-[0.2em] uppercase mb-3">
            {crumbs.map((c, i) => (
              <span key={c}>
                {i === 0 ? (
                  <Link to="/" className="hover:text-gold">{c}</Link>
                ) : (
                  <span className={i === crumbs.length - 1 ? "text-gold" : ""}>{c}</span>
                )}
                {i < crumbs.length - 1 && <span className="mx-2 opacity-60">›</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && (
          <p className="text-white/80 mt-3 max-w-xl text-base md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
