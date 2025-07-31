import Navigation from "@/components/layout/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MapPin, Clock, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  // Enhanced motion values for beautiful gradients
  const color = useMotionValue("#13FFAA");
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(var(--pure-clean)) 40%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}33`;

  const locations = [
    {
      area: "Central Houston",
      neighborhoods: ["River Oaks", "Montrose", "Museum District", "Midtown"],
      responseTime: "Same day"
    },
    {
      area: "West Houston", 
      neighborhoods: ["Katy", "Memorial", "Galleria", "Westchase"],
      responseTime: "Next day"
    },
    {
      area: "North Houston",
      neighborhoods: ["Spring", "The Woodlands", "Tomball", "Cypress"],
      responseTime: "Next day"
    },
    {
      area: "Southwest Houston",
      neighborhoods: ["Sugar Land", "Missouri City", "Pearland", "Friendswood"],
      responseTime: "Next day"
    }
  ];

  return (
    <motion.div 
      style={{ backgroundImage }}
      className="min-h-screen relative overflow-hidden"
    >
      <Navigation />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-ocean-trust/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-60 right-20 w-64 h-64 bg-gradient-to-br from-lavender-peace/30 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-br from-sage-harmony/40 to-transparent rounded-full blur-xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1 
            className="text-6xl font-extrabold font-serif text-ocean-trust mb-6 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-ocean-trust to-lavender-peace bg-clip-text text-transparent">Contact</span> Us
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to transform your space? We're here to help. Call us at <span className="font-bold text-ocean-trust">832-994-3724</span> 
            or fill out the form below for your free consultation.
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Contact Options */}
      <section className="relative py-12 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: "Call Now", href: "tel:832-994-3724", text: "832-994-3724", subtitle: "Mon-Fri 8AM-6PM" },
              { icon: MessageCircle, title: "Text Us", href: "sms:832-994-3724", text: "Send a Text", subtitle: "Quick responses" },
              { icon: Mail, title: "Email", href: "mailto:hello@exclusivepro.com", text: "hello@exclusivepro.com", subtitle: "24hr response" }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative p-8 text-center bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-luxury hover:shadow-floating transition-all duration-500 border border-white/30 overflow-hidden">
                    <GlowingEffect 
                      disabled={false}
                      spread={30}
                      proximity={60}
                      blur={0}
                      borderWidth={2}
                      movementDuration={2}
                    />
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-plum-luxury rounded-2xl mx-auto mb-4 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-ocean-trust mb-2 relative z-10">{contact.title}</h3>
                    <motion.a 
                      href={contact.href} 
                      className="text-lg font-medium text-ocean-trust hover:text-plum-luxury transition-colors relative z-10 block"
                      whileHover={{ scale: 1.05 }}
                      style={{ border, boxShadow }}
                    >
                      {contact.text}
                    </motion.a>
                    <p className="text-text-secondary text-sm mt-2 relative z-10">{contact.subtitle}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ocean-trust mb-4">Service Areas</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We proudly serve Houston and surrounding areas with flexible scheduling and quick response times.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-ocean-trust mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-ocean-trust mb-1">{location.area}</h3>
                    <div className="flex items-center gap-2 text-sm text-emerald-600">
                      <Clock className="w-4 h-4" />
                      {location.responseTime}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  {location.neighborhoods.map((neighborhood, idx) => (
                    <div key={idx} className="text-sm text-text-secondary">
                      • {neighborhood}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-ocean-trust to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Emergency Cleaning?</h2>
          <p className="text-xl text-white/90 mb-6">
            We offer same-day and emergency cleaning services for urgent situations.
          </p>
          <a 
            href="tel:832-994-3724"
            className="inline-flex items-center gap-2 bg-white text-ocean-trust px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now: 832-994-3724
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;