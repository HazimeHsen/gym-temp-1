"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div id="about" className="md:h-screen py-20 px-10 md:px-24">
      <div className="flex gap-3 md:gap-7">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0 }}>
          <div className="bg-gradient-to-tr from-secondary to-primary h-[50px] md:h-[100px] w-[45px] md:w-[90px] rounded-lg -skew-x-[35deg]"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0.2 }}>
          <div className="bg-gradient-to-tr from-secondary to-primary h-[30px] md:h-[60px] w-[45px] md:w-[90px] rounded-lg -skew-x-[35deg]"></div>
        </motion.div>
      </div>
      <div className="flex justify-center my-10 md:my-20">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="max-w-xl text-center md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptas impedit, tenetur perspiciatis minima cumque quam? Error
          quisquam, nostrum quis explicabo aliquid, dolor iste rerum veniam
          consequuntur, sequi repellat voluptatibus.
        </motion.div>
      </div>
      <div className="ml-32 flex justify-end">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="">
          <div className="bg-gradient-to-tr from-secondary to-primary h-[30px] md:h-[60px] w-[45px] md:w-[90px] rounded-lg -skew-x-[35deg]"></div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.2, delay: 0.6 }}>
          <div className="bg-gradient-to-tr from-secondary to-primary h-[50px] md:h-[100px] w-[45px] md:w-[90px] rounded-lg -skew-x-[35deg]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
