import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { BANNERS, diamondImg, goldImg, platinumImg, silverImg } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

const COLLECTION_IMAGES = [
  { src: diamondImg(0), alt: "Diamond necklace" },
  { src: goldImg(0),    alt: "Gold necklace" },
  { src: diamondImg(2), alt: "Diamond pendant" },
  { src: goldImg(3),    alt: "Gold ring" },
  { src: platinumImg(1), alt: "Platinum ring" },
  { src: silverImg(0),  alt: "Silver earrings" },
];

export function AboutPage() {
  const ref = useReveal<HTMLDivElement>();
  const b = BANNERS.about;

  return (
    <div ref={ref}>
      <PageBanner title={b.title} subtitle={b.subtitle} image={b.image} crumbs={b.crumbs} />

      {/* About text */}
      <section className="mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
        <div className="reveal max-w-2xl mx-auto text-center mb-16">
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Our Story</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)] mb-6">About Twila Gold</h2>
          <p className="text-[var(--navy)]/70 text-sm leading-relaxed mb-4">
            Twila Gold is a modern jewelry brand based in Calicut, specializing in finely crafted gold and diamond
            pieces. Founded with a vision to bring elegance and quality together, we create designs that reflect both
            tradition and contemporary style.
          </p>
          <p className="text-[var(--navy)]/70 text-sm leading-relaxed mb-4">
            Our collections are thoughtfully curated to suit everyday wear as well as special occasions. Each piece is
            crafted with attention to detail, ensuring lasting beauty, comfort, and refinement.
          </p>
          <p className="text-[var(--navy)]/70 text-sm leading-relaxed">
            At Twila Gold, we believe jewelry is more than an accessory — it's a reflection of personal style and
            meaningful moments. Our goal is to offer pieces that are simple, elegant, and made to be cherished.
          </p>
        </div>

        {/* Collections grid */}
        <div className="reveal" data-delay="100">
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold text-center mb-3">Gallery</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)] text-center mb-10">
            Our Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {COLLECTION_IMAGES.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl glass-gold-border"
                data-delay={i * 80}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover shimmer-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 lg:px-10 pb-20 mx-auto max-w-[1400px]">
        <div className="reveal glass-light glass-gold-border rounded-2xl p-12 md:p-16 text-center">
          <div className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">Get in touch</div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--navy-deep)] mb-4">
            Find Your Perfect Jewelry
          </h2>
          <p className="text-[var(--navy)]/70 text-sm mb-8 max-w-md mx-auto">
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
