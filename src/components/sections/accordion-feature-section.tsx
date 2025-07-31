import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Residential Cleaning",
    description: "Thorough cleaning for homes and apartments, tailored to your needs for a sparkling, healthy living environment. Our team uses eco-friendly products and attention to detail for every room.",
    details: "We offer weekly, bi-weekly, and one-time deep cleans. Our professionals are background-checked and trained for your peace of mind.",
    link: "/services/residential-cleaning",
    cta: "Book Residential Cleaning",
  },
  {
    title: "Airbnb & Rental Cleaning",
    description: "Fast, reliable turnover cleaning for Airbnb and short-term rentals, ensuring 5-star guest experiences every time.",
    details: "Includes linen change, restocking essentials, and a detailed checklist to meet Airbnb standards. Flexible scheduling available.",
    link: "/services/airbnb-cleaning",
    cta: "Book Airbnb Cleaning",
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description: "Deep cleaning for moving in or out, leaving spaces spotless and ready for new beginnings.",
    details: "We clean inside cabinets, appliances, and every corner. Perfect for landlords, tenants, and realtors.",
    link: "/services/move-in-move-out",
    cta: "Book Move-In/Out Cleaning",
  },
  {
    title: "Fire Restoration Cleaning",
    description: "Specialized cleaning and restoration after fire damage, removing soot, odor, and restoring peace of mind.",
    details: "Certified technicians use advanced equipment for smoke and odor removal. We work with insurance and offer emergency response.",
    link: "/services/fire-restoration",
    cta: "Book Fire Restoration",
  },
  {
    title: "Medical & Healthcare Cleaning",
    description: "Expert cleaning for clinics, offices, and healthcare spaces, meeting the highest standards of hygiene and safety.",
    details: "OSHA-compliant, hospital-grade disinfectants, and strict protocols for infection control.",
    link: "/services/medical-cleaning",
    cta: "Book Medical Cleaning",
  },
  {
    title: "Bloodborne Pathogen Certified Cleaning",
    description: "Certified cleaning for hazardous materials, ensuring safe, compliant, and thorough decontamination.",
    details: "Biohazard cleanup, trauma scene cleaning, and full regulatory compliance. Discreet and compassionate service.",
    link: "/services/bloodborne-cleaning",
    cta: "Book Certified Cleaning",
  },
];

export function AccordionFeatureSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-brandBlue/10 via-white to-brandPink/10 animate-gradient-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Right: Image (on mobile, appears above accordion) */}
        <div className="order-1 lg:order-2 flex justify-center items-center h-full mb-8 lg:mb-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brandBlue/40 bg-white/80 backdrop-blur-md w-full max-w-lg h-[340px] lg:h-[500px] flex items-center animate-fade-in-glow ring-4 ring-brandBlue/10 hover:shadow-brandBlue/30 hover:scale-[1.01] transition-all duration-300">
            <img src="/1.jpeg" alt="Service feature" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Left: Accordion */}
        <div className="order-2 lg:order-1 rounded-3xl shadow-2xl border-4 border-brandBlue/40 bg-white/90 backdrop-blur-xl p-8 md:p-10 animate-fade-in-glow ring-4 ring-brandBlue/10 hover:shadow-brandBlue/30 hover:scale-[1.01] transition-all duration-300 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Services</h2>
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, idx) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger className="transition-all duration-200 hover:text-brandBlue hover:underline hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-brandBlue/40 shadow-none data-[state=open]:shadow-brandBlue/20 data-[state=open]:shadow-lg">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="transition-all duration-300 scale-95 data-[state=open]:scale-100 data-[state=open]:bg-brandBlue/5 rounded-xl">
                  <div className="space-y-2">
                    <p className="text-base text-gray-700 font-medium mb-1">{service.description}</p>
                    <p className="text-sm text-gray-600 mb-2">{service.details}</p>
                    <a href={service.link} className="text-brandBlue underline hover:text-brandGreen font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                      Learn more about {service.title}
                    </a>
                    <div className="mt-3">
                      <Button asChild className="bg-brandBlue hover:bg-brandGreen text-white shadow-brandBlue/30 shadow-lg transition-all font-semibold px-6 py-2 rounded-full">
                        <a href={service.link} target="_blank" rel="noopener noreferrer">{service.cta}</a>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AccordionFeatureSection; 