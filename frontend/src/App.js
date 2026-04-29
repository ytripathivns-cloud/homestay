import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";

import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Gallery from "@/components/site/Gallery";
import Bedrooms from "@/components/site/Bedrooms";
import Amenities from "@/components/site/Amenities";
import Location from "@/components/site/Location";
import Reviews from "@/components/site/Reviews";
import Host from "@/components/site/Host";
import BookingForm from "@/components/site/BookingForm";
import Footer from "@/components/site/Footer";

const Home = () => (
  <main data-testid="home-page" className="bg-bone text-ink overflow-x-hidden">
    <Navbar />
    <Hero />
    <Marquee />
    <About />
    <Gallery />
    <Bedrooms />
    <Amenities />
    <Location />
    <Reviews />
    <Host />
    <BookingForm />
    <Footer />
  </main>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
