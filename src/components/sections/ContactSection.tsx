import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Calendar, Clock, Star } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-pure-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-trust/10 rounded-full border border-ocean-trust/20 mb-6">
            <Calendar className="w-4 h-4 text-ocean-trust" />
            <span className="text-sm font-medium text-text-primary">
              Ready to Transform Your Space?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            Start Your Color Calm
            <span className="block text-ocean-trust">Journey Today</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Book your free consultation and discover how the Color Calm Method can transform 
            your space and your life. Most clients see immediate stress reduction after just one session.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-calm border-serenity-blue/20 shadow-luxury">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-text-secondary">
                    Tell us about your space and we'll create a custom Color Calm plan just for you.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Sarah"
                        className="border-serenity-blue/40 focus:border-ocean-trust"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Johnson"
                        className="border-serenity-blue/40 focus:border-ocean-trust"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="sarah@example.com"
                        className="border-serenity-blue/40 focus:border-ocean-trust"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border-serenity-blue/40 focus:border-ocean-trust"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        Service Type *
                      </label>
                      <Select>
                        <SelectTrigger className="border-serenity-blue/40 focus:border-ocean-trust">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Cleaning</SelectItem>
                          <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                          <SelectItem value="consultation">Color Consultation Only</SelectItem>
                          <SelectItem value="deep">Deep Cleaning Reset</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary">
                        Home Size
                      </label>
                      <Select>
                        <SelectTrigger className="border-serenity-blue/40 focus:border-ocean-trust">
                          <SelectValue placeholder="Select home size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">1-2 Bedrooms</SelectItem>
                          <SelectItem value="medium">3-4 Bedrooms</SelectItem>
                          <SelectItem value="large">5+ Bedrooms</SelectItem>
                          <SelectItem value="commercial">Commercial Space</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">
                      Tell us about your biggest organization challenge
                    </label>
                    <Textarea 
                      placeholder="I'm overwhelmed with clutter and don't know where to start. I want my kids to have a peaceful space to play and learn..."
                      className="border-serenity-blue/40 focus:border-ocean-trust min-h-[120px]"
                    />
                  </div>

                  <div className="bg-serenity-blue/10 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-sunset-warmth mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-text-primary font-medium mb-1">
                          Free 30-Minute Consultation Includes:
                        </p>
                        <ul className="text-xs text-text-secondary space-y-1">
                          <li>• Color psychology assessment for your space</li>
                          <li>• Custom organization strategy outline</li>
                          <li>• Personalized pricing based on your needs</li>
                          <li>• No obligation, no pressure</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button variant="luxury" size="xl" className="w-full">
                    Book My Free Consultation
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-6 bg-warm-embrace/30 border-sage-harmony/20">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ocean-trust rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pure-clean" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">(555) 123-CALM</p>
                    <p className="text-sm text-text-secondary">Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest-calm rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-pure-clean" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">hello@exclusivepro.com</p>
                    <p className="text-sm text-text-secondary">24hr response time</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lavender-peace rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Los Angeles County</p>
                    <p className="text-sm text-text-secondary">We serve all of LA</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-trust text-pure-clean">
              <h3 className="text-xl font-semibold mb-4">
                Need Help Right Now?
              </h3>
              
              <div className="space-y-4">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-pure-clean hover:bg-pure-clean/10">
                  <Phone className="w-4 h-4" />
                  Call Now for Same-Day Service
                </Button>
                
                <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-pure-clean hover:bg-pure-clean/10">
                  <Calendar className="w-4 h-4" />
                  Schedule Online Consultation
                </Button>
              </div>
            </Card>

            {/* Service Hours */}
            <Card className="p-6 bg-serenity-blue/10 border-serenity-blue/20">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Service Hours
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Monday - Friday</span>
                  <span className="text-text-primary font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Saturday</span>
                  <span className="text-text-primary font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sunday</span>
                  <span className="text-text-primary font-medium">Emergency Only</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-serenity-blue/20">
                <p className="text-xs text-text-secondary">
                  *Same-day service available for urgent needs
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;