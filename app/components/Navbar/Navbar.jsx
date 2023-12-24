"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const links = [
    { url: "/", text: "Home" },
    { url: "/#about", text: "About" },
    { url: "/#contact", text: "Contact" },
    { url: "/#amenities", text: "Amenities" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="bg-gray-800 absolute top-0 left-0 text-white p-4 px-8 w-full">
      <div className="flex items-center justify-between">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 0.3, delay: 2.5 }}
          className="flex items-center">
          <a href="/">
            <Image src="/logo.png" width={80} height={50} alt="logo" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7">
          {links.map((link, index) => (
            <motion.a
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 },
              }}
              transition={{ duration: 0.3, delay: index * 0.1 + 2.5 }}
              key={index}
              href={link.url}
              className="hover:text-primary transition-all duration-200">
              {link.text}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 0.3, delay: 2.5 }}
          className="md:hidden ">
          <MobileNav links={links} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
