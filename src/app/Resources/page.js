"use client";
import { motion } from "framer-motion";
import "./resources.css"; // Create this file

export default function ResourcesPage() {
  return (
    <div className="resources-container">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resources
      </motion.h1>
      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Explore articles, tutorials, and tools to help you grow.
      </motion.p>

      <ul className="resource-list">
        {["Blog", "Tutorials", "E-books"].map((resource, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {resource}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
