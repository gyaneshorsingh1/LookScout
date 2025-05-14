"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./herosection.css";

export default function HeroSection() {
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const sendNotification = async () => {
    try {
      const response = await fetch("/api/notify", { method: "POST" });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      if (Notification.permission === "granted") {
        const registration = await navigator.serviceWorker.ready;
        registration.showNotification("🔔 New Message", {
          body: data.message,
          icon: "/lookscout-small-icon.png",
        });

        const updatedCount = clickCount + 1;
        setClickCount(updatedCount);
        const newMsg = `${data.message} (Sent ${updatedCount} time${updatedCount > 1 ? "s" : ""})`;
        setMessage(newMsg);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => {
        setMessage("");
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [message]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);


  return (
    <>
      <div className="hero-section">
        <div className="hero-main">
          <div className="left-hero">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Your Supercharged <br /> Design Workflow.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We’ve been told it is not possible to overachieve our customers’ <br />
              expectations. We have not reinvented the wheel, we decided to build upon it.
            </motion.p>

            <motion.button
              onClick={sendNotification}
              className="notif-btn"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Send Notification
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>Who supports us</p>
              <div className="com-logos">
                {["logo2.png", "logo3.png", "logo4.png", "logo5.png"].map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo}
                    alt="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="right-hero"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-box">
              {message && <div className="notification-message">{message}</div>}
              <img src="hero-img.png" alt="hero img" className="hero-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
