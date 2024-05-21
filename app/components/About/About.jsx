"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  const data = [
    {
      icon: "/4.gif",
      title: "Our History",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat numquam repellendus asperiores voluptates exercitationem inventore dolorem nihil",
    },
    {
      icon: "/2.gif",
      title: "Recent News",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat numquam repellendus asperiores voluptates exercitationem inventore",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div id="about" className="flex flex-col py-20 px-6 md:px-14">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3 }}
        className=" flex flex-col text-2xl md:text-4xl justify-center items-center md:justify-end">
        About Us
      </motion.div>
      <div className="flex justify-center md:flex-row flex-col gap-10 mt-10">
        {data.map((d) => (
          <div key={d.title}>
            <AmenityCard data={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

const AmenityCard = ({ data }) => {
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
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 max-w-md text-center justify-center items-center">
      <div className="">
        <Image
          src={data.icon}
          alt={data.title}
          width={70}
          height={70}
          className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
        />
      </div>
      <div className="text-xl font-semibold text-third whitespace-nowrap max-w-md">
        {data.title}
      </div>
      <div className="text-sm">{data.info}</div>
    </motion.div>
  );
};
