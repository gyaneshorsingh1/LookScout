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

export default function Home() {
  return (
    <>
    <div className="first-section bg-primary-900">
       <Navbar />
       <HeroSection />

    </div>
    <div className="message-for-all">
        <Message />
    </div>
    <div className="product-features">
        <ProductFeatures />
    </div>
    <div className="section4-layout">
      <LayoutFeature />
    </div>
    <div className="thanks-section">
        <Thanks />
    </div>
    <div className="blogs-part">
        <Blogs />
    </div>
    <div className="usedby-companies">
      <UsedBy />
    </div>
    <div className="sendemail-part">
      <SendEmail />
    </div>
       
       <div className="footer">
          <Footer />
       </div>
    </>
  );
}
