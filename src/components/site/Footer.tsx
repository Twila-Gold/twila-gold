import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
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
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/gold-jewels" className="hover:text-gold">Gold Jewels</Link></li>
            <li><Link to="/diamond-jewels" className="hover:text-gold">Diamond Jewels</Link></li>
            <li><Link to="/platinum-jewels" className="hover:text-gold">Platinum Jewels</Link></li>
            <li><Link to="/silver-jewels" className="hover:text-gold">Silver Jewels</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>+91 85907 67916</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                Twila Gold and Diamonds LLP
                <br />
                Mavoor road Kerala
              </span>
            </li>
          </ul>
          <div className="flex gap-3 mt-5 text-white/70 pl-6 md:pl-0">
            <a
              href="https://instagram.com/twilagoldanddiamomds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/share/197tFKwwhr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="mailto:twilagoldanddiamonds@gmail.com"
              className="hover:text-gold transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-5 text-xs text-white/55 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-center">
          <span>© 2026 TWILA. All rights reserved.</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span>
            Designed and developed by{" "}
            <a
              href="https://www.mentecode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/80 hover:text-gold transition"
            >
              Mentecode
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
