import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Amenities from "./components/Amenities/Amenities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <WhatWeOffer />
      <Contact />
      <Footer />
    </>
  );
}
