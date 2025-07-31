import React from "react";
import { Brain, Droplets, Moon, Heart, Zap, Sun, Leaf, Star, Sparkles } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const science = [
  {
    title: "Reduced Cortisol",
    description: "Calming blues lower stress hormones",
    color: "blue",
    icon: Droplets,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-400 to-cyan-500",
    accent: "bg-blue-500"
  },
  {
    title: "Enhanced Focus",
    description: "Greens improve concentration and balance",
    color: "green",
    icon: Brain,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    gradient: "from-green-400 to-emerald-500",
    accent: "bg-green-500"
  },
  {
    title: "Better Sleep",
    description: "Soft purples promote restful relaxation",
    color: "purple",
    icon: Moon,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradient: "from-purple-400 to-violet-500",
    accent: "bg-purple-500"
  },
  {
    title: "Emotional Balance",
    description: "Pink tones create feelings of warmth and comfort",
    color: "pink",
    icon: Heart,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    gradient: "from-pink-400 to-rose-500",
    accent: "bg-pink-500"
  },
  {
    title: "Energy Boost",
    description: "Orange hues increase motivation and creativity",
    color: "orange",
    icon: Sun,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    gradient: "from-orange-400 to-amber-500",
    accent: "bg-orange-500"
  },
  {
    title: "Natural Harmony",
    description: "Sage greens connect us to nature and growth",
    color: "emerald",
    icon: Leaf,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-400 to-teal-500",
    accent: "bg-emerald-500"
  }
];

export default function ColorPsychologyScienceSection() {
  return (
    <section className="w-full py-10 relative overflow-hidden">
      {/* Enhanced Animated Background Gradients */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>
        
        {/* Large animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-gradient-to-r from-green-300/40 to-emerald-300/40 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-300/40 to-yellow-300/40 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>

        {/* Additional floating elements for more visual interest */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-gradient-to-r from-violet-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-gradient-to-r from-teal-200/30 to-green-200/30 rounded-full blur-xl animate-pulse delay-1200"></div>
        </div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            The Science of Color Psychology
          </h2>
          
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mb-3">
            Research shows that colors directly impact our mood, stress levels, and cognitive function. 
            Our certified color psychology approach creates environments that naturally support:
          </p>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            <strong>Color psychology is fundamental to our business</strong> - it's not just about cleaning, 
            it's about creating customized premium experiences that transform your space and enhance your wellbeing.
          </p>
        </div>

        {/* Science Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {science.map((item) => (
            <div 
              key={item.title} 
              className={`group ${item.bgColor} rounded-xl p-4 border ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm`}
            >
              {/* Animated gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Decorative accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm`}>
                <item.icon className={`w-5 h-5 text-${item.color}-600 drop-shadow-sm`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base font-bold text-gray-900 mb-1 font-display group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <RainbowButton 
            className="inline-flex items-center gap-3 px-8 py-4 font-medium group"
            asChild
          >
            <a href="#contact">
              <Brain className="w-5 h-5" />
              <span>Discover Your Perfect Color Palette</span>
              <Star className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
} 