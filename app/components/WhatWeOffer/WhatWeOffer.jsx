"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const WhatWeOffer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div className="h-screen w-full py-5 px-4 md:px-10 flex md:flex-row flex-col items-center justify-center md:gap-10 lg:gap-52 xl:gap-64 gap-20 ">
      <div className="w-full md:w-1/2 flex flex-col md:text-start text-center md:items-start items-center gap-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2 }}
          className="max-w-lg text-4xl md:text-6xl lg:text-7xl">
          IT&apos;S TIME TO BE HEALTHY AND IN GREAT SHAPE{" "}
        </motion.div>
        <motion.button
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="w-fit py-2 px-8 bg-primary hover:bg-primary/80 transition-all duration-200 text-black">
          Get In Touch
        </motion.button>
      </div>
      <div className="w-full !max-h-[500px] max-w-[300px] md:w-1/2 flex justify-center relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0.4 }}>
          <Image
            src="/whatweoffer.jpg"
            width={250}
            height={500}
            className="!max-h-[500px] md:w-[300px]"
            alt="whatweoffer"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
