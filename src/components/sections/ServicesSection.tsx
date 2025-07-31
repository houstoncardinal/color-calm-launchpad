import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Building2, Palette, Clock, Shield, Star } from "lucide-react";

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
    <section id="services" className="py-24 bg-gradient-to-b from-white via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold font-serif text-ocean-trust mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Comprehensive cleaning, organization, and property care for homes, rentals, businesses, and clinics. Trusted by Houston’s top property managers, realtors, and families.
          </p>
        </div>
        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] border-2 border-ocean-trust/10 hover:border-ocean-trust/40 shadow-lg group`}> 
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-ocean-trust to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-ocean-trust mb-2">
                      {service.title}
                    </h3>
                    <p className="text-ocean-trust font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-serenity-blue pt-6 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-ocean-trust">
                        {service.price}
                      </span>
                      <span className="text-sm text-text-secondary">
                        per visit
                      </span>
                    </div>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 w-full group-hover:scale-105"
                      asChild
                    >
                      <a href="#contact">
                        Get Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        {/* Add-On Services */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-12 shadow-lg border border-ocean-trust/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-ocean-trust mb-4">
              Enhance Your Experience
            </h3>
            <p className="text-text-secondary">
              Add these specialized services or call us at <span className="font-bold text-ocean-trust">832-994-3724</span> for custom solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-xl mx-auto flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-ocean-trust">
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