"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <div
      id="contact"
      className="py-10 text-lg flex md:flex-row flex-col md:items-start md:gap-52 lg:gap-96 gap-10 px-4 md:px-14 lg:px-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 0.3 }}
        className="py-2 -skew-x-[15deg] px-5 h-fit w-fit bg-primary text-black text-4xl whitespace-nowrap md:text-5xl font-semibold">
        Let&apos;s Chat
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-wrap flex-row md:flex-col md:pl-0 pl-5 gap-10 md:gap-5">
        <div>
          <div className="text-primary">Phone</div>
          <div className="my-2">(123) 456-7890</div>
        </div>
        <div>
          <div className="text-primary">Email</div>
          <div className="my-2">hello@reallygreatsite.com</div>
        </div>
        <div>
          <div className="text-primary">Social</div>
          <div className="my-2 flex gap-3">
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaTiktok size={25} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
