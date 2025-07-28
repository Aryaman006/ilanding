import AboutUsSection from "@/comonents/AboutUs";
import ContactSection from "@/comonents/Contact";
import FaqSection from "@/comonents/Faq";
import Features from "@/comonents/Features2";
import Footer from "@/comonents/Footer";
import HeroSection from "@/comonents/HeroSection";
import IndustriesSection from "@/comonents/IndustriesWeServe";
import Navbar from "@/comonents/Navbar";
import HowItWorksSection from "@/comonents/OurProcess";
import DeviceFeatures from "@/comonents/Phone";
import PricingSection from "@/comonents/Pricing";
import ServicesSection from "@/comonents/Services";
import StatsSection2 from "@/comonents/StatsSection2";
import Testimonials from "@/comonents/Testimonials";
import FeaturesSection from "@/comonents/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutUsSection />
      </section>

      <section id="features">
      <FeaturesSection/>
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="stats">
        <StatsSection2 />
      </section>

      <section id="services">
        <ServicesSection />
        <IndustriesSection/>
      </section>

      <HowItWorksSection/>

      <section id="pricing">
        <PricingSection />
      </section>

      {/* <section id="faq">
        <FaqSection />
      </section> */}

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
