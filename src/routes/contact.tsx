import { useState } from "react";
import { PageBanner } from "@/components/site/PageBanner";
import { BANNERS, diamondImg } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Phone, Check } from "lucide-react";

export function ContactPage() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const b = BANNERS.contact;

  return (
    <div ref={ref}>
      <PageBanner title={b.title} subtitle={b.subtitle} image={b.image} crumbs={b.crumbs} />

      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 grid lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Form */}
        <form
          className="lg:col-span-3 reveal glass-light glass-gold-border rounded-2xl p-7 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Write to us</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)]">
            Speak with an advisor
          </h2>
          <p className="text-[var(--navy)]/70 mt-3 text-sm">
            Tell us a little about what you're looking for. We typically respond within one business day.
          </p>

          {sent ? (
            <div className="mt-8 flex items-center gap-3 p-5 rounded-xl bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--navy-deep)]">
              <Check className="text-[var(--gold)]" />
              <div>
                <div className="font-medium">Thank you — your message is on its way.</div>
                <div className="text-sm opacity-75">An advisor will be in touch shortly.</div>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-5">
              <Field label="Your name">
                <input required className="ti" placeholder="Full name" />
              </Field>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Email">
                  <input required type="email" className="ti" placeholder="you@example.com" />
                </Field>
                <Field label="Phone">
                  <input className="ti" placeholder="+91 …" />
                </Field>
              </div>
              <Field label="Message">
                <textarea required rows={5} className="ti resize-none" placeholder="Tell us a little about what you're looking for…" />
              </Field>
              <button
                type="submit"
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition"
              >
                Send message
              </button>
            </div>
          )}
        </form>

        {/* Side */}
        <div className="lg:col-span-2 grid gap-5">
          <div className="reveal glass-light glass-gold-border rounded-2xl overflow-hidden">
            <img
              src={diamondImg(3)}
              alt="TWILA boutique interior"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">The Boutique</div>
              <h3 className="font-serif text-2xl text-[var(--navy-deep)]">Bengaluru Flagship</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--navy)]/80">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /> 14, Lavelle Road · Bengaluru 560001</li>
                <li className="flex items-start gap-3"><Phone size={16} className="text-gold mt-0.5" /> +91 80 0000 0000</li>
                <li className="flex items-start gap-3"><Mail size={16} className="text-gold mt-0.5" /> concierge@twila.com</li>
              </ul>
            </div>
          </div>

          <div className="reveal glass-light glass-gold-border rounded-2xl p-6">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">Hours</div>
            <h3 className="font-serif text-xl text-[var(--navy-deep)]">By appointment & walk-in</h3>
            <div className="mt-3 text-sm text-[var(--navy)]/75 space-y-1">
              <div>Mon – Sat · 11:00 am – 8:00 pm</div>
              <div>Sun · By appointment only</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ti {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(11,27,58,0.12);
          border-radius: 12px;
          font: inherit;
          color: var(--navy-deep);
          outline: none;
          transition: border-color 200ms, box-shadow 200ms, background 200ms;
        }
        .ti:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--gold) 20%, transparent);
          background: white;
        }
        .ti::placeholder { color: rgba(11,27,58,0.4); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--navy)]/65 mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
