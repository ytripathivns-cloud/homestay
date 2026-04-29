import { useMemo, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowUpRight, Loader2 } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { PROPERTY } from "../../lib/data";
import Reveal from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const dateLabel = useMemo(() => {
    if (range?.from && range?.to)
      return `${format(range.from, "d MMM")} → ${format(range.to, "d MMM, yyyy")}`;
    if (range?.from) return `${format(range.from, "d MMM, yyyy")} → check-out`;
    return "Select your dates";
  }, [range]);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please share your name and email so we can get back to you.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, {
        name,
        email,
        phone: phone || null,
        check_in: range?.from ? format(range.from, "yyyy-MM-dd") : null,
        check_out: range?.to ? format(range.to, "yyyy-MM-dd") : null,
        guests: parseInt(guests, 10),
        message: message || null,
      });
      toast.success("Inquiry sent! Yogendra will reply within an hour.");
      setName(""); setEmail(""); setPhone(""); setMessage("");
      setRange({ from: undefined, to: undefined });
    } catch (err) {
      console.error(err);
      toast.error("Could not send inquiry. Please try again or message on Airbnb.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="book"
      data-testid="booking-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-terracotta">
              Plan your visit
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-ink">
              Reserve your <span className="italic font-light">slow morning</span> in Banaras.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
              Send a quick inquiry and Yogendra will personally confirm availability
              within an hour. For instant booking with Airbnb's protection, head over to
              the listing.
            </p>
            <a
              href={PROPERTY.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="booking-airbnb-link"
              className="mt-8 inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark text-sm tracking-[0.2em] uppercase font-semibold border-b border-terracotta hover:border-terracotta-dark pb-1 transition-colors"
            >
              View on Airbnb <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <form
              onSubmit={submit}
              noValidate
              data-testid="booking-form"
              className="bg-bone-200/40 border border-black/10 p-7 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-testid="booking-name"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-terracotta text-ink placeholder:text-ink-muted/60 transition-colors"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="booking-email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-terracotta text-ink placeholder:text-ink-muted/60 transition-colors"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    data-testid="booking-phone"
                    placeholder="+91 …"
                    className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-terracotta text-ink placeholder:text-ink-muted/60 transition-colors"
                  />
                </Field>
                <Field label="Guests">
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger
                      data-testid="booking-guests"
                      className="w-full bg-transparent border-0 border-b border-black/20 rounded-none px-0 py-3 h-auto focus:ring-0 focus:border-terracotta text-ink"
                    >
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field label="Stay dates">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      data-testid="booking-dates-trigger"
                      className="w-full flex items-center justify-between bg-transparent border-b border-black/20 py-3 text-left focus:outline-none focus:border-terracotta hover:border-terracotta transition-colors"
                    >
                      <span className={range?.from ? "text-ink" : "text-ink-muted/60"}>
                        {dateLabel}
                      </span>
                      <CalendarIcon className="w-4 h-4 text-ink-muted" strokeWidth={1.5} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-bone border border-black/10" align="start">
                    <Calendar
                      mode="range"
                      selected={range}
                      onSelect={setRange}
                      numberOfMonths={2}
                      disabled={{ before: new Date() }}
                      data-testid="booking-calendar"
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <Field label="Anything we should know?">
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-testid="booking-message"
                  placeholder="Arrival time, dietary needs, plans for the city…"
                  className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-terracotta text-ink placeholder:text-ink-muted/60 transition-colors resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                data-testid="booking-submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-terracotta text-bone hover:bg-terracotta-dark transition-colors duration-300 text-xs font-semibold tracking-[0.22em] uppercase disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-muted">
      {label}
      {required && <span className="text-terracotta ml-1">*</span>}
    </span>
    <div className="mt-1">{children}</div>
  </label>
);

export default BookingForm;
