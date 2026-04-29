import { GALLERY } from "../../lib/data";
import Reveal from "./Reveal";

const GRID_CLASSES = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-4 aspect-[3/4]",
  "md:col-span-8 aspect-[16/9]",
  "md:col-span-12 aspect-[16/7]",
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 sm:py-32 bg-bone-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
                Glimpses
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink">
                Look inside the home.
              </h2>
            </div>
            <p className="max-w-sm text-ink-muted">
              Six rooms in soft daylight — three bedrooms, a living lounge, a working
              kitchen, and an outdoor patio that smells faintly of tulsi.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-3 sm:gap-5">
          {GALLERY.map((g, i) => (
            <Reveal key={g.url} delay={i * 80} className={`${GRID_CLASSES[i] || "md:col-span-6"}`}>
              <div className="w-full h-full overflow-hidden group bg-bone-300">
                <img
                  src={g.url}
                  alt={g.alt}
                  data-testid={`gallery-image-${i}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
