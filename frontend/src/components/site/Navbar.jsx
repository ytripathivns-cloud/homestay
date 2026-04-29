import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { PROPERTY } from "../../lib/data";

const NAV_LINKS = [
  { label: "Stay", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Host", href: "#host" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" data-testid="navbar-logo" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl sm:text-3xl tracking-tight text-ink">
            {PROPERTY.name}
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-ink-muted border-l border-black/10 pl-3">
            <Star className="w-3.5 h-3.5 fill-terracotta stroke-terracotta" strokeWidth={1.5} />
            {PROPERTY.rating}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm text-ink-muted hover:text-terracotta transition-colors duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            data-testid="navbar-book-button"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase bg-terracotta text-bone hover:bg-terracotta-dark transition-colors duration-300"
          >
            Reserve
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="navbar-menu-toggle"
            className="lg:hidden p-2 text-ink"
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-bone border-t border-black/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                className="text-base text-ink hover:text-terracotta"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              data-testid="mobile-nav-book"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-terracotta text-bone"
            >
              Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
