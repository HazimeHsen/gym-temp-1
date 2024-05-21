"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Amenities from "./components/Amenities/Amenities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./loading";


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
          <Amenities />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
