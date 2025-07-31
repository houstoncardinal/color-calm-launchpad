import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Calendar, Clock, Star } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold font-serif text-ocean-trust mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready for a spotless space? Book your free quote or call us at <span className="font-bold text-ocean-trust">832-994-3724</span>.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-10 bg-white border-ocean-trust/10 shadow-2xl">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ocean-trust">First Name *</label>
                    <Input placeholder="Sarah" className="border-ocean-trust/30 focus:border-ocean-trust" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ocean-trust">Last Name *</label>
                    <Input placeholder="Johnson" className="border-ocean-trust/30 focus:border-ocean-trust" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ocean-trust">Email Address *</label>
                    <Input type="email" placeholder="sarah@example.com" className="border-ocean-trust/30 focus:border-ocean-trust" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ocean-trust">Phone Number *</label>
                    <Input type="tel" placeholder="832-994-3724" className="border-ocean-trust/30 focus:border-ocean-trust" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-trust">How can we help?</label>
                  <Textarea placeholder="Tell us about your cleaning or organization needs..." className="border-ocean-trust/30 focus:border-ocean-trust min-h-[120px]" />
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-ocean-trust to-emerald-600 text-white hover:shadow-glow transition-all duration-300 w-full shadow-lg"
                >
                  Book Now
                </Button>
              </form>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-ocean-trust/10 to-emerald-50 border-ocean-trust/10 shadow-lg">
              <h3 className="text-xl font-bold text-ocean-trust mb-4">Call Us</h3>
              <a href="tel:832-994-3724" className="block text-2xl font-extrabold text-ocean-trust mb-2">832-994-3724</a>
              <p className="text-sm text-text-secondary">Mon-Fri 8AM-6PM</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-ocean-trust/10 shadow-lg">
              <h3 className="text-xl font-bold text-ocean-trust mb-4">Email</h3>
              <p className="text-lg font-medium text-ocean-trust mb-2">hello@exclusivepro.com</p>
              <p className="text-sm text-text-secondary">24hr response time</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-emerald-50 border-ocean-trust/10 shadow-lg">
              <h3 className="text-xl font-bold text-ocean-trust mb-4">Location</h3>
              <p className="text-lg font-medium text-ocean-trust mb-2">Houston, TX</p>
              <p className="text-sm text-text-secondary">Serving Houston & surrounding areas</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;