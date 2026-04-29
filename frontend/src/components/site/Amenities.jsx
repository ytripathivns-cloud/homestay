import {
  Wifi, Tv, Wind, ChefHat, Car, WashingMachine, Trees, Briefcase,
  ShowerHead, KeyRound, Coffee, ShieldCheck,
} from "lucide-react";
import { AMENITIES } from "../../lib/data";
import Reveal from "./Reveal";

const ICON_MAP = {
  Wifi, Tv, Wind, ChefHat, Car, WashingMachine, Trees, Briefcase,
  ShowerHead, KeyRound, Coffee, ShieldCheck,
};

export const Amenities = () => {
  return (
    <section
      id="amenities"
      data-testid="amenities-section"
      className="py-24 sm:py-32 bg-bone-200/40 border-y border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
                The Essentials
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-ink">
                Sixty-seven amenities, <span className="italic">twelve favourites</span>.
              </h2>
            </div>
            <p className="text-ink-muted max-w-sm text-sm">
              Everything you need for a comfortable, productive stay — from fast Wi-Fi
              to a private patio.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black/10">
          {AMENITIES.map((a, i) => {
            const Icon = ICON_MAP[a.icon];
            return (
              <Reveal key={a.label} delay={i * 50}>
                <div
                  data-testid={`amenity-${a.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-bone p-6 sm:p-8 h-full flex items-start gap-4 group hover:bg-bone-200 transition-colors duration-300"
                >
                  {Icon && (
                    <Icon
                      strokeWidth={1.25}
                      className="w-6 h-6 text-terracotta shrink-0 mt-1 group-hover:rotate-[-4deg] transition-transform duration-500"
                    />
                  )}
                  <div>
                    <p className="font-serif text-xl text-ink leading-tight">{a.label}</p>
                    <p className="text-xs text-ink-muted mt-1 tracking-wide">{a.note}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
