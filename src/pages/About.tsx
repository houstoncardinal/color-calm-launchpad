import Navigation from "@/components/layout/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Award, Users, Heart, Star, Shield, Clock, Sparkles, Zap } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  // Enhanced motion values for beautiful gradients
  const color = useMotionValue("#13FFAA");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(var(--pure-clean)) 40%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}33`;

  const values = [
    {
      icon: Heart,
      title: "Family-Centered",
      description: "We understand the challenges of modern family life and create solutions that work for real families."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Fully insured, bonded, and trusted by Houston's top property managers and families."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "OSHA certified, bloodborne pathogen trained, and committed to the highest standards."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We've helped hundreds of families find peace and organization in their homes."
    }
  ];

  const team = [
    {
      name: "Sarah Martinez",
      role: "Founder & CEO",
      description: "Mother of three with a passion for color psychology and family organization.",
      image: "/1.jpeg"
    },
    {
      name: "Maria Rodriguez",
      role: "Lead Organizer",
      description: "Expert in creating kid-friendly systems that actually work for busy families.",
      image: "/2.jpeg"
    },
    {
      name: "David Chen",
      role: "Commercial Director",
      description: "OSHA certified specialist handling our medical and commercial cleaning operations.",
      image: "/3.jpeg"
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
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-ocean-trust/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-lavender-peace/30 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-sage-harmony/40 to-transparent rounded-full blur-xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 z-10"
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
            About <span className="bg-gradient-to-r from-ocean-trust to-lavender-peace bg-clip-text text-transparent">Exclusive Pro</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Founded by a busy mom who understood the overwhelming challenge of keeping a family organized, 
            we've grown into Houston's most trusted cleaning and organization service.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="relative py-20 bg-gradient-to-r from-white/80 via-sage-harmony/30 to-serenity-blue/20 backdrop-blur-sm">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,hsl(var(--ocean-trust)),transparent)]"></div>
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-ocean-trust mb-6 bg-gradient-to-r from-ocean-trust to-forest-calm bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  It started with a simple realization: traditional cleaning services weren't addressing 
                  the real challenge families face—maintaining organization and peace in their daily lives.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  As a mother of three, our founder Sarah discovered that color psychology could transform 
                  not just how a space looked, but how it functioned for the entire family. Children 
                  naturally responded to color-coded systems, making cleanup time less stressful for everyone.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Today, we've helped over 500 families create organized, peaceful homes and supported 
                  dozens of property managers and business owners maintain their spaces to the highest standards.
                </motion.p>
              </div>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  style={{ border, boxShadow }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-ocean-trust to-forest-calm text-white hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href="/contact">Start Your Transformation</a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/logo.jpg" 
                alt="Exclusive Pro Cleaning Services team" 
                className="rounded-3xl shadow-luxury w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-serenity-blue/20 p-6 rounded-2xl shadow-floating backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-ocean-trust to-forest-calm bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    500+
                  </motion.div>
                  <div className="text-sm text-text-secondary">Happy Families</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-br from-serenity-blue/30 via-sage-harmony/20 to-lavender-peace/30">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-ocean-trust/20 to-transparent rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-lavender-peace/20 to-transparent rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-ocean-trust to-plum-luxury bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything we do is guided by these core principles that put families and trust first.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
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
                  <Card className="relative p-6 text-center bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg shadow-luxury hover:shadow-floating transition-all duration-500 border border-white/20 overflow-hidden">
                    <GlowingEffect 
                      disabled={false}
                      spread={25}
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
                    <h3 className="text-xl font-bold text-ocean-trust mb-2 relative z-10">{value.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed relative z-10">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gradient-to-b from-white/90 to-serenity-blue/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-ocean-trust to-forest-calm bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The passionate people behind Houston's most trusted cleaning and organization service.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg shadow-luxury hover:shadow-floating transition-all duration-500 border border-white/30">
                  <GlowingEffect 
                    disabled={false}
                    spread={20}
                    proximity={80}
                    blur={0}
                    borderWidth={1}
                    movementDuration={3}
                  />
                  <div className="relative aspect-square bg-gradient-to-br from-serenity-blue/30 to-lavender-peace/40 flex items-center justify-center overflow-hidden">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-trust/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative p-6 z-10">
                    <h3 className="text-xl font-bold text-ocean-trust mb-1 group-hover:text-forest-calm transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-forest-calm font-medium mb-3">{member.role}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-trust via-forest-calm to-plum-luxury overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_600px_at_50%_200px,rgba(255,255,255,0.1),transparent)]"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join hundreds of Houston families who've discovered the peace that comes with truly organized living.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="lg" className="shadow-luxury" asChild>
                <a href="/contact">Get Free Quote</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/80 text-white hover:bg-white hover:text-ocean-trust backdrop-blur-sm shadow-luxury" 
                asChild
              >
                <a href="tel:832-994-3724">Call Now: 832-994-3724</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;