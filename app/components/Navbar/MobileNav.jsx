import React, { useState } from "react";
import "./app.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";

function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={isOpen}>
        <FaBars size={26} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container absolute top-0 left-0 w-screen h-screen"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit">
            <div className="btn_close" onClick={closeMenu}>
              X
            </div>
            {links.map((link, index) => (
              <motion.a
                onClick={closeMenu}
                key={index}
                href={link.url}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 - index * 0.1 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1 - index * 0.1,
                  },
                }}>
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
