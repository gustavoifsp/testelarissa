import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TherapyApproachSection from "@/components/TherapyApproachSection";
import ServicesSection from "@/components/ServicesSection";
import AudienceSection from "@/components/AudienceSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TherapyApproachSection />
      <AudienceSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
