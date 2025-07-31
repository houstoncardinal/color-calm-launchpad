import Navigation from "@/components/layout/Navigation";
import ServicesSection from "@/components/sections/ServicesSection";
import ColorCalmMethodSection from "@/components/sections/ColorCalmMethodSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const Services = () => {
  // Enhanced motion values for beautiful gradients
  const color = useMotionValue("#13FFAA");
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(var(--pure-clean)) 30%, ${color})`;

  return (
    <motion.div 
      style={{ backgroundImage }}
      className="min-h-screen relative overflow-hidden"
    >
      <Navigation />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 right-10 w-80 h-80 bg-gradient-to-br from-ocean-trust/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-sage-harmony/30 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-lavender-peace/15 to-transparent rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="pt-20 relative z-10">
        <ServicesSection />
        <ColorCalmMethodSection />
        <ContactSection />
      </div>
    </motion.div>
  );
};

export default Services;