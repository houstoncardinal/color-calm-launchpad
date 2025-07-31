import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-ocean-trust/20 shadow-elegant backdrop-blur-lg transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left: Logo (always visible) */}
          <div className="flex items-center min-w-0">
            <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4">
            <a href="/" className="px-3 py-2 font-medium text-ocean-trust hover:text-emerald-600 hover:scale-105 transition-all duration-200">Home</a>
            <a href="/about" className="px-3 py-2 font-medium text-ocean-trust hover:text-emerald-600 hover:scale-105 transition-all duration-200">About</a>
            <a href="/services" className="px-3 py-2 font-medium text-ocean-trust hover:text-emerald-600 hover:scale-105 transition-all duration-200">Services</a>
            <a href="/contact" className="px-3 py-2 font-medium text-ocean-trust hover:text-emerald-600 hover:scale-105 transition-all duration-200">Contact</a>
          </div>

          {/* Desktop Actions (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4">
            <a href="/booking" className="px-3 py-2 font-medium text-ocean-trust hover:text-emerald-600 hover:scale-105 transition-all duration-200">Book Now</a>
            <div className="h-6 w-px bg-ocean-trust/30 mx-2" />
            <Button variant="outline" size="sm" className="font-medium border-ocean-trust text-ocean-trust hover:bg-ocean-trust hover:text-white transition-all">Get Quote</Button>
            <Button variant="default" size="sm" className="font-medium bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all">Call Now</Button>
          </div>

          {/* Mobile Hamburger (visible on mobile/tablet) */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-brandBlue hover:bg-brandBlue/10 transition-all focus:outline-none focus:ring-2 focus:ring-brandBlue"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <span className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110' : ''}`}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col shadow-elegant">
          <div className="flex items-center justify-between p-6 border-b border-ocean-trust/10 bg-white">
            <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-12 w-auto object-contain" />
            <button
              className="p-2 rounded-xl text-ocean-trust hover:bg-serene-mist transition-all focus:outline-none focus:ring-2 focus:ring-ocean-trust"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-1 p-6 bg-white">
            <nav className="flex flex-col gap-2">
              <a href="/" className="py-4 px-4 rounded-xl hover:bg-white/80 transition-all text-lg font-medium text-ocean-trust flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Home</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="/about" className="py-4 px-4 rounded-xl hover:bg-white/80 transition-all text-lg font-medium text-ocean-trust flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                <span>About</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="/services" className="py-4 px-4 rounded-xl hover:bg-white/80 transition-all text-lg font-medium text-ocean-trust flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Services</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="/contact" className="py-4 px-4 rounded-xl hover:bg-white/80 transition-all text-lg font-medium text-ocean-trust flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Contact</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="/booking" className="py-4 px-4 rounded-xl hover:bg-white/80 transition-all text-lg font-medium text-ocean-trust flex items-center justify-between group" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Book Now</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </nav>
            <div className="mt-8 space-y-3">
              <Button variant="outline" size="lg" className="w-full font-medium border-ocean-trust text-ocean-trust hover:bg-ocean-trust hover:text-white transition-all">Get Free Quote</Button>
              <Button variant="default" size="lg" className="w-full font-medium bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all">Call: 832-994-3724</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;