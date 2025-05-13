"use client";

import "./Footer.css";
import { motion } from "framer-motion";

export default function Footer() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="footer-section">
            <div className="footer-container">
                {/* Section 1: Logo & text */}
                <motion.div
                    className="footer-sec1"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={0}
                    viewport={{ once: true }}
                >
                    <div>
                        <img src="Lookscout.png" />
                    </div>
                    <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                </motion.div>

                {/* Section 2: Resources */}
                <motion.div
                    className="footer-sec2"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2>Resources</h2>
                    </div>
                    <div className="footer-tabs">
                        <p>Community</p>
                        <p>Events</p>
                        <p>Help Center</p>
                        <p>Partners</p>
                    </div>
                </motion.div>

                {/* Section 3: Products */}
                <motion.div
                    className="footer-sec2"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={2}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2>Products</h2>
                    </div>
                    <div className="footer-tabs">
                        <p>Integrations</p>
                        <p>Solutions</p>
                        <p>Features</p>
                        <p>Enterprise</p>
                    </div>
                </motion.div>

                {/* Section 4: Email Form */}
                <motion.div
                    className="footer-sec3"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={3}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2>Get Email Notifications</h2>
                    </div>
                    <div className="footer-sec3-part2">
                        <p>Generate outside the box thinking with the possibility to targtet the low</p>
                        <div className="email-input2">
                            <input type="input" placeholder="Enter email...." />
                            <button>Submit</button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Copyright & Social Media */}
            <motion.div
                className="copyrights"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
            >
                <p>© 2023 Lookscout. All Rights Reserved.</p>
                <div className="social-medias">
                    {["fb.png", "google.png", "apple.png", "insta.png"].map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`icon-${i}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
