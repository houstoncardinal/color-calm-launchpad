import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { CheckCircle, Shield, Star, Clock, Sparkles, Droplets, Zap } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// Realistic glossy interactive bubbles
const RealisticBubbles = () => {
  const [poppedBubbles, setPoppedBubbles] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleBubblePop = (bubbleId: number) => {
    setPoppedBubbles(prev => new Set([...prev, bubbleId]));
  };

  // Desktop: Right side only, Mobile: Full background
  const bubbleCount = isMobile ? 15 : 20;
  const bubblePositions = isMobile 
    ? Array.from({ length: bubbleCount }, () => ({
        left: Math.random() * 100,
        startY: 100 + Math.random() * 20
      }))
    : Array.from({ length: bubbleCount }, () => ({
        left: 60 + Math.random() * 35, // 60-95% (right side)
        startY: 100 + Math.random() * 20
      }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubblePositions.map((pos, i) => {
        const size = Math.random() * 35 + 15; // 15-50px
        const duration = Math.random() * 20 + 15; // 15-35 seconds
        const delay = Math.random() * 15;
        const isPopped = poppedBubbles.has(i);

        return (
          <motion.div
            key={i}
            className={`absolute cursor-pointer group ${
              isPopped ? 'pointer-events-none' : ''
            }`}
            style={{
              width: size,
              height: size,
              left: `${pos.left}%`,
              top: `${pos.startY}%`,
            }}
            animate={{
              y: [0, -window.innerHeight - 300],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 0.95, 0.95, 0],
              scale: isPopped ? [1, 1.8, 0] : [0.9, 1, 1],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
            onHoverStart={() => !isPopped && handleBubblePop(i)}
            whileHover={{ scale: isPopped ? 1 : 1.15 }}
          >
            {/* Ultra-realistic bubble with enhanced glossy effect */}
            <div 
              className={`
                w-full h-full rounded-full relative
                ${isPopped ? 'animate-ping' : ''}
              `}
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, 
                    rgba(255, 255, 255, 0.95) 0%, 
                    rgba(255, 255, 255, 0.8) 15%, 
                    rgba(255, 255, 255, 0.4) 35%, 
                    rgba(255, 255, 255, 0.1) 60%, 
                    rgba(255, 255, 255, 0.02) 100%
                  ),
                  radial-gradient(circle at 75% 75%, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    rgba(255, 255, 255, 0.2) 25%, 
                    rgba(255, 255, 255, 0.05) 50%, 
                    transparent 100%
                  ),
                  radial-gradient(circle at 85% 15%, 
                    rgba(255, 255, 255, 0.3) 0%, 
                    rgba(255, 255, 255, 0.1) 40%, 
                    transparent 100%
                  ),
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.9) 0%, 
                    rgba(255, 255, 255, 0.3) 30%, 
                    rgba(255, 255, 255, 0.05) 70%, 
                    rgba(255, 255, 255, 0.02) 100%
                  )
                `,
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: `
                  inset 0 0 25px rgba(255, 255, 255, 0.4),
                  inset 0 0 50px rgba(255, 255, 255, 0.15),
                  inset 0 0 75px rgba(255, 255, 255, 0.05),
                  0 0 15px rgba(255, 255, 255, 0.3),
                  0 0 30px rgba(255, 255, 255, 0.15),
                  0 0 45px rgba(255, 255, 255, 0.05)
                `,
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Primary highlight (main light source) */}
              <div 
                className="absolute top-1 left-1 w-2/5 h-2/5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
                }}
              />
              
              {/* Secondary highlight (reflection) */}
              <div 
                className="absolute top-0.5 right-1 w-1/3 h-1/3 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)',
                }}
              />
              
              {/* Tertiary highlight (small reflection) */}
              <div 
                className="absolute top-2 right-3 w-1/5 h-1/5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)',
                }}
              />
              
              {/* Bottom reflection (environment reflection) */}
              <div 
                className="absolute bottom-0.5 left-1/4 w-1/2 h-1/5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
                }}
              />
              
              {/* Inner shadow for depth */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0.1) 100%)',
                }}
              />
            </div>
            
            {/* Detailed bubble splatter effect */}
            {isPopped && (
              <>
                {/* Main burst effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 2.5, 4], 
                    opacity: [0, 0.9, 0] 
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)',
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.9)',
                  }}
                />
                
                {/* Water droplets splatter */}
                {[...Array(8)].map((_, dropIndex) => (
                  <motion.div
                    key={`drop-${dropIndex}`}
                    className="absolute rounded-full bg-white/60 backdrop-blur-sm"
                    style={{
                      width: Math.random() * 8 + 4,
                      height: Math.random() * 8 + 4,
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      scale: [0, 1, 0.8],
                      opacity: [0, 0.8, 0],
                      x: [
                        0, 
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 80
                      ],
                      y: [
                        0, 
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 80
                      ]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: Math.random() * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Micro bubbles */}
                {[...Array(12)].map((_, microIndex) => (
                  <motion.div
                    key={`micro-${microIndex}`}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 6 + 2,
                      height: Math.random() * 6 + 2,
                      left: '50%',
                      top: '50%',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      scale: [0, 1, 0.6],
                      opacity: [0, 0.6, 0],
                      x: [
                        0, 
                        (Math.random() - 0.5) * 40,
                        (Math.random() - 0.5) * 60
                      ],
                      y: [
                        0, 
                        (Math.random() - 0.5) * 40,
                        (Math.random() - 0.5) * 60
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Sparkle effect */}
                {[...Array(6)].map((_, sparkleIndex) => (
                  <motion.div
                    key={`sparkle-${sparkleIndex}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      x: 0,
                      y: 0,
                      rotate: 0
                    }}
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0],
                      x: [
                        0, 
                        (Math.random() - 0.5) * 50,
                        (Math.random() - 0.5) * 70
                      ],
                      y: [
                        0, 
                        (Math.random() - 0.5) * 50,
                        (Math.random() - 0.5) * 70
                      ],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 1,
                      delay: Math.random() * 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <Sparkles className="w-2 h-2 text-white/80" />
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const FantasticHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Auto-carousel effect for trust factors (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #e0f2fe 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const trustFactors = [
    { icon: CheckCircle, text: "Bloodborne Pathogen Certified", color: "text-green-600" },
    { icon: Shield, text: "OSHA Compliant", color: "text-blue-600" },
    { icon: Star, text: "500+ Happy Clients", color: "text-yellow-600" },
    { icon: Clock, text: "24/7 Customer Support", color: "text-purple-600" },
    { icon: Sparkles, text: "100% Satisfaction Guarantee", color: "text-pink-600" }
  ];

  // Duplicate items for infinite scroll on mobile
  const mobileTrustFactors = [...trustFactors, ...trustFactors, ...trustFactors];

  return (
    <>
      <motion.section
        style={{ backgroundImage }}
        className="relative min-h-[50vh] flex items-start justify-start overflow-hidden bg-blue-50 pt-32 pb-20 text-gray-900"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 w-full max-w-3xl flex flex-col items-start text-left ml-[-0.25rem] sm:ml-[-0.5rem] lg:ml-[-0.75rem]">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-3 text-left">
            From <span className="text-blue-500">Overwhelmed</span> to <span className="text-green-600 italic">Organized</span> <span className="text-purple-500">& Present</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light mb-4 text-left w-full">
            Houston's premier cleaning company specializing in <span className="text-blue-500 font-semibold">color psychology-driven organization</span> for busy families and business owners. We transform spaces with masterfully integrated cleaning and organization principles that create <span className="text-green-600 font-semibold">lasting calm and emotional freedom</span>.
          </p>
          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 mb-5 justify-start w-full">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium text-xs shadow">✓ Airbnb & Rental Specialists</span>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium text-xs shadow">✓ Commercial Services</span>
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full font-medium text-xs shadow">✓ Residential Services</span>
          </div>
          {/* CTA Button */}
          <motion.a
            href="#contact"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-blue-700/20 px-5 py-2.5 text-base font-semibold text-blue-900 transition-colors hover:bg-blue-700/40 mb-5 text-left"
          >
            Get a Free Quote
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.a>
          {/* Testimonial/Quote */}
          <div className="mt-1 p-4 bg-white/80 rounded-xl shadow border border-blue-100 text-left w-full max-w-2xl">
            <p className="text-sm text-gray-700 italic text-left">
              "When your space reflects calm through color and organization, your mind is free to focus on what truly matters—<span className='text-blue-500 font-semibold'>precious moments with your family.</span>"
            </p>
            <div className="flex gap-3 mt-2 text-xs text-gray-500 justify-start">
              <span>✓ Color Psychology Certified</span>
              <span>✓ 500+ Families Transformed</span>
            </div>
          </div>
          </div>
        </div>

        {/* Realistic interactive bubbles */}
        <div className="absolute inset-0 z-0">
          <RealisticBubbles />
        </div>
      </motion.section>

      {/* Trust Factors Bar - Full width with new aura background */}
      <section className="bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50 relative overflow-hidden">
        {/* Enhanced aura background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-10 w-80 h-80 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-slate-200/40 to-gray-200/40 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="w-full px-0 relative z-10">
          {/* Desktop: Centered carousel */}
          {!isMobile && (
            <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 py-4 overflow-hidden">
              {trustFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: currentIndex === index ? 1.05 : 1,
                    filter: currentIndex === index ? "brightness(1.1)" : "brightness(1)"
                  }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    scale: { duration: 0.3 },
                    filter: { duration: 0.3 }
                  }}
                  className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
                >
                  <div className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 group-hover:scale-110 shadow-md border border-white/60">
                    <factor.icon className={`w-3.5 h-3.5 ${factor.color} drop-shadow-sm`} />
                  </div>
                  <span className="text-gray-700 font-medium text-xs group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                    {factor.text}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Mobile: Infinite scroll */}
          {isMobile && (
            <div className="py-4 overflow-hidden">
              <motion.div 
                className="flex items-center gap-4"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {mobileTrustFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 flex-shrink-0"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-md border border-white/60">
                      <factor.icon className={`w-3.5 h-3.5 ${factor.color} drop-shadow-sm`} />
                    </div>
                    <span className="text-gray-700 font-medium text-xs whitespace-nowrap">
                      {factor.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FantasticHeroSection; 