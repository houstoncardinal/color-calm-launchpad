import Navigation from "@/components/layout/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Award, Users, Heart, Star, Shield, Clock } from "lucide-react";

const About = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-serene-mist via-white to-calming-sage">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-6xl font-extrabold font-serif text-ocean-trust mb-6 tracking-tight">
            About Exclusive Pro
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Founded by a busy mom who understood the overwhelming challenge of keeping a family organized, 
            we've grown into Houston's most trusted cleaning and organization service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ocean-trust mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  It started with a simple realization: traditional cleaning services weren't addressing 
                  the real challenge families face—maintaining organization and peace in their daily lives.
                </p>
                <p>
                  As a mother of three, our founder Sarah discovered that color psychology could transform 
                  not just how a space looked, but how it functioned for the entire family. Children 
                  naturally responded to color-coded systems, making cleanup time less stressful for everyone.
                </p>
                <p>
                  Today, we've helped over 500 families create organized, peaceful homes and supported 
                  dozens of property managers and business owners maintain their spaces to the highest standards.
                </p>
              </div>
              <div className="mt-8">
                <RainbowButton asChild>
                  <a href="/contact">Start Your Transformation</a>
                </RainbowButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.jpg" 
                alt="Exclusive Pro Cleaning Services team" 
                className="rounded-3xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ocean-trust">500+</div>
                  <div className="text-sm text-text-secondary">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-trust mb-4">Our Values</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything we do is guided by these core principles that put families and trust first.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ocean-trust mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-trust mb-4">Meet Our Team</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The passionate people behind Houston's most trusted cleaning and organization service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ocean-trust mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-trust to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of Houston families who've discovered the peace that comes with truly organized living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact">Get Free Quote</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-trust" asChild>
              <a href="tel:832-994-3724">Call Now: 832-994-3724</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;