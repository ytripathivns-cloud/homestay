import { BEDROOMS } from "../../lib/data";
import Reveal from "./Reveal";

export const Bedrooms = () => {
  return (
    <section
      id="bedrooms"
      data-testid="bedrooms-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
                Where you'll sleep
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-ink">
                Three rooms, premium mattresses.
              </h2>
            </div>
            <p className="text-ink-muted max-w-xs text-sm">
              Each room is air-conditioned with fresh linen and a private feel.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BEDROOMS.map((b, i) => (
            <Reveal key={b.id} delay={i * 120}>
              <article
                data-testid={`bedroom-card-${b.id}`}
                className="group flex flex-col"
              >
                <div className="overflow-hidden aspect-[4/5] bg-bone-300">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pt-5 flex items-baseline justify-between border-b border-black/10 pb-4">
                  <h3 className="font-serif text-2xl text-ink">{b.title}</h3>
                  <span className="text-xs tracking-[0.2em] uppercase text-ink-muted">
                    0{b.id}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-muted">{b.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bedrooms;
