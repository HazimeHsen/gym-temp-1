"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const Amenities = () => {
  const data = [
    {
      icon: "/4.gif",
      title: "Premium Gym Membership",
      info: "Access to all gym facilities, Get the ultimate fitness experience.",
    },
    {
      icon: "/2.gif",
      title: "Muay Thai Training Classes",
      info: "Join our 20 years+ high-energy group classes led by certified trainers. Burn calories, build strength, and have fun with a supportive community.",
    },
    {
      icon: "/1.gif",
      title: "1 on 1 private training",
      info: "Customized nutrition plans tailored to your fitness goals. Schedule a consultation with our nutrition experts to optimize your diet.",
    },
    {
      icon: "/3.gif",
      title: "Special Events and Challenges",
      info: "Participate in exclusive gym events and challenges. Stay motivated, achieve milestones, and win exciting prizes along your fitness journey.",
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
    <div
      id="amenities"
      className="min-h-screen flex flex-col justify-between py-20 px-6 md:px-14">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3 }}
        className=" flex flex-col text-4xl md:text-6xl justify-center items-center md:justify-end">
        <span>OUR</span>
        <span>AMENITIES</span>
      </motion.div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-4">
          {data.map((d) => (
            <div key={d.title}>
              <AmenityCard data={d} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;

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
      className="flex flex-col gap-4">
      <div className="">
        <Image
          src={data.icon}
          alt={data.title}
          width={70}
          height={70}
          className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
        />
      </div>
      <div className="text-xl font-semibold text-third whitespace-nowrap">
        {data.title}
      </div>
      <div className="text-sm">{data.info}</div>
    </motion.div>
  );
};
