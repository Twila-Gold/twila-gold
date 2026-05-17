import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 lg:px-10 pb-20">
      <div className="glass-light glass-gold-border rounded-2xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] tracking-[0.3em] uppercase text-[var(--navy)]/70">
          <span>BIS Hallmarked</span>
          <span>IGI Certified</span>
          <span>Lifetime Care</span>
          <span>Conflict-Free</span>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase bg-navy text-white px-6 py-3 rounded-full hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition"
        >
          Book a Private Viewing <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}
