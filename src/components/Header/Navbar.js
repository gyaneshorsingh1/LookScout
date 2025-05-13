// components/Navbar.jsx
"use client";
import "./navbar.css";
import Link from "next/link";
import { motion } from "framer-motion";

// Variants for each nav item
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Our Products", href: "/our-products" },
    { label: "Resources", href: "/Resources" },
    { label: "Contacts", href: "/Contacts" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="left-nav">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <img src="Lookscout.png" alt="lookscout logo" className="logo" />
        </motion.div>

        <div className="nav-links">
          {links.map((link, i) => (
            <motion.div key={link.href} custom={i} variants={itemVariants}>
              <Link href={link.href}>{link.label}</Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="login-btns">
        <motion.button
          className="login-btn"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Log in
        </motion.button>
        <motion.button
          className="signup-btn"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Sign up
        </motion.button>
      </div>

      <motion.img
        className="nav-icon"
        src="nav-icon.png"
        alt="menu"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      />
    </motion.nav>
  );
}
