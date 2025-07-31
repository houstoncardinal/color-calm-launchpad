import Navigation from "@/components/layout/Navigation";
import FantasticHeroSection from "@/components/sections/fantastic-hero-section";
import ColorCalmMethodSection from "@/components/sections/ColorCalmMethodSection";
import StaggerTestimonialsSection from "@/components/sections/StaggerTestimonialsSection";
import ColorPsychologyScienceSection from "@/components/sections/ColorPsychologyScienceSection";
import TransformBenefitsSection from "@/components/sections/TransformBenefitsSection";
import { Features } from "@/components/blocks/features-4";
import { Footer } from "@/components/ui/large-name-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* New Navigation Bar */}
      <Navigation />
      <main>
        <FantasticHeroSection />
        <Features />
        <ColorPsychologyScienceSection />
        <TransformBenefitsSection />
        <ColorCalmMethodSection />
        <StaggerTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
