import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-calm-living.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        {/* Floating Orbs for Luxury Feel */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-lavender-peace/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-serenity-blue/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-sage-harmony/25 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-pure-clean/80 backdrop-blur-md rounded-full border border-lavender-peace/30 shadow-card">
              <Sparkles className="w-5 h-5 text-plum-luxury" />
              <span className="text-sm font-semibold text-text-primary tracking-wide">
                INTRODUCING THE COLOR CALM METHOD™
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] text-text-primary">
                <span className="block">From</span>
                <span className="block text-ocean-trust">Overwhelmed</span>
                <span className="block">to</span>
                <span className="block text-forest-calm italic">Organized</span>
                <span className="block text-plum-luxury">& Present</span>
              </h1>
              
              <div className="max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-light leading-relaxed">
                  Transform your space with color psychology principles that create 
                  <span className="font-medium text-ocean-trust"> organized calm</span> and 
                  <span className="font-medium text-forest-calm"> emotional freedom</span> for busy families.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-pure-clean/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-sage-harmony/20 shadow-card">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-sunset-warmth" />
                </div>
                <div className="space-y-3">
                  <p className="text-text-primary font-medium text-lg leading-relaxed">
                    "When your space reflects calm through color and organization, your mind is free to focus on what truly matters—
                    <span className="text-ocean-trust font-semibold">precious moments with your family.</span>"
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-forest-calm" />
                      <span className="text-text-secondary">Color Psychology Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-ocean-trust" />
                      <span className="text-text-secondary">500+ Families Transformed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="luxury" size="xl" className="gap-3 shadow-floating">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="backdrop-blur-md">
                Discover the Method
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-forest-calm rounded-full shadow-soft"></span>
                <span className="font-medium">5-Star Premium Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sunset-warmth rounded-full shadow-soft"></span>
                <span className="font-medium">Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-plum-luxury rounded-full shadow-soft"></span>
                <span className="font-medium">Same-Day Availability</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image Card */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative bg-pure-clean rounded-3xl shadow-floating p-6 border border-serenity-blue/20">
                <img
                  src={heroImage}
                  alt="Serene, organized living space showcasing the Color Calm Method transformation"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-luxury"
                />
                
                {/* Overlay Info Card */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-trust text-pure-clean p-6 rounded-2xl shadow-floating border border-pure-clean/20">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-6 h-6" />
                      <span className="font-semibold text-lg">Color Calm Method™</span>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Psychology-based organization that creates lasting peace and harmony.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-pure-clean rounded-xl shadow-elegant p-4 border border-lavender-peace/20">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-ocean-trust">4.9★</div>
                  <div className="text-xs text-text-secondary font-medium">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ocean-trust/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ocean-trust rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;