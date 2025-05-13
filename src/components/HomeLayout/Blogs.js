"use client";

import "./message.css";
import "./blogs.css";
import { motion } from "framer-motion";

export default function Blogs() {
    const blogCards = [
        { img: "blog1.png", alt: "blog1" },
        { img: "blog2.png", alt: "blog2" },
        { img: "blog3.png", alt: "blog3" }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4, // ⏳ slightly more delay between cards
                duration: 0.7,
                ease: "easeOut"
            },
        }),
    };

    return (
        <section className="blogs-section">
            <div className="blogs-container">

                {/* Animated heading */}
                <motion.div
                    className="message-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>Latest Blog Posts</h2>
                    <p>
                        Completely synergize resource taxing relationships via premier niche markets.
                        Professionally cultivate one-to-one customer service with robust ideas.
                    </p>
                </motion.div>

                {/* Blog cards */}
                <div className="blogs">
                    {blogCards.map((blog, index) => (
                        <motion.div
                            key={index}
                            className="card1"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img src={blog.img} alt={blog.alt} />
                            <h3>Organize your digital assets with a new methodology here.</h3>
                            <p>
                                Podcasting operational management inside of workflows to establish a framework seamless.
                                Convergence collaboratively.
                            </p>
                            <div className="writer">
                                <div>
                                    <div className="ceo-card">
                                        <div>
                                            <img src="Avatar.png" alt="avatar" />
                                        </div>
                                        <div>
                                            <h4>Lisa Smith</h4>
                                            <p>CEO Company</p>
                                        </div>
                                    </div>
                                </div>
                                <p>25 Apr</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
