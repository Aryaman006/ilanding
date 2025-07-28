import AboutUsSection from "@/comonents/AboutUs";
import ContactSection from "@/comonents/Contact";
import FaqSection from "@/comonents/Faq";
import FeaturesSection from "@/comonents/Features";
import Features from "@/comonents/Features2";
import Footer from "@/comonents/Footer";
import HeroSection from "@/comonents/HeroSection";
import Navbar from "@/comonents/Navbar";
import DeviceFeatures from "@/comonents/Phone";
import PricingSection from "@/comonents/Pricing";
import ServicesSection from "@/comonents/Services";
import StatsSection2 from "@/comonents/StatsSection2";
import Testimonials from "@/comonents/Testimonials";
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
        <FeaturesSection />
        <Features />
        <DeviceFeatures />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="stats">
        <StatsSection2 />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
