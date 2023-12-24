"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.3 }}
      className="px-4 pt-10 flex flex-col">
      <div className="">
        <Image src="/logo.png" width={80} height={50} alt="logo" />
      </div>
      <div className="md:flex justify-center text-white py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-20">
          {/* Contact Information */}
          <div className="w-full max-w-[280px] px-4 mb-8">
            <h3 className="text-lg font-bold mb-2">NORTH FORTBERRY</h3>
            <div className="mb-4">
              <p className="my-1">123 Anywhere St.</p>
              <p className="my-1">Any City, ST 12345</p>
            </div>
            <div ref={ref}>
              <p className="my-1">(123) 456-7890</p>
              <p className="my-1">hello@reallygreatsite.com</p>
              <p className="my-1">@reallygreatsite</p>
            </div>
          </div>

          {/* Club Hours */}
          <div className="w-full max-w-[280px] px-4 mb-8">
            <h3 className="text-lg font-bold mb-2">CLUB HOURS</h3>
            <p className="my-1">
              <span className="font-bold">Tuesday to Saturday</span> <br />
              <span className="text-sm">6:00 am to 10:00 pm</span>
            </p>
            <p className="my-1">
              <span className="font-bold">Sunday</span> <br />
              <span className="text-sm">8:00 am to 9:00 pm</span>
            </p>
            <p className="my-1 text-sm">Closed on Mondays</p>
          </div>

          {/* Stay Connected */}
          <div className="w-full max-w-[280px] px-4 mb-8">
            <h3 className="text-lg font-bold mb-2">STAY CONNECTED</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTiktok size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mx-4 md:mx-10 border-t">
        All Right Are Reversed
      </div>
    </motion.div>
  );
};

export default Footer;
