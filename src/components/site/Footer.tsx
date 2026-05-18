import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import twilaLogo from "@/assets/Twila-Logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img
            src={twilaLogo}
            alt="TWILA Gold Diamonds Platinum"
            className="h-20 md:h-36 w-auto"
            loading="lazy"
          />
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4">About</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-gold">The House</Link></li>
            <li><Link to="/" className="hover:text-gold">Craftsmanship</Link></li>
            <li><Link to="/" className="hover:text-gold">Sustainability</Link></li>
            <li><Link to="/" className="hover:text-gold">Press</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-gold">Care Guide</Link></li>
            <li><Link to="/" className="hover:text-gold">Sizing</Link></li>
            <li><Link to="/" className="hover:text-gold">Returns</Link></li>
            <li><Link to="/" className="hover:text-gold">Private Viewing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>concierge@twila.com</li>
            <li>+91 80 0000 0000</li>
            <li>Mon – Sat · 11am – 8pm</li>
          </ul>
          <div className="flex gap-3 mt-5 text-white/70">
            <Instagram size={18} className="hover:text-gold transition" />
            <Facebook size={18} className="hover:text-gold transition" />
            <Twitter size={18} className="hover:text-gold transition" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-5 text-xs text-white/55 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 TWILA. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">Crafted with care · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
