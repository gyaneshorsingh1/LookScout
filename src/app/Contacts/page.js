"use client";
import { motion } from "framer-motion";
import "./contacts.css"; // Create this file

export default function ContactsPage() {
  return (
    <div className="contacts-container">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We'd love to hear from you! Fill out the form below.
      </motion.p>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message..." required />
        <button type="submit">Send</button>
      </motion.form>
    </div>
  );
}
