import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-calm-living.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Serene, organized living space showcasing the Color Calm Method"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pure-clean/95 via-serenity-blue/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-peace/30 rounded-full border border-lavender-peace/50">
              <Sparkles className="w-4 h-4 text-plum-luxury" />
              <span className="text-sm font-medium text-text-primary">
                Introducing the Color Calm Method™
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary leading-tight">
                From Overwhelmed
                <span className="block text-ocean-trust">to Organized</span>
                <span className="block text-forest-calm">to Present</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
                More than cleaning—we create color-coded calm, organized living, 
                and the emotional space for busy moms to connect with their children and truly relax.
              </p>
            </div>

            {/* Emotional Hook */}
            <div className="bg-warm-embrace/50 p-6 rounded-2xl border border-sage-harmony/30">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-sunset-warmth mt-1 flex-shrink-0" />
                <p className="text-text-primary font-medium">
                  "When your space is organized, your mind is free to focus on what truly matters—
                  <span className="text-ocean-trust font-semibold">precious moments with your family.</span>"
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="xl" className="gap-3">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Learn the Color Calm Method
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-forest-calm rounded-full"></span>
                5-Star Service
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sunset-warmth rounded-full"></span>
                Bonded & Insured
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-plum-luxury rounded-full"></span>
                Color Theory Certified
              </div>
            </div>
          </div>

          {/* Right side - Could be another image or testimonial */}
          <div className="hidden lg:block">
            <div className="bg-gradient-calm p-8 rounded-3xl shadow-luxury">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-trust rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-pure-clean" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    The Color Calm Method
                  </h3>
                  <p className="text-text-secondary">
                    Our signature approach combines professional cleaning with color psychology 
                    to create spaces that naturally promote peace and organization.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-serenity-blue rounded-full"></div>
                    <span className="text-text-primary">Color-coded organization systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-sage-harmony rounded-full"></div>
                    <span className="text-text-primary">Stress-reducing space design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-lavender-peace rounded-full"></div>
                    <span className="text-text-primary">Mindful maintenance systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-ocean-trust rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ocean-trust rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;