import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PROPERTY } from "../../lib/data";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-ink text-bone pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-saffron">
            {PROPERTY.shortTagline}
          </p>
          <h3 className="mt-4 font-serif text-5xl tracking-tight">
            {PROPERTY.fullName}
          </h3>
          <p className="mt-5 text-bone/70 max-w-md leading-relaxed">
            A clean, independent home on the ground floor of a quiet residential lane in
            central Varanasi. Hosted by Yogendra, Superhost.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-bone/50">
            Visit us
          </p>
          <p className="mt-4 flex items-start gap-3 text-bone/85 leading-relaxed">
            <MapPin className="w-4 h-4 mt-1 text-saffron shrink-0" strokeWidth={1.5} />
            Sigra–Siddhgiribagh Road,<br />
            Varanasi, Uttar Pradesh<br />
            India
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-bone/50">
            Reach out
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={PROPERTY.airbnbUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-airbnb-link"
                className="group inline-flex items-center gap-2 text-bone hover:text-saffron transition-colors"
              >
                Book on Airbnb
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a
                href="#book"
                data-testid="footer-inquiry-link"
                className="inline-flex items-center gap-2 text-bone hover:text-saffron transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Send a direct inquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 pt-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-bone/50 tracking-wide">
        <p>© {new Date().getFullYear()} {PROPERTY.fullName}. Crafted with quiet care.</p>
        <p>Listed exclusively on Airbnb.</p>
      </div>
    </footer>
  );
};

export default Footer;
