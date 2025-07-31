import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-xl shadow-brandBlue/20 ring-1 ring-brandBlue/10 backdrop-blur-lg transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left: Logo (always visible) */}
          <div className="flex items-center min-w-0">
            <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4">
            <a href="#home" className="px-3 py-2 font-medium text-gray-900 hover:text-brandBlue hover:scale-105 transition-all duration-200">Home</a>
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 font-medium text-gray-900 hover:text-brandBlue hover:scale-105 transition-all duration-200 focus:outline-none"
                onClick={() => setIsProductOpen((v) => !v)}
                onBlur={() => setTimeout(() => setIsProductOpen(false), 100)}
              >
                Product <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isProductOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 animate-fade-in">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">Overview</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">Features</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">Pricing</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 font-medium text-gray-900 hover:text-brandBlue hover:scale-105 transition-all duration-200 focus:outline-none"
                onClick={() => setIsCompanyOpen((v) => !v)}
                onBlur={() => setTimeout(() => setIsCompanyOpen(false), 100)}
              >
                Company <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isCompanyOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 animate-fade-in">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">About Us</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">Careers</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-brandBlue/10 transition">Contact</a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Actions (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4">
            <a href="#demo" className="px-3 py-2 font-medium text-gray-900 hover:text-brandBlue hover:scale-105 transition-all duration-200">Book a demo</a>
            <div className="h-6 w-px bg-gray-300 mx-2" />
            <Button variant="outline" size="sm" className="font-medium hover:shadow-brandBlue/30 hover:shadow-lg transition-all">Sign in</Button>
            <Button variant="default" size="sm" className="font-medium bg-brandBlue hover:bg-brandGreen text-white shadow-brandBlue/30 shadow-md transition-all">Get started</Button>
            <Button variant="ghost" size="icon" className="border border-gray-300 hover:bg-brandBlue/10 transition-all"><ArrowUpRight className="w-4 h-4" /></Button>
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
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-12 w-auto object-contain" />
            <button
              className="p-2 rounded-lg text-brandBlue hover:bg-brandBlue/10 transition-all focus:outline-none focus:ring-2 focus:ring-brandBlue"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-lg font-semibold">
            <a href="#home" className="py-2 px-2 rounded hover:bg-brandBlue/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-brandBlue/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-brandBlue/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Company</a>
            <a href="#demo" className="py-2 px-2 rounded hover:bg-brandBlue/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Book a demo</a>
            <Button variant="outline" size="sm" className="font-medium w-full mt-2">Sign in</Button>
            <Button variant="default" size="sm" className="font-medium w-full mt-2 bg-brandBlue hover:bg-brandGreen text-white">Get started</Button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;