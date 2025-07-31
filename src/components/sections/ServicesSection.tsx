import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Home, Building2, Palette, Clock, Shield, Star, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Cleaning",
      subtitle: "For Homes & Families",
      description: "Expert cleaning and organization for busy families and individuals. We help moms and families create peaceful, organized homes.",
      features: [
        "Routine & deep cleaning",
        "Organization systems for kids & families",
        "Move-in/move-out cleaning",
        "Flexible scheduling"
      ],
      price: "Starting at $180",
      popular: true
    },
    {
      id: "airbnb",
      icon: Building2,
      title: "Airbnb & Short-Term Rental Management",
      subtitle: "Turnover & Property Care",
      description: "We manage and clean Airbnbs and short-term rentals, helping clients grow from 3 to 9+ properties. Reliable, detail-oriented, and trusted by property owners.",
      features: [
        "Turnover cleaning & restocking",
        "Property inspections",
        "Custom checklists",
        "Guest-ready standards"
      ],
      price: "Custom Pricing",
      popular: false
    },
    {
      id: "move",
      icon: Clock,
      title: "Move-In/Move-Out Cleaning",
      subtitle: "For Realtors & Homeowners",
      description: "Prepare homes for showings or new owners. Trusted by realtors for fast, thorough, and reliable service.",
      features: [
        "Deep cleaning for showings",
        "Flexible scheduling",
        "Attention to detail",
        "Quick turnaround"
      ],
      price: "Custom Pricing",
      popular: false
    },
    {
      id: "restoration",
      icon: Shield,
      title: "Light Construction & Restoration Cleaning",
      subtitle: "Fire, Smoke, & Renovation",
      description: "Post-construction and fire restoration cleaning for homes and businesses. We recently restored a smoke shop after a fire—no job too tough!",
      features: [
        "Fire & smoke restoration",
        "Construction dust & debris removal",
        "Specialty cleaning equipment",
        "Certified & insured"
      ],
      price: "Custom Pricing",
      popular: false
    },
    {
      id: "medical",
      icon: Star,
      title: "Medical & Clinic Cleaning",
      subtitle: "OSHA & Bloodborne Pathogen Certified",
      description: "Professional cleaning for clinics and medical offices. We help you pass OSHA inspections and maintain a safe, sanitary environment.",
      features: [
        "OSHA-compliant cleaning",
        "Bloodborne pathogen certified",
        "Disinfection & sanitization",
        "Flexible after-hours service"
      ],
      price: "Custom Pricing",
      popular: false
    },
    {
      id: "organization",
      icon: Palette,
      title: "Organization Services for Families",
      subtitle: "Kid-Friendly Systems",
      description: "We help families, especially moms, create organized, kid-friendly spaces. Our unique color systems help children learn to stay organized.",
      features: [
        "Custom organization systems",
        "Kid-friendly solutions",
        "Color-coded options (optional)",
        "Hands-on support"
      ],
      price: "Custom Pricing",
      popular: false
    }
  ];

  const addOnServices = [
    {
      icon: Clock,
      title: "Same-Day & Emergency Cleaning",
      description: "Need urgent help? We offer same-day and emergency cleaning for homes, businesses, and rentals. Call 832-994-3724."
    },
    {
      icon: Shield,
      title: "Certified Disinfection",
      description: "Medical-grade disinfection for clinics, offices, and homes. OSHA and bloodborne pathogen certified."
    },
    {
      icon: Star,
      title: "Property Management Support",
      description: "We help property managers and realtors keep their listings show-ready and guest-ready."
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-white/90 via-serenity-blue/20 to-sage-harmony/30 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-ocean-trust/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lavender-peace/15 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-sage-harmony/20 to-transparent rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-extrabold font-serif bg-gradient-to-r from-ocean-trust to-plum-luxury bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-ocean-trust">Premium</span> Services
          </motion.h2>
          <motion.p 
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive cleaning, organization, and property care for homes, rentals, businesses, and clinics. Trusted by Houston's top property managers, realtors, and families.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg shadow-luxury hover:shadow-floating transition-all duration-500 border border-white/30 h-full">
                  <GlowingEffect 
                    disabled={false}
                    spread={35}
                    proximity={70}
                    blur={0}
                    borderWidth={2}
                    movementDuration={2.5}
                  />
                  
                  {service.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-r from-ocean-trust via-plum-luxury to-forest-calm text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-luxury backdrop-blur-sm border border-white/20">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                        Most Popular
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="relative p-8 space-y-6 z-10">
                    <div className="text-center">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-ocean-trust via-plum-luxury to-forest-calm rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl"></div>
                        <IconComponent className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold bg-gradient-to-r from-ocean-trust to-forest-calm bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <p className="text-plum-luxury font-semibold mb-4 group-hover:text-forest-calm transition-colors duration-300">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3 group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-5 h-5 bg-gradient-to-br from-forest-calm to-ocean-trust rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </motion.div>
                          <span className="text-text-primary text-sm font-medium group-hover/item:text-ocean-trust transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gradient-to-r from-serenity-blue via-sage-harmony to-lavender-peace pt-6 mt-6 bg-gradient-to-r from-serenity-blue/20 via-sage-harmony/20 to-lavender-peace/20 -mx-8 px-8 rounded-b-lg backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-6">
                        <motion.span 
                          className="text-2xl font-bold bg-gradient-to-r from-ocean-trust to-forest-calm bg-clip-text text-transparent"
                          whileHover={{ scale: 1.05 }}
                        >
                          {service.price}
                        </motion.span>
                        <span className="text-sm text-text-secondary font-medium">
                          per visit
                        </span>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg"
                          className="bg-gradient-to-r from-ocean-trust via-plum-luxury to-forest-calm text-white hover:shadow-floating transition-all duration-500 w-full group-hover:scale-105 font-bold shadow-luxury backdrop-blur-sm border border-white/20"
                          asChild
                        >
                          <a href="#contact" className="flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Get Free Quote
                            <Sparkles className="w-4 h-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Luxury corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-ocean-trust/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-forest-calm/10 to-transparent"></div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Add-On Services */}
        <motion.div 
          className="relative bg-gradient-to-br from-white/80 via-serenity-blue/20 to-sage-harmony/30 backdrop-blur-lg rounded-3xl p-12 shadow-luxury border border-white/30 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background accent elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ocean-trust/10 to-transparent rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-forest-calm/10 to-transparent rounded-tr-3xl"></div>
          
          <motion.div 
            className="text-center mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-ocean-trust to-plum-luxury bg-clip-text text-transparent mb-4">
              Enhance Your Experience
            </h3>
            <p className="text-text-secondary">
              Add these specialized services or call us at <span className="font-bold text-ocean-trust">832-994-3724</span> for custom solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {addOnServices.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center space-y-4 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-ocean-trust via-plum-luxury to-forest-calm rounded-2xl mx-auto flex items-center justify-center shadow-luxury group-hover:scale-110 transition-transform duration-500 relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                    <IconComponent className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                    />
                  </motion.div>
                  
                  <h4 className="font-bold text-ocean-trust group-hover:text-plum-luxury transition-colors duration-300">
                    {addon.title}
                  </h4>
                  
                  <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {addon.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;