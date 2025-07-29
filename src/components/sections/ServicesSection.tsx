import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Building2, Palette, Clock, Shield, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Cleaning",
      subtitle: "For Busy Families & Moms",
      description: "Transform your home into a peaceful sanctuary where your family can truly relax and connect.",
      features: [
        "Color Calm Method organization",
        "Child-safe cleaning products",
        "Stress-reducing space design",
        "Flexible scheduling for busy families"
      ],
      price: "Starting at $180",
      popular: true
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial Cleaning",
      subtitle: "For Professional Spaces",
      description: "Create productive, harmonious work environments that inspire calm focus and professional excellence.",
      features: [
        "Color psychology for productivity",
        "After-hours service available",
        "Professional-grade equipment",
        "Customized cleaning protocols"
      ],
      price: "Custom Pricing",
      popular: false
    }
  ];

  const addOnServices = [
    {
      icon: Palette,
      title: "Color Organization Consultation",
      description: "Deep-dive color psychology consultation to design your perfect calm space."
    },
    {
      icon: Clock,
      title: "Maintenance Systems Setup",
      description: "Custom maintenance routines that make staying organized effortless."
    },
    {
      icon: Shield,
      title: "Deep Cleaning Reset",
      description: "Complete home reset using our signature Color Calm Method."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-calm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            Choose Your Path to
            <span className="block text-ocean-trust">Peace & Organization</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you're a busy mom seeking balance or a business owner wanting productive spaces, 
            we have the perfect solution designed with color psychology principles.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`relative overflow-hidden bg-pure-clean hover:shadow-floating transition-all duration-500 transform hover:scale-[1.02] ${
                service.popular 
                  ? 'border-2 border-ocean-trust shadow-luxury' 
                  : 'border border-serenity-blue/30 shadow-card'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-trust text-pure-clean px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8 space-y-6">
                  {/* Service Icon & Title */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-trust rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-pure-clean" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-ocean-trust font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-forest-calm rounded-full"></div>
                        <span className="text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="border-t border-serenity-blue pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-ocean-trust">
                        {service.price}
                      </span>
                      <span className="text-sm text-text-secondary">
                        per visit
                      </span>
                    </div>
                    <Button 
                      variant={service.popular ? "luxury" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Add-On Services */}
        <div className="bg-warm-embrace/30 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-text-primary mb-4">
              Enhance Your Experience
            </h3>
            <p className="text-text-secondary">
              Add these specialized services to maximize your Color Calm transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOnServices.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-trust rounded-xl mx-auto flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-pure-clean" />
                  </div>
                  <h4 className="font-semibold text-text-primary">
                    {addon.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {addon.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;