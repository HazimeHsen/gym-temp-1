"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    imageSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    socialMedia: [
      { platform: "Facebook", link: "#", icon: FaFacebook },
      { platform: "Instagram", link: "#", icon: FaInstagram },
      { platform: "TikTok", link: "#", icon: FaTiktok },
    ],
  },
  // Add more team members here
  {
    name: "New Team Member 1",
    role: "New Role 1",
    imageSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    socialMedia: [
      { platform: "Facebook", link: "#", icon: FaFacebook },
      { platform: "Instagram", link: "#", icon: FaInstagram },
      { platform: "TikTok", link: "#", icon: FaTiktok },
    ],
  },
  {
    name: "New Team Member 2",
    role: "New Role 2",
    imageSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    socialMedia: [
      { platform: "Facebook", link: "#", icon: FaFacebook },
      { platform: "Instagram", link: "#", icon: FaInstagram },
      { platform: "TikTok", link: "#", icon: FaTiktok },
    ],
  },
  {
    name: "New Team Member 3",
    role: "New Role 3",
    imageSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    socialMedia: [
      { platform: "Facebook", link: "#", icon: FaFacebook },
      { platform: "Instagram", link: "#", icon: FaInstagram },
      { platform: "TikTok", link: "#", icon: FaTiktok },
    ],
  },
];
// ... (import statements)

const TeamMember = ({ name, role, imageSrc, socialMedia }) => {
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
      className="text-center text-gray-500 dark:text-gray-400">
      <Image
        width={140}
        height={140}
        className="mx-auto mb-4 rounded-full"
        src={imageSrc}
        alt={`${name} Avatar`}
      />
      <h3 className="mb-1 text-primary text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a>{name}</a>
      </h3>
      <p className="text-gray text-sm">{role}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {socialMedia.map((social, socialIndex) => (
          <li key={socialIndex}>
            <a
              href={social.link}
              className={`text-${social.icon} hover:text-gray-900 dark:hover:text-white`}>
              {<social.icon size={25} />}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Team = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.3 }}
            className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </motion.h2>
        </div>
        <div className="grid gap-8 lg:gap-16 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
