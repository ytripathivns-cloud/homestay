import { ArrowUpRight, Star } from "lucide-react";
import { PROPERTY, HERO_IMAGE } from "../../lib/data";
import Reveal from "./Reveal";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta mb-6">
              Homestay · Varanasi · Since 2022
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tight text-ink">
              A quiet corner
              <span className="block italic font-light text-terracotta">in the city of</span>
              Kashi.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-base sm:text-lg text-ink-muted max-w-md leading-relaxed">
              A 3-bedroom <strong className="font-medium text-ink">Varanasi homestay</strong> with a
              garden patio, just a short ride from Kashi Vishwanath and the ghats.
              Hosted with quiet care by Yogendra — Superhost since day one.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                data-testid="hero-reserve-button"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-terracotta text-bone hover:bg-terracotta-dark transition-colors duration-300 text-xs font-semibold tracking-[0.22em] uppercase"
              >
                Request a Stay
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </a>
              <a
                href={PROPERTY.airbnbUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-airbnb-button"
                className="inline-flex items-center gap-2 px-6 py-4 border border-ink/20 text-ink hover:border-terracotta hover:text-terracotta transition-colors duration-300 text-xs font-semibold tracking-[0.22em] uppercase"
              >
                Book on Airbnb
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-terracotta stroke-terracotta" strokeWidth={1.5} />
                <span className="font-medium text-ink">{PROPERTY.rating}</span>
                <span className="text-ink-muted">({PROPERTY.reviewsCount} reviews)</span>
              </div>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-muted">Superhost</span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-muted">{PROPERTY.bedrooms} bedrooms</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <Reveal delay={200}>
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[5/6] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Varanasi Paradise Homestay — main bedroom and living space in central Varanasi"
        data-testid="hero-image"
        loading="eager"
        fetchPriority="high"
        className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
      />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-bone/95 backdrop-blur-sm px-5 py-4 max-w-[260px]">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-muted">
                  Where you'll be
                </p>
                <p className="font-serif text-2xl text-ink leading-tight mt-1">
                  Sigra–Siddhgiribagh, Varanasi
                </p>
              </div>
            </div>
          </Reveal>

          {/* decorative number */}
          <div className="hidden lg:block absolute -top-10 -right-2 font-serif italic text-[180px] leading-none text-terracotta/15 select-none pointer-events-none">
            03
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
