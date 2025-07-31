import React from "react";

export default function CompanyApproachSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-blue-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brandBlue/10">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-brandBlue"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900">More than traditional cleaning, our method combines color psychology with professional organization</h2>
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          We create spaces that naturally promote peace, reduce stress, and support your family’s wellbeing. Our holistic approach goes beyond surface cleaning to deliver lasting transformation for your home and life.
        </p>
      </div>
    </section>
  );
} 