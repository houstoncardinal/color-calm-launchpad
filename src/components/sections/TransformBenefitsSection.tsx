import React from "react";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Reduced stress and anxiety in your daily environment",
  "Effortless organization that maintains itself",
  "More quality time for family connection",
  "Increased focus and mental clarity",
  "A home that supports your wellbeing",
  "Color-coded systems everyone can follow",
];

const serviceItems = [
  { id: "1", text: "Residential Cleaning" },
  { id: "2", text: "Airbnb & Rental Cleaning" },
  { id: "3", text: "Move-In/Move-Out Cleaning" },
  { id: "4", text: "Fire Restoration Cleaning" },
  { id: "5", text: "Medical & Healthcare Cleaning" },
  { id: "6", text: "Bloodborne Pathogen Certified" },
];

export default function TransformBenefitsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                Transform Your Life, Not Just Your Space
              </h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                When your environment is designed with color psychology principles, every day becomes more peaceful, productive, and joyful.
              </p>
            </div>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit} 
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <span className="mt-1 text-brandGreen group-hover:scale-110 transition-transform duration-300">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 font-medium text-base group-hover:text-gray-700 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Powerful CTA */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 group flex items-center gap-2 font-semibold"
                    asChild
                  >
                    <a href="#contact">
                      <span>Start Your Transformation Today</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </motion.div>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-2 text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-medium transition-all duration-300"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200/50 inline-block">
                <p className="text-sm font-medium text-gray-700">
                  ⭐ Free Consultation • Same-Day Availability • 100% Satisfaction Guarantee
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tilted Scroll Services */}
          <div className="relative">
            <TiltedScroll 
              items={serviceItems}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 