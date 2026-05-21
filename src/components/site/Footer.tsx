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
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="" className="hover:text-gold">Polish</Link></li>
            <li><Link to="" className="hover:text-gold">Stone and Settings</Link></li>
            <li><Link to="" className="hover:text-gold">Plating</Link></li>
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
          <div className="flex gap-3 mt-5 text-white/70">
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
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-5 text-xs text-white/55 flex flex-col md:flex-row justify-center gap-2 text-center">
          <span>© 2026 TWILA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
