import Navigation from "@/components/layout/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      area: "Central Houston",
      neighborhoods: ["River Oaks", "Montrose", "Museum District", "Midtown"],
      responseTime: "Same day"
    },
    {
      area: "West Houston", 
      neighborhoods: ["Katy", "Memorial", "Galleria", "Westchase"],
      responseTime: "Next day"
    },
    {
      area: "North Houston",
      neighborhoods: ["Spring", "The Woodlands", "Tomball", "Cypress"],
      responseTime: "Next day"
    },
    {
      area: "Southwest Houston",
      neighborhoods: ["Sugar Land", "Missouri City", "Pearland", "Friendswood"],
      responseTime: "Next day"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-serene-mist via-white to-calming-sage">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-6xl font-extrabold font-serif text-ocean-trust mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? We're here to help. Call us at <span className="font-bold text-ocean-trust">832-994-3724</span> 
            or fill out the form below for your free consultation.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ocean-trust mb-2">Call Now</h3>
              <a href="tel:832-994-3724" className="text-2xl font-bold text-ocean-trust hover:text-emerald-600 transition-colors">
                832-994-3724
              </a>
              <p className="text-text-secondary text-sm mt-2">Mon-Fri 8AM-6PM</p>
            </Card>

            <Card className="p-8 text-center bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ocean-trust mb-2">Text Us</h3>
              <a href="sms:832-994-3724" className="text-lg font-medium text-ocean-trust hover:text-emerald-600 transition-colors">
                Send a Text
              </a>
              <p className="text-text-secondary text-sm mt-2">Quick responses</p>
            </Card>

            <Card className="p-8 text-center bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-trust to-emerald-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ocean-trust mb-2">Email</h3>
              <a href="mailto:hello@exclusivepro.com" className="text-lg font-medium text-ocean-trust hover:text-emerald-600 transition-colors">
                hello@exclusivepro.com
              </a>
              <p className="text-text-secondary text-sm mt-2">24hr response</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ocean-trust mb-4">Service Areas</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We proudly serve Houston and surrounding areas with flexible scheduling and quick response times.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 bg-white shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-ocean-trust mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-ocean-trust mb-1">{location.area}</h3>
                    <div className="flex items-center gap-2 text-sm text-emerald-600">
                      <Clock className="w-4 h-4" />
                      {location.responseTime}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  {location.neighborhoods.map((neighborhood, idx) => (
                    <div key={idx} className="text-sm text-text-secondary">
                      • {neighborhood}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactSection />

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-ocean-trust to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Emergency Cleaning?</h2>
          <p className="text-xl text-white/90 mb-6">
            We offer same-day and emergency cleaning services for urgent situations.
          </p>
          <a 
            href="tel:832-994-3724"
            className="inline-flex items-center gap-2 bg-white text-ocean-trust px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now: 832-994-3724
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;