import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { NAV, SHOP_AUDIENCES } from "@/data/site";
import { ChevronDown, Menu, X } from "lucide-react";
import twilaLogo from "@/assets/Twila-Logo.jpg";

function Logo() {
  return (
    <Link to="/" className="shrink-0">
      <img
        src={twilaLogo}
        alt="TWILA Gold Diamonds Platinum"
        className="h-12 w-auto md:h-14"
        loading="eager"
      />
    </Link>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopMobile, setShopMobile] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 font-serif text-[13px] tracking-[0.18em] uppercase">
          {NAV.map((item) =>
            item.hasMenu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <Link
                  to={item.href}
                  className="nav-link flex items-center gap-1"
                  data-active={isActive(item.href)}
                >
                  {item.label}
                  <ChevronDown size={13} className="opacity-80" />
                </Link>
                {/* Mega menu */}
                <div
                  className={`absolute right-0 top-full pt-4 transition-all duration-200 ${
                    shopOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-navy-deep border border-white/10 shadow-2xl rounded-xl p-6 w-[640px] grid grid-cols-3 gap-5">
                    {SHOP_AUDIENCES.map((a) => (
                      <Link
                        key={a.key}
                        to={a.href}
                        className="group text-center"
                        onClick={() => setShopOpen(false)}
                      >
                        <div className="overflow-hidden rounded-full aspect-square mx-auto w-32 border border-white/15 group-hover:border-[var(--gold)] transition">
                          <img src={a.image} alt={a.label} className="w-full h-full object-cover shimmer-img" loading="lazy" />
                        </div>
                        <div className="mt-3 font-serif text-base tracking-[0.22em] uppercase group-hover:text-gold transition">
                          {a.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <nav className="px-5 py-4 flex flex-col font-serif uppercase tracking-[0.18em] text-sm">
            {NAV.map((item) =>
              item.hasMenu ? (
                <div key={item.href} className="border-b border-white/5">
                  <button
                    className="w-full flex items-center justify-between py-3"
                    onClick={() => setShopMobile((v) => !v)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={`transition ${shopMobile ? "rotate-180" : ""}`} />
                  </button>
                  {shopMobile && (
                    <div className="pb-4 space-y-3">
                      {SHOP_AUDIENCES.map((a) => (
                        <Link
                          key={a.key}
                          to={a.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <img src={a.image} alt="" className="w-12 h-12 rounded-full object-cover border border-white/15" />
                          <span>{a.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="py-3 border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                  data-active={isActive(item.href)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
