import Navigation from "@/components/layout/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Calendar, Clock, Home, Building2, Palette, Shield, Star, CheckCircle, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const Booking = () => {
  // Enhanced motion values for beautiful gradients
  const color = useMotionValue("#13FFAA");
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(var(--pure-clean)) 35%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}33`;

  const steps = [
    {
      step: "1",
      title: "Choose Your Service",
      description: "Select from residential, commercial, or specialized cleaning options"
    },
    {
      step: "2", 
      title: "Schedule Consultation",
      description: "We'll visit your space for a free assessment and custom quote"
    },
    {
      step: "3",
      title: "Transform Your Space",
      description: "Our certified team brings the Color Calm Method to your home or business"
    }
  ];

  const serviceOptions = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Cleaning",
      price: "Starting at $180",
      features: ["Deep cleaning", "Organization systems", "Color-coded solutions", "Family-friendly"]
    },
    {
      id: "commercial", 
      icon: Building2,
      title: "Commercial Cleaning",
      price: "Custom pricing",
      features: ["Office spaces", "Medical facilities", "OSHA compliant", "Flexible scheduling"]
    },
    {
      id: "specialty",
      icon: Shield,
      title: "Specialty Services",
      price: "Custom pricing", 
      features: ["Move-in/out", "Post-construction", "Fire restoration", "Emergency cleaning"]
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
          className="absolute top-24 right-16 w-80 h-80 bg-gradient-to-br from-ocean-trust/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-24 left-16 w-64 h-64 bg-gradient-to-br from-sage-harmony/30 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-lavender-peace/15 to-transparent rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
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
            <span className="bg-gradient-to-r from-ocean-trust to-plum-luxury bg-clip-text text-transparent">Book</span> Your Service
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to transform your space with the Color Calm Method? Schedule your free consultation today 
            and discover how we can bring peace and organization to your home or business.
          </motion.p>
        </div>
      </motion.section>

      {/* Process Steps */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-ocean-trust text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-ocean-trust mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-ocean-trust text-center mb-12">Choose Your Service</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {serviceOptions.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="relative p-8 bg-white shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-ocean-trust mb-2">{service.title}</h3>
                    <p className="text-xl font-semibold text-emerald-600">{service.price}</p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ocean-trust mb-4">Schedule Your Free Consultation</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Fill out the form below and we'll contact you within 24 hours to schedule your personalized consultation.
            </p>
          </div>
          
          <Card className="p-10 bg-white shadow-elegant">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">First Name *</label>
                  <Input placeholder="Sarah" className="border-ocean-trust/30 focus:border-ocean-trust" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Last Name *</label>
                  <Input placeholder="Johnson" className="border-ocean-trust/30 focus:border-ocean-trust" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Email Address *</label>
                  <Input type="email" placeholder="sarah@example.com" className="border-ocean-trust/30 focus:border-ocean-trust" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Phone Number *</label>
                  <Input type="tel" placeholder="832-994-3724" className="border-ocean-trust/30 focus:border-ocean-trust" />
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Service Type *</label>
                  <Select>
                    <SelectTrigger className="border-ocean-trust/30 focus:border-ocean-trust">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="airbnb">Airbnb Management</SelectItem>
                      <SelectItem value="move">Move-in/Move-out</SelectItem>
                      <SelectItem value="construction">Post-Construction</SelectItem>
                      <SelectItem value="medical">Medical Facility</SelectItem>
                      <SelectItem value="organization">Organization Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Property Size</label>
                  <Select>
                    <SelectTrigger className="border-ocean-trust/30 focus:border-ocean-trust">
                      <SelectValue placeholder="Select property size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">1-2 bedrooms / Small office</SelectItem>
                      <SelectItem value="medium">3-4 bedrooms / Medium office</SelectItem>
                      <SelectItem value="large">5+ bedrooms / Large office</SelectItem>
                      <SelectItem value="commercial">Commercial space</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-trust">Address *</label>
                <Input placeholder="123 Main Street, Houston, TX 77001" className="border-ocean-trust/30 focus:border-ocean-trust" />
              </div>

              {/* Preferred Schedule */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Preferred Day</label>
                  <Select>
                    <SelectTrigger className="border-ocean-trust/30 focus:border-ocean-trust">
                      <SelectValue placeholder="Select preferred day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">Preferred Time</label>
                  <Select>
                    <SelectTrigger className="border-ocean-trust/30 focus:border-ocean-trust">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-ocean-trust">Tell us about your needs</label>
                <Textarea 
                  placeholder="Describe your cleaning and organization needs, any special requirements, pets, or specific areas of focus..."
                  className="border-ocean-trust/30 focus:border-ocean-trust min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 w-full text-lg py-6"
                >
                  Schedule Free Consultation
                </Button>
                <p className="text-center text-sm text-text-secondary mt-4">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-gradient-to-r from-ocean-trust to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need to Talk to Someone Now?</h2>
          <p className="text-xl text-white/90 mb-6">
            Call us directly for immediate assistance or emergency cleaning services.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:832-994-3724" className="text-lg">
              Call Now: 832-994-3724
            </a>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;