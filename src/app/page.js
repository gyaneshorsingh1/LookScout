"use client";

import Navbar from "@/components/Header/Navbar";
import "./page.css"
import HeroSection from "@/components/HomeLayout/HeroSection";
import Message from "@/components/HomeLayout/Message";
import ProductFeatures from "@/components/HomeLayout/ProductFeatures";
import LayoutFeature from "@/components/HomeLayout/LayoutFeature";
import Thanks from "@/components/HomeLayout/Thanks";
import Blogs from "@/components/HomeLayout/Blogs";
import UsedBy from "@/components/HomeLayout/UsedBy";
import SendEmail from "@/components/HomeLayout/SendEmail";
import Footer from "@/components/Footer/Footer";
import CustomerSays from "@/components/HomeLayout/CustomerSays";
import AnimatedSection from "@/components/Animation/AnimatedSection";

export default function Home() {



  return (
    <>
    <div className="f-homepage">

    
      
        <div className="first-section bg-primary-900">
          <Navbar />
          <HeroSection />
        </div>

      <AnimatedSection delay={0.1}>
        <div className="message-for-all">
          <Message />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="product-features">
          <ProductFeatures />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="section4-layout">
          <LayoutFeature />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="customer-says-part">
          <CustomerSays />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="thanks-section">
          <Thanks />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="blogs-part">
          <Blogs />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="usedby-companies">
          <UsedBy />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="sendemail-part">
          <SendEmail />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="footer">
          <Footer />
        </div>
      </AnimatedSection>
      </div>
    </>
  );
}
