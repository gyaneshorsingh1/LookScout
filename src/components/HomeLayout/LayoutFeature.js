"use client";

import "./LayoutFeature.css";
import "./ProductFeatures.css";
import "./message.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";

export default function LayoutFeature() {
    const cardVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3 },
        }),
    };

    return (
        <>
            <section className="section4">
                {/* Left image with animation */}
                <motion.div
                    className="left-img-section4"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img src="section3-img.png" alt="Section Illustration" />
                </motion.div>

                {/* Right feature cards */}
                <div className="feature-left">
                    {[
                        { img: "feature-icon3.png", title: "Explore ideas together" },
                        { img: "feature-icon2.png", title: "Bring those ideas to life" },
                        { img: "feature-icon1.png", title: "Ship better outcomes" },
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
                            <div className="f-card-right f-card-right2">
                                <h4>{item.title}</h4>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                                <p className="learn-more">
                                    Learn more <ArrowForwardIcon className="arrow-icon" />
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}
