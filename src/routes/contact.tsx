import { useState } from "react";
import { PageBanner } from "@/components/site/PageBanner";
import { BANNERS, diamondImg } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Phone, Check, Loader2 } from "lucide-react";

const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string;

export function ContactPage() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const b = BANNERS.contact;

  return (
    <div ref={ref}>
      <PageBanner title={b.title} subtitle={b.subtitle} image={b.image} crumbs={b.crumbs} />

      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20 grid lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Form */}
        <form
          className="lg:col-span-3 reveal glass-light glass-gold-border rounded-2xl p-7 md:p-10"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");
            setLoading(true);
            const fd = new FormData(e.currentTarget);
            try {
              await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify({
                  name: fd.get("name"),
                  email: fd.get("email"),
                  phone: fd.get("phone"),
                  message: fd.get("message"),
                }),
              });
              setSent(true);
            } catch {
              setError("Something went wrong. Please try again or call us directly.");
            } finally {
              setLoading(false);
            }
          }}
        >
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Write to us</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)]">
            Connect With Our Jewellery Experts
          </h2>
          <p className="text-[var(--navy)]/70 mt-3 text-sm">
            Share your requirements with us and our team will assist you with the perfect selection. We usually respond within one business day.
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
                <input name="name" required className="ti" placeholder="Full name" />
              </Field>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Email">
                  <input name="email" required type="email" className="ti" placeholder="you@example.com" />
                </Field>
                <Field label="Phone">
                  <input name="phone" className="ti" placeholder="+91 …" />
                </Field>
              </div>
              <Field label="Message">
                <textarea name="message" required rows={2} className="ti resize-none" placeholder="Tell us a little about what you're looking for…" />
              </Field>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="self-start mt-2 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading && <Loader2 size={14} className="animate-spin" />}
                {loading ? "Sending…" : "Send message"}
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
              <ul className="mt-4 space-y-3 text-sm text-[var(--navy)]/80">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /> Twila Gold and Diamonds LLP
Mavoor road Kerala</li>
                <li className="flex items-start gap-3"><Phone size={16} className="text-gold mt-0.5" /> +91 80 7540 3921</li>
                <li className="flex items-start gap-3"><Mail size={16} className="text-gold mt-0.5" /> twilagoldanddiamonds@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal px-5 lg:px-10 pb-20 mx-auto max-w-[1400px]">
        <div className="glass-light glass-gold-border rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d244.56444692791635!2d75.78355648247405!3d11.25911871893334!3m2!1i1024!2i768!4f13.1!2m1!1s129%20Gudalur%20-%20Nilumbur%20-%20Kozhikode%20Rd%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sus!4v1779193960200!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Twila Gold and Diamonds location"
          />
        </div>
      </div>

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
