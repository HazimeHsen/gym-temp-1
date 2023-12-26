"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Amenities from "./components/Amenities/Amenities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./loading";
import Team from "./components/Team/Team";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Amenities />
          <WhatWeOffer />
          <Team />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
