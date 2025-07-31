import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star, ArrowRight, CheckCircle, Clock, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Book Your Consultation",
    description: "Schedule a free 15-minute consultation to discuss your needs and get a personalized quote.",
    icon: Phone,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    cta: "Book Free Consultation",
    ctaLink: "#contact"
  },
  {
    number: "02", 
    title: "Custom Service Plan",
    description: "We create a tailored cleaning and organization plan based on your space, lifestyle, and preferences.",
    icon: Calendar,
    color: "green",
    gradient: "from-emerald-500 to-teal-500",
    cta: "View Service Plans",
    ctaLink: "#services"
  },
  {
    number: "03",
    title: "Premium Service Delivery",
    description: "Our certified team arrives on time, equipped with professional tools and eco-friendly products.",
    icon: Star,
    color: "purple",
    gradient: "from-indigo-500 to-purple-500",
    cta: "See Our Process",
    ctaLink: "#process"
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Enjoy peace of mind with our maintenance plans and 24/7 customer support.",
    icon: Shield,
    color: "slate",
    gradient: "from-slate-600 to-gray-600",
    cta: "Join Maintenance Plan",
    ctaLink: "#maintenance"
  }
];

export default function ColorCalmMethodSection() {
  return (
    <section id="method" className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 leading-tight">
            Your Journey to a
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Cleaner Space
            </span>
          </h2>
          
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed mb-3">
            Experience our streamlined booking process designed for busy professionals and families. 
            From consultation to completion, we make premium cleaning services accessible and effortless.
          </p>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200/50">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-gray-700">Free Consultation • Same-Day Booking • 100% Satisfaction</span>
          </div>
        </div>

        {/* Redesigned Process Steps with Circular Icons and Connecting Lines */}
        <div className="relative mb-10">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-slate-200 transform -translate-y-1/2 hidden lg:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                {/* Circular Icon with Number */}
                <div className="flex flex-col items-center text-center mb-4">
                  <motion.div 
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl border-3 border-white group-hover:scale-110 transition-all duration-500 mb-4`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.12)"
                    }}
                  >
                    <step.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    
                    {/* Animated ring effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 lg:right-0 w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white font-bold text-xs">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 relative overflow-hidden"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
                  }}
                >
                  {/* Decorative accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 w-full py-3 px-4 rounded-xl group-hover:scale-105 shadow-lg border-0 text-sm group-hover:shadow-2xl"
                      asChild
                    >
                      <a href={step.ctaLink} className="flex items-center justify-center gap-2">
                        {step.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </motion.div>

                  {/* Decorative corner element */}
                  <div className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Main CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 py-4 px-8 text-base font-semibold group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>Book Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-ocean-trust text-ocean-trust hover:bg-ocean-trust hover:text-white transition-all duration-300 py-4 px-8 text-base font-semibold group"
                asChild
              >
                <a href="#services" className="flex items-center gap-3">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="inline-block p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200/50 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-sm font-medium text-gray-700">
              ⭐ 4.9/5 rating from 500+ satisfied clients • Same-day availability • 100% satisfaction guarantee
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}