"use client";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, Star, CheckCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-6 bg-gradient-to-br from-white via-gray-50/80 to-gray-100 overflow-hidden shadow-2xl shadow-gray-900/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/90 via-transparent to-gray-100/60"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-50/60 to-blue-50/60 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Company Info Section */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-12 w-auto object-contain" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Houston's premier cleaning company specializing in color psychology-driven organization for busy families and business owners. We transform spaces with masterfully integrated cleaning and organization principles.
            </p>
            
            <div className="space-y-2 mb-4">
              <a href="tel:832-994-3724" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-200/50 group-hover:border-blue-300/70 group-hover:shadow-md transition-all">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">(832) 994-3724</span>
              </a>
              <a href="mailto:hello@exclusivepro.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-200/50 group-hover:border-blue-300/70 group-hover:shadow-md transition-all">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">hello@exclusivepro.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-200/50 group-hover:border-blue-300/70 group-hover:shadow-md transition-all">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">Houston, TX</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2 font-medium">4.9/5</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Certified</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/residential" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Residential Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/airbnb" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Airbnb & Rental</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/move-in-out" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Move-In/Move-Out</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Commercial Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/medical" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Medical & Healthcare</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full shadow-sm"></div>
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Our Process</span>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Careers</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 text-base flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/booking" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Book Now</span>
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Get Quote</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Exclusive Pro Cleaning Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Shield className="w-3 h-3 text-emerald-500" />
                <span>OSHA Compliant</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <CheckCircle className="w-3 h-3 text-blue-500" />
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
