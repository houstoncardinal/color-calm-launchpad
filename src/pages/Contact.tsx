import Navigation from "@/components/layout/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, MessageCircle, Star, CheckCircle, Calendar, Award } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  // Subtle motion values for professional look
  const color = useMotionValue("hsl(206, 82%, 45%)");
  const COLORS = ["hsl(206, 82%, 45%)", "hsl(206, 82%, 55%)", "hsl(206, 82%, 35%)"];
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, white 60%, ${color}10)`;

  const locations = [
    {
      area: "Central Houston",
      neighborhoods: ["River Oaks", "Montrose", "Museum District", "Midtown"],
      responseTime: "Same day",
      distance: "0-10 miles"
    },
    {
      area: "West Houston", 
      neighborhoods: ["Katy", "Memorial", "Galleria", "Westchase"],
      responseTime: "Next day",
      distance: "10-25 miles"
    },
    {
      area: "North Houston",
      neighborhoods: ["Spring", "The Woodlands", "Tomball", "Cypress"],
      responseTime: "Next day",
      distance: "15-30 miles"
    },
    {
      area: "Southwest Houston",
      neighborhoods: ["Sugar Land", "Missouri City", "Pearland", "Friendswood"],
      responseTime: "Next day",
      distance: "15-25 miles"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "River Oaks",
      rating: 5,
      text: "Absolutely transformed our home! The attention to detail is incredible.",
      service: "Residential Cleaning"
    },
    {
      name: "David L.",
      location: "Katy",
      rating: 5,
      text: "Professional, reliable, and trustworthy. Highly recommend!",
      service: "Airbnb Management"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "24hrs", label: "Response Time" },
    { number: "5-Star", label: "Rating" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <motion.div 
      style={{ backgroundImage }}
      className="min-h-screen relative overflow-hidden"
    >
      <Navigation />
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-ocean-trust/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-64 h-64 bg-gray-200/40 rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -15, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-16 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-6xl font-extrabold font-serif text-gray-800 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get Your <span className="text-ocean-trust">Free Quote</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to transform your space? We respond within 24 hours with a personalized quote. 
              Call us at <span className="font-bold text-ocean-trust">832-994-3724</span> for immediate assistance.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-ocean-trust">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Contact Options */}
      <section className="relative py-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us Today</h2>
            <p className="text-gray-600">Choose your preferred way to get in touch</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: Phone, 
                title: "Call Now", 
                href: "tel:832-994-3724", 
                text: "832-994-3724", 
                subtitle: "Mon-Fri 8AM-6PM",
                badge: "Instant Response"
              },
              { 
                icon: MessageCircle, 
                title: "Text Us", 
                href: "sms:832-994-3724", 
                text: "Send a Text", 
                subtitle: "Quick responses",
                badge: "Fast Reply"
              },
              { 
                icon: Mail, 
                title: "Email", 
                href: "mailto:hello@exclusivepro.com", 
                text: "hello@exclusivepro.com", 
                subtitle: "24hr response",
                badge: "Professional"
              }
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
                  <Card className="relative p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 overflow-hidden h-full">
                    <Badge className="absolute top-4 right-4 bg-ocean-trust text-white text-xs">
                      {contact.badge}
                    </Badge>
                    
                    <motion.div 
                      className="w-16 h-16 bg-ocean-trust rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{contact.title}</h3>
                    
                    <motion.a 
                      href={contact.href} 
                      className="text-lg font-semibold text-ocean-trust hover:text-ocean-trust/80 transition-colors block mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.text}
                    </motion.a>
                    
                    <p className="text-gray-600 text-sm">{contact.subtitle}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by Houston's top families and businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white shadow-lg border border-gray-200/50">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                    <Badge variant="outline" className="text-ocean-trust border-ocean-trust">
                      {testimonial.service}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve Houston and surrounding areas with flexible scheduling and quick response times.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-ocean-trust/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-ocean-trust" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{location.area}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4" />
                        {location.responseTime}
                      </div>
                      <div className="text-xs text-ocean-trust font-medium">
                        {location.distance}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {location.neighborhoods.map((neighborhood, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-ocean-trust" />
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* Emergency Contact */}
      <section className="py-16 bg-ocean-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Emergency & Same-Day Service</h2>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Need urgent help? We offer same-day and emergency cleaning services for critical situations. 
              OSHA certified and fully insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-ocean-trust hover:bg-gray-100 font-semibold"
                asChild
              >
                <a href="tel:832-994-3724" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: 832-994-3724
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-ocean-trust font-semibold"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Online
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;