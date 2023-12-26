"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Bg from "./Bg";
import Navbar from "../Navbar/Navbar";
import AnimatedText from "../TextAnimtion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <>
      <Navbar />
      <div className="h-screen pt-14 flex flex-col gap-10 items-center justify-center">
        <div className="absolute -z-10 top-0 left-0 w-full h-screen">
          <Bg />
        </div>
        <div className="flex flex-col items-center text-primary text-5xl md:text-8xl font-black font-sans">
          <AnimatedText
            el="h2ß"
            text={["LUMPINEE GYM", "For 20+ Years"]}
            className="text-5xl md:text-7xl text-center"
            repeatDelay={10000}
            once
          />
        </div>
        <motion.button
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.3, delay: 2 }}
          className="bg-primary hover:bg-primary/80 transition-all duration-200 text-black py-2 px-8">
          Learn more
        </motion.button>
      </div>
    </>
  );
};

export default Hero;
