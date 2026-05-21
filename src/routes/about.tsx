import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { BANNERS, GOLD_IMAGES, DIAMOND_IMAGES, platinumImg } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

const VALUES = [
  "Excellence in Craftsmanship",
  "Commitment to Purity & Authenticity",
  "Elegant and Timeless Design",
  "Customer-First Experience",
  "Transparency and Trust in Every Purchase",
];

const TRUST_REASONS = [
  "Premium Quality Craftsmanship",
  "Elegant & Timeless Collections",
  "Transparent Pricing & Authenticity",
  "Reliable Customer Support",
  "Curated Designs for Every Occasion",
];

export function AboutPage() {
  const ref = useReveal<HTMLDivElement>();
  const b = BANNERS.about;

  return (
    <div ref={ref}>
      <PageBanner
        title={b.title}
        subtitle={b.subtitle}
        image={b.image}
        crumbs={b.crumbs}
        height="clamp(340px, 70vh, 640px)"
        mobileHeight="clamp(260px, 42vh, 400px)"
      />

      {/* <div className="mx-auto max-w-[1200px] px-5 lg:px-10"> */}

        {/* ─── Brand Story ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="reveal" data-delay="100">
              <p className="text-[11px] tracking-[0.38em] uppercase text-gold mb-3">Our Story</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)] leading-tight mb-6">
                Brand Story
              </h2>
              <span className="block w-12 h-0.5 bg-[var(--gold)] mb-8" />
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed mb-5">
                At Twila Gold, jewellery is crafted as a reflection of timeless elegance, personal
                identity, and refined craftsmanship. Rooted in tradition and shaped by contemporary
                design, every collection is thoughtfully created to celebrate life's meaningful
                moments — from everyday sophistication to treasured milestones.
              </p>
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed">
                Twila Gold brings together purity, artistry, and modern aesthetics to offer jewellery
                that feels both luxurious and enduring. Every piece is designed to be worn with
                confidence and passed on with pride.
              </p>
            </div>
            {/* Image */}
            <div className="reveal overflow-hidden rounded-3xl">
              <img
                src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779296961/copy_of_bg_e063h4.png"
                alt="Twila Gold brand story"
                loading="lazy"
                className="w-full aspect-[4/4] object-cover shimmer-img"
              />
            </div>
          </div>
        </section>

        {/* ─── Divider ─────────────────────────────────────────── */}
        <div className="border-t border-[var(--gold)]/20" />

        {/* ─── Our Vision ──────────────────────────────────────── */}
        <section className="bg-navy py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="reveal order-1 lg:order-2">
              <p className="text-[11px] tracking-[0.38em] uppercase text-gold mb-3">What Drives Us</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                Our Vision
              </h2>
              <span className="block w-12 h-0.5 bg-[var(--gold)] mb-8" />
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
                To create timeless jewellery that blends heritage craftsmanship with modern elegance,
                becoming a trusted destination for fine gold jewellery across generations.
              </p>

              <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-5">Our Values</p>
              <ul className="space-y-4">
                {VALUES.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 text-[15px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="reveal order-2 lg:order-1" data-delay="100">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779297352/copy_of_bb_hlerh2.png"
                  alt="Our vision"
                  loading="lazy"
                  className="w-full aspect-[4/4] object-cover shimmer-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Divider ─────────────────────────────────────────── */}
        <div className="border-t border-[var(--gold)]/20" />

        {/* ─── Craftsmanship ───────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 lg:px-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="reveal" data-delay="100">
              <p className="text-[11px] tracking-[0.38em] uppercase text-gold mb-3">The Art of Making</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)] leading-tight mb-6">
                Craftsmanship Details
              </h2>
              <span className="block w-12 h-0.5 bg-[var(--gold)] mb-8" />
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed mb-5">
                Each Twila Gold creation is carefully designed with attention to proportion, detail,
                and finish. From delicate everyday essentials to statement heirloom pieces, our
                jewellery reflects precision craftsmanship and timeless artistry.
              </p>
              <p className="text-[var(--navy)]/70 text-base md:text-lg leading-relaxed">
                Our collections are thoughtfully curated to balance modern sophistication with
                enduring beauty, ensuring every piece feels effortlessly elegant and distinctly
                premium.
              </p>
            </div>
            {/* Image */}
            <div className="reveal overflow-hidden rounded-3xl">
              <img
                src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779297013/copy_of_bg2_dlgjli.png"
                alt="Craftsmanship detail"
                loading="lazy"
                className="w-full aspect-[4/4] object-cover shimmer-img"
              />
            </div>
          </div>
        </section>

      {/* </div> */}

      {/* ─── Quality Commitment ──────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="reveal grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="reveal overflow-hidden rounded-3xl order-2 lg:order-1" data-delay="100" >
              <img
                src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779297878/copy_of_gg_qshrvp.png"
                alt="Quality commitment"
                loading="lazy"
                className="w-full aspect-video object-cover shimmer-img"
              />
            </div>
            {/* Text */}
            <div className="order-1 lg:order-1">
              <p className="text-[11px] tracking-[0.38em] uppercase text-gold mb-3">Our Promise</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                Quality Commitment
              </h2>
              <span className="block w-12 h-0.5 bg-[var(--gold)] mb-8" />
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-5">
                Quality is at the heart of every Twila Gold creation. We are committed to delivering
                jewellery crafted with exceptional standards of purity, durability, and finishing.
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Every piece undergoes careful quality checks to ensure it meets the expectations of
                fine craftsmanship and lasting elegance. From material selection to final detailing,
                we prioritize excellence at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Full Width Image ─────────────────────────────────── */}
      <section className="hidden w-full md:block">
        <div className="reveal overflow-hidden">
          <img
            src="https://res.cloudinary.com/dbntg4yrs/image/upload/v1779297736/copy_of_wc_oqirhh.png"
            alt="Twila Gold showcase"
            loading="lazy"
            className="w-full h-[42vh] md:h-[56vh] object-cover shimmer-img"
          />
        </div>
      </section>

      {/* ─── Why Customers Trust ─────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="reveal text-center mb-12">
            <p className="text-[11px] tracking-[0.38em] uppercase text-gold mb-3">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)] mb-4">
              Why Customers Trust Twila Gold
            </h2>
            <p className="text-[var(--navy)]/65 text-base md:text-lg max-w-xl mx-auto">
              Dedication to authenticity, elegance, and customer satisfaction — in every piece.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-delay="80">
            {TRUST_REASONS.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-[var(--gold)]/25 bg-white px-6 py-5"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] shrink-0" />
                <span className="text-[var(--navy)]/80 text-[15px]">{r}</span>
              </div>
            ))}
          </div>

          <p className="reveal text-center text-[var(--navy)]/50 text-sm mt-8 tracking-wide" data-delay="350">
            Jewellery you can wear, cherish, and trust for years to come.
          </p>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="px-5 lg:px-10 pb-20 mx-auto max-w-[1200px]">
        <div className="reveal glass-light glass-gold-border rounded-2xl p-12 md:p-16 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Get in touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--navy-deep)] mb-4">
            Find Your Perfect Jewellery
          </h2>
          <p className="text-[var(--navy)]/70 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Explore our exclusive collections and discover timeless elegance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
