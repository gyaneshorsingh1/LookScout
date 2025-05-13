"use client";

import "./ProductFeatures.css";
import "./message.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useWindowWidth from "./WindowWidth/useWindowWidth";
import { motion } from "framer-motion";

export default function ProductFeatures() {
  const width = useWindowWidth();

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <>
      <section className="product-features-section">
        {/* Heading */}
        <motion.div
          className="message-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Redefining Product Features</h2>
          <p>
            Keeping your eye on the ball while performing a deep dive on the start-up
            mentality to derive convergence on cross-platform integration.
          </p>
        </motion.div>

        {/* Feature content */}
        <div className="feature-container">
          <div className="feature-left">
            {[
              {
                img: "feature-icon3.png",
                title: "Explore ideas together",
              },
              {
                img: "feature-icon2.png",
                title: "Bring those ideas to life",
              },
              {
                img: "feature-icon1.png",
                title: "Ship better outcomes",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="f-card-right">
                  <h4>{item.title}</h4>
                  <p>
                    Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                  </p>
                  <p className="learn-more">
                    Learn more <ArrowForwardIcon className="arrow-icon" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image (Right side) */}
          <motion.div
            className="feature-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {width > 778 ? (
              <img src="feature-img.png" alt="Feature large" />
            ) : (
              <img src="feature-img-s.png" alt="Feature small" />
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
