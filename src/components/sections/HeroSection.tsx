import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-calm-living.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      {/* Modern Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-ocean-trust/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-forest-calm/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo prominently displayed for brand trust */}
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={logo} alt="Exclusive Pro Cleaning Services Logo" className="h-20 w-auto drop-shadow-xl" />
            </div>
            {/* Headline & Subheadline */}
            <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-ocean-trust leading-tight mb-4">
              Houston’s Premier Cleaning & Property Care
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light max-w-xl mx-auto lg:mx-0 mb-6">
              Residential • Airbnb • Move-In/Out • Fire Restoration • Medical & More
            </p>
            {/* Value Props & Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium text-sm shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                Bloodborne Pathogen Certified
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                OSHA Compliant
              </span>
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                Airbnb & Rental Experts
              </span>
              <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-medium text-sm shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                Fire Restoration
              </span>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button variant="default" size="lg" className="gap-3 shadow-floating">
                  Get a Free Quote
                </Button>
              </a>
              <a href="tel:832-994-3724">
                <Button variant="outline" size="lg" className="backdrop-blur-md">
                  Call Now: 832-994-3724
                </Button>
              </a>
            </div>
          </div>
          {/* Right Column - Hero Image Card */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative bg-pure-clean rounded-3xl shadow-floating p-6 border border-serenity-blue/20 w-full max-w-md mx-auto">
              <img
                src={heroImage}
                alt="Professional cleaning in action - Exclusive Pro"
                className="w-full h-80 object-cover rounded-2xl shadow-luxury"
              />
              {/* Overlay Info Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ocean-trust to-forest-calm text-pure-clean p-4 rounded-2xl shadow-floating border border-pure-clean/20 w-11/12 flex flex-col items-center">
                <span className="font-semibold text-lg">Trusted by Houston Families & Businesses</span>
                <span className="text-xs opacity-80 mt-1">Same-Day & Emergency Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-ocean-trust/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ocean-trust rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;