import { ShieldCheck, MessageCircle, Award } from "lucide-react";
import { HOST_IMAGE, PROPERTY } from "../../lib/data";
import Reveal from "./Reveal";

export const Host = () => {
  return (
    <section
      id="host"
      data-testid="host-section"
      className="py-24 sm:py-32 bg-bone-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-terracotta translate-x-3 translate-y-3" aria-hidden="true" />
              <img
                src={HOST_IMAGE}
                alt={`Host ${PROPERTY.host}`}
                className="relative w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
              Meet your host
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink">
              Yogendra, <span className="italic font-light">Superhost.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
              {PROPERTY.hostBio} A 100% response rate, often within the hour, and a
              personal nudge with the city's best chai stops, ghat timings and rickshaw
              fares.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
              {[
                { icon: Award, label: "Superhost", note: "Since 2022" },
                { icon: MessageCircle, label: "100% reply", note: "Within an hour" },
                { icon: ShieldCheck, label: "Verified", note: "By Airbnb" },
              ].map(({ icon: Icon, label, note }) => (
                <div
                  key={label}
                  data-testid={`host-badge-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border border-black/10 bg-bone p-5"
                >
                  <Icon className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  <p className="mt-3 font-medium text-ink">{label}</p>
                  <p className="text-xs text-ink-muted mt-1">{note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Host;
