import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar, Clock, Star, Send, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "832-994-3724",
      subtitle: "Mon-Fri 8AM-6PM",
      href: "tel:832-994-3724",
      bgColor: "bg-ocean-trust/10"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@exclusivepro.com",
      subtitle: "24hr response time",
      href: "mailto:hello@exclusivepro.com",
      bgColor: "bg-gray-100"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Houston, TX",
      subtitle: "Serving Houston & surrounding areas",
      href: null,
      bgColor: "bg-ocean-trust/5"
    }
  ];

  const serviceTypes = [
    "Residential Cleaning",
    "Airbnb Management", 
    "Move-In/Move-Out",
    "Construction Cleanup",
    "Medical/Office Cleaning",
    "Organization Services",
    "Emergency Cleaning",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready for a spotless space? Fill out the form below and we'll respond within 24 hours with a personalized quote.
          </p>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Badge variant="outline" className="px-4 py-2 text-ocean-trust border-ocean-trust">
              <Shield className="w-4 h-4 mr-2" />
              Fully Insured
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-ocean-trust border-ocean-trust">
              <Star className="w-4 h-4 mr-2" />
              5-Star Rated
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-ocean-trust border-ocean-trust">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              OSHA Certified
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-white shadow-xl border border-gray-200/50 relative overflow-hidden">
              {/* Subtle accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-trust/5 rounded-bl-3xl"></div>
              
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-semibold text-gray-700">First Name *</label>
                    <Input 
                      placeholder="Sarah" 
                      className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20 transition-all duration-300" 
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                    <Input 
                      placeholder="Johnson" 
                      className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20 transition-all duration-300" 
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <Input 
                      type="email" 
                      placeholder="sarah@example.com" 
                      className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20 transition-all duration-300" 
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <Input 
                      type="tel" 
                      placeholder="832-994-3724" 
                      className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20 transition-all duration-300" 
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="text-sm font-semibold text-gray-700">Service Type</label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service, index) => (
                        <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="text-sm font-semibold text-gray-700">Tell us about your needs</label>
                  <Textarea 
                    placeholder="Please describe your cleaning or organization needs, property size, frequency, and any special requirements..." 
                    className="border-gray-300 focus:border-ocean-trust focus:ring-ocean-trust/20 min-h-[120px] transition-all duration-300" 
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg"
                    className="bg-ocean-trust text-white hover:bg-ocean-trust/90 transition-all duration-300 w-full font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Get My Free Quote
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-white shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-ocean-trust" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-ocean-trust font-semibold hover:text-ocean-trust/80 transition-colors block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-ocean-trust font-semibold">{info.value}</div>
                        )}
                        <p className="text-sm text-gray-600 mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}

            {/* Quick Call to Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-ocean-trust to-ocean-trust/90 text-white shadow-xl">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Call us now for same-day emergency cleaning services
                  </p>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-ocean-trust font-semibold w-full"
                    asChild
                  >
                    <a href="tel:832-994-3724">
                      Call 832-994-3724
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;