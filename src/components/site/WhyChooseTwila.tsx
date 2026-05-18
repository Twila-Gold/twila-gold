import { Gem, ShieldCheck, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  {
    icon: Gem,
    title: "Exceptional Craftsmanship",
    body: "Each piece is thoughtfully designed and expertly crafted with attention to every detail, ensuring elegance, precision, and lasting beauty.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic & Certified Quality",
    body: "We use only high-quality, certified materials to create jewelry that reflects true value, purity, and trust you can rely on.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    body: "We focus on understanding your style and preferences, offering a more personal and meaningful shopping experience every time.",
  },
];

export function WhyChooseTwila() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
      <div className="text-center mb-12 reveal">
        <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Why Choose TWILA</div>
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)]">Made To Be Kept</h2>
        <p className="mt-3 text-sm md:text-base text-[var(--navy)]/70 max-w-2xl mx-auto">
          A modern house of fine jewellery built on craft discipline, transparent sourcing, and enduring service.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <article
              key={r.title}
              className="reveal glass-light glass-gold-border rounded-2xl p-6 md:p-7 text-center card-lift"
              data-delay={i * 70}
            >
              <div className="mx-auto w-14 h-14 rounded-full border border-[color:color-mix(in_oklab,var(--gold)_65%,transparent)] bg-white/80 flex items-center justify-center text-gold">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[var(--navy-deep)]">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--navy)]/70">{r.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}