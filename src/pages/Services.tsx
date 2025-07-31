import Navigation from "@/components/layout/Navigation";
import ServicesSection from "@/components/sections/ServicesSection";
import ColorCalmMethodSection from "@/components/sections/ColorCalmMethodSection";
import ContactSection from "@/components/sections/ContactSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ServicesSection />
        <ColorCalmMethodSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Services;