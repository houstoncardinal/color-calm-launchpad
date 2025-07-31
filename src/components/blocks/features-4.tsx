import { Home, BedDouble, DoorOpen, Flame, Stethoscope, ShieldCheck } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export function Features() {
    return (
        <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-10">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
                    <h2 className="text-balance text-2xl font-display font-bold lg:text-3xl text-gray-900">Why Choose Exclusive Pro Cleaning Services?</h2>
                    <p className="text-base text-gray-700 font-medium">Houston's trusted partner for premium cleaning and organization. Our certified team delivers peace of mind, sparkling spaces, and a seamless client experience for families and businesses.</p>
                </div>

                <div className="relative mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white/80 rounded-2xl shadow-xl overflow-hidden">
                    {/* Residential Cleaning */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brandBlue/30 hover:bg-brandBlue/5 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <Home className="size-4 text-brandBlue drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Residential Cleaning</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Thorough, eco-friendly cleaning for homes and apartments, tailored to your needs for a sparkling, healthy living environment.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/residential-cleaning" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/residential-cleaning" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                    {/* Airbnb & Rental Cleaning */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brandGreen/30 hover:bg-brandGreen/5 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <BedDouble className="size-4 text-brandGreen drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Airbnb & Rental Cleaning</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Fast, reliable turnover cleaning for Airbnb and short-term rentals, ensuring 5-star guest experiences every time.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/airbnb-cleaning" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/airbnb-cleaning" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                    {/* Move-In/Move-Out Cleaning */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brandYellow/30 hover:bg-brandYellow/10 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <DoorOpen className="size-4 text-brandYellow drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Move-In/Move-Out Cleaning</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Deep cleaning for moving in or out, leaving spaces spotless and ready for new beginnings.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/move-in-move-out" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/move-in-move-out" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                    {/* Fire Restoration Cleaning */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-pink-300 hover:bg-pink-100/30 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <Flame className="size-4 text-pink-500 drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Fire Restoration Cleaning</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Specialized cleaning and restoration after fire damage, removing soot, odor, and restoring peace of mind.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/fire-restoration" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/fire-restoration" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                    {/* Medical & Healthcare Cleaning */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brandBlue/30 hover:bg-brandBlue/5 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <Stethoscope className="size-4 text-brandBlue drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Medical & Healthcare Cleaning</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Expert cleaning for clinics, offices, and healthcare spaces, meeting the highest standards of hygiene and safety.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/medical-cleaning" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/medical-cleaning" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                    {/* Bloodborne Pathogen Certified */}
                    <div className="space-y-3 group transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brandGreen/30 hover:bg-brandGreen/5 hover:scale-[1.02] rounded-xl shadow-md p-5 relative overflow-hidden">
                        <GlowingEffect 
                            disabled={false}
                            spread={30}
                            proximity={50}
                            blur={0}
                            borderWidth={2}
                            movementDuration={1.5}
                        />
                        <div className="relative z-10 flex items-center gap-2">
                            <ShieldCheck className="size-4 text-brandGreen drop-shadow-md group-hover:drop-shadow-lg transition-all" />
                            <h3 className="text-sm font-semibold text-gray-900">Bloodborne Pathogen Certified</h3>
                        </div>
                        <p className="text-xs text-gray-700 relative z-10">Certified cleaning for hazardous materials, ensuring safe, compliant, and thorough decontamination.</p>
                        <div className="flex gap-2 mt-3 relative z-10">
                            <a href="/services/bloodborne-cleaning" className="text-gray-500 underline underline-offset-4 decoration-2 hover:text-gray-700 font-medium transition-all text-xs">Learn More</a>
                            <a href="/book/bloodborne-cleaning" className="text-gray-600 underline underline-offset-4 decoration-2 hover:text-gray-800 font-semibold transition-all text-xs">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}