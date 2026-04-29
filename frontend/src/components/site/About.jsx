import { GALLERY, MARIGOLD_TEXTURE } from "../../lib/data";
import Reveal from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <img
        src={MARIGOLD_TEXTURE}
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -right-20 w-[480px] opacity-[0.06] mix-blend-multiply pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={GALLERY[4].url}
                alt="Outdoor patio with greenery and water fountain"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-10 w-44 h-56 overflow-hidden border-8 border-bone shadow-lg">
              <img
                src={GALLERY[3].url}
                alt="Equipped kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
              The Stay
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-ink">
              A clean, independent home <span className="italic text-terracotta">in the heart</span> of Banaras.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
              <p>
                Tucked into a quiet residential lane just off Sigra–Siddhgiribagh road,
                the homestay sits on the ground floor with its own private entrance —
                three thoughtfully designed bedrooms, two bathrooms, an equipped kitchen
                and a small green patio with a water fountain.
              </p>
              <p>
                After busy days at the ghats, return to a cool, calm space with a 50″
                smart TV, 195 Mbps Wi-Fi, a working desk, an in-unit washer, and an
                independent kitchen stocked with tea, coffee and a few thoughtful goodies.
              </p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-md border-t border-black/10 pt-8">
              <div>
                <dt className="text-[10px] tracking-[0.22em] uppercase text-ink-muted">Guests</dt>
                <dd className="font-serif text-3xl text-ink mt-1">06</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.22em] uppercase text-ink-muted">Bedrooms</dt>
                <dd className="font-serif text-3xl text-ink mt-1">03</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.22em] uppercase text-ink-muted">Baths</dt>
                <dd className="font-serif text-3xl text-ink mt-1">02</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
