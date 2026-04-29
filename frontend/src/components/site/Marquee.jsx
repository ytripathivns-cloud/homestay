import { REVIEW_HIGHLIGHTS } from "../../lib/data";

export const Marquee = () => {
  const items = [...REVIEW_HIGHLIGHTS, ...REVIEW_HIGHLIGHTS];
  return (
    <div
      data-testid="reviews-marquee"
      className="border-y border-black/10 bg-bone-200/60 py-5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {items.map((it, i) => (
          <span
            key={i}
            className="text-sm tracking-[0.18em] uppercase text-ink-muted shrink-0"
          >
            {it}
            <span className="ml-12 text-terracotta">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
