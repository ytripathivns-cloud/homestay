import { MapPin } from "lucide-react";
import { LOCATION_BG, NEARBY } from "../../lib/data";
import Reveal from "./Reveal";

export const Location = () => {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={LOCATION_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 text-bone">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-saffron">
              Where you'll be
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-bone leading-[1.05]">
              Central Varanasi. <br />
              <span className="italic font-light">Steps from everything sacred.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-base sm:text-lg text-bone/80 max-w-xl leading-relaxed">
              Sigra–Siddhgiribagh, a quiet residential lane just 100 metres from the main
              road, with the landmark Rajshree Apartment next door. The major ghats and
              temples are within 1.5–3.5 km — easily reached by battery rickshaw, OLA,
              UBER or auto.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={300}>
            <div className="bg-bone p-8 sm:p-10 border border-black/5">
              <p className="text-[10px] tracking-[0.28em] uppercase text-terracotta font-semibold">
                Nearby attractions
              </p>
              <ul className="mt-6 divide-y divide-black/10">
                {NEARBY.map((n, i) => (
                  <li
                    key={n.name}
                    data-testid={`nearby-${i}`}
                    className="flex items-center justify-between py-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="w-4 h-4 text-terracotta shrink-0" strokeWidth={1.5} />
                      <span className="font-serif text-xl text-ink group-hover:text-terracotta transition-colors">
                        {n.name}
                      </span>
                    </div>
                    <span className="text-xs tracking-wider text-ink-muted">{n.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
