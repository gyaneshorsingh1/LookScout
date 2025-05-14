"use client";
import { motion } from "framer-motion";
import "./products.css"; // Create this for styling

export default function ProductsPage() {
  return (
    <div className="products-container">
        
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h1>
      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover our range of carefully crafted products designed to meet your needs.
      </motion.p>

      <div className="product-grid">
        {[1, 2, 3].map((item) => (
          <motion.div
            className="product-card"
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/blog3.png" alt="Product" />
            <h3>Product {item}</h3>
            <p>Short description of product {item}.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
