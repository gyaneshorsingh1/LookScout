"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./herosection.css";

export default function HeroSection() {
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);



const sendNotification = async () => {
  try {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isInStandaloneMode = window.navigator.standalone === true;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    console.log("User Agent:", navigator.userAgent);
    console.log("iOS:", isIOS, "Standalone:", isInStandaloneMode, "Safari:", isSafari);
    
    // iPhone needs to be added to Home Screen for notifications to work only on Safari
    if (isIOS && isSafari && !isInStandaloneMode) {
      toast.error("📱 iPhone Safari requires app to be added to Home Screen for notifications.");
      return;
    }

    // Check if the environment supports service workers and showNotification
    if (!navigator.serviceWorker || !('showNotification' in ServiceWorkerRegistration.prototype)) {
      toast.error("❌ Notifications not supported in this environment.");
      return;
    }

    // Ask for notification permission if it's not granted yet
    if (Notification.permission !== "granted") {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        toast.error("🚫 Notification permission denied.");
        return;
      }
      toast.success("✅ Permission granted.");
    }

    // Fetch the notification data
    const response = await fetch("/api/notify", { method: "POST" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Ensure service worker is registered before showing notification
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
      toast.error("⚠️ Service worker not registered.");
      return;
    }

    // Show the notification with the received message
    registration.showNotification("🔔 New Message", {
      body: data.message,
      icon: "/lookscout-small-icon.png",
    });

    toast.success(data.message);

  } catch (error) {
    console.error("Notification error:", error);
    toast.error(`❌ ${error.message || "Something went wrong."}`);
  }
};







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
              transition={{ delay: 0.4, duration: 0.4 }}
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
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.2 }}
                    viewport={{ once: false }}
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
              
              <img src="hero-img.png" alt="hero img" className="hero-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
