import { MoveRight, PhoneCall, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="default" className="bg-ocean-trust text-white animate-pulse">Houston’s #1 Cleaning Experts</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-extrabold text-ocean-trust">
                Spotless. Professional. Trusted.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Exclusive Pro Cleaning Services delivers premium cleaning, organization, and property care for homes, Airbnbs, businesses, and clinics in Houston, TX. Book today for a cleaner, healthier, and more beautiful space.
              </p>
              {/* Certification/USP Badges */}
              <div className="flex flex-wrap gap-4 mt-2 mb-2 items-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-900 font-semibold text-base shadow-sm">
                  <Check className="w-5 h-5 text-green-700" /> Bloodborne Pathogen Certified
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-base shadow-sm">
                  <Check className="w-5 h-5 text-blue-600" /> OSHA Compliant
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-base shadow-sm">
                  <Check className="w-5 h-5 text-yellow-700" /> Airbnb & Rental Experts
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-base shadow-sm">
                  <Check className="w-5 h-5 text-pink-600" /> Fire Restoration
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="gap-4 bg-ocean-trust text-white hover:bg-ocean-trust/90 shadow-lg">
                  Book Now
                  <MoveRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="tel:832-994-3724">
                <Button size="lg" className="gap-4" variant="outline">
                  Call Us: 832-994-3724
                  <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square overflow-hidden shadow-xl animate-fade-in-up">
              <img src="/1.jpeg" alt="Clean bedroom" className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="bg-muted rounded-md row-span-2 overflow-hidden shadow-2xl animate-fade-in-up delay-100">
              <img src="/2.jpeg" alt="Modern kitchen" className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="bg-muted rounded-md aspect-square overflow-hidden shadow-xl animate-fade-in-up delay-200">
              <img src="/3.jpeg" alt="Organized living room" className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
