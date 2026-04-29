import { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { REVIEWS, RATING_BREAKDOWN, PROPERTY } from "../../lib/data";
import Reveal from "./Reveal";

export const Reviews = () => {
  const [idx, setIdx] = useState(0);
  const review = REVIEWS[idx];

  const next = () => setIdx((p) => (p + 1) % REVIEWS.length);
  const prev = () => setIdx((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
              Loved by guests
            </p>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-serif text-7xl sm:text-8xl text-ink leading-none">
                {PROPERTY.rating}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-terracotta stroke-terracotta"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-ink-muted">
              {PROPERTY.reviewsCount} reviews · {PROPERTY.yearsHosting} years hosting
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-10 space-y-3">
              {RATING_BREAKDOWN.map((r) => (
                <li key={r.label} className="flex items-center gap-4">
                  <span className="w-28 text-sm text-ink-muted">{r.label}</span>
                  <span className="flex-1 h-px bg-black/10 relative overflow-hidden">
                    <span
                      className="absolute inset-y-0 left-0 bg-terracotta"
                      style={{ width: `${(r.value / 5) * 100}%` }}
                    />
                  </span>
                  <span className="w-10 text-sm text-ink font-medium tabular-nums text-right">
                    {r.value.toFixed(1)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={200}>
            <div className="relative bg-bone-200/60 p-8 sm:p-12 border border-black/10 min-h-[340px] flex flex-col">
              <Quote
                className="absolute top-6 right-6 w-16 h-16 text-terracotta/15"
                strokeWidth={1}
                aria-hidden="true"
              />
              <div key={idx} className="flex-1 animate-fade-in">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-terracotta stroke-terracotta"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="font-serif text-2xl sm:text-3xl leading-snug text-ink">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-terracotta text-bone flex items-center justify-center font-serif text-lg">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{review.name}</p>
                    <p className="text-xs text-ink-muted tracking-wide">{review.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 mt-8 border-t border-black/10">
                <span className="text-xs tracking-[0.22em] uppercase text-ink-muted">
                  {String(idx + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    data-testid="reviews-prev"
                    aria-label="Previous review"
                    className="w-11 h-11 border border-ink/20 hover:bg-terracotta hover:border-terracotta hover:text-bone text-ink transition-colors duration-300 flex items-center justify-center"
                  >
                    <ArrowLeft strokeWidth={1.5} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    data-testid="reviews-next"
                    aria-label="Next review"
                    className="w-11 h-11 border border-ink/20 hover:bg-terracotta hover:border-terracotta hover:text-bone text-ink transition-colors duration-300 flex items-center justify-center"
                  >
                    <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
