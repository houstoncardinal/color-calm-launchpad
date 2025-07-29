import { Card } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";
import familyImage from "@/assets/family-connection.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Working Mom of 3",
      location: "Manhattan Beach",
      rating: 5,
      text: "The Color Calm Method completely transformed our home and our lives. I actually have time to read bedtime stories to my kids now instead of spending evenings organizing. The color-coded systems are so intuitive that even my 6-year-old puts things away without being asked!",
      highlight: "I have time to read bedtime stories to my kids now"
    },
    {
      name: "Dr. Amanda Chen",
      role: "Pediatrician & Mom",
      location: "Beverly Hills", 
      rating: 5,
      text: "As a doctor, I understand the science behind color psychology, but I never thought to apply it to my home organization. The results are incredible—my stress levels dropped dramatically, and my family feels more connected. Our home truly feels like a sanctuary now.",
      highlight: "My stress levels dropped dramatically"
    },
    {
      name: "Jennifer & Mark Rodriguez",
      role: "Busy Parents",
      location: "Santa Monica",
      rating: 5,
      text: "We were skeptical about the price at first, but this service is worth every penny. It's not just cleaning—it's life coaching through color and organization. Our entire family dynamic improved because our space supports peace instead of chaos.",
      highlight: "It's life coaching through color and organization"
    }
  ];

  const stats = [
    { number: "500+", label: "Families Transformed" },
    { number: "98%", label: "Report Less Daily Stress" },
    { number: "4.9", label: "Average Rating" },
    { number: "2hrs", label: "Average Time Saved Daily" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-calm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-warmth/20 rounded-full border border-sunset-warmth/40 mb-6">
            <Heart className="w-4 h-4 text-sunset-warmth" />
            <span className="text-sm font-medium text-text-primary">
              Client Love Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            From Overwhelmed to
            <span className="block text-ocean-trust">Overjoyed</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real stories from busy moms and families who discovered the life-changing power 
            of color psychology and professional organization.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-trust mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Testimonial */}
          <div className="lg:row-span-2">
            <Card className="h-full p-8 bg-pure-clean border-ocean-trust/20 shadow-luxury">
              <div className="flex flex-col h-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-pure-clean" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunset-warmth text-sunset-warmth" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-text-primary leading-relaxed flex-grow">
                  "{testimonials[0].text}"
                </blockquote>
                
                <div className="bg-serenity-blue/20 p-4 rounded-xl">
                  <p className="text-ocean-trust font-semibold italic">
                    "{testimonials[0].highlight}"
                  </p>
                </div>
                
                <div className="border-t border-serenity-blue pt-4">
                  <div className="font-semibold text-text-primary">
                    {testimonials[0].name}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {testimonials[0].role} • {testimonials[0].location}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Testimonials */}
          <div className="space-y-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <Card key={index} className="p-6 bg-pure-clean border-serenity-blue/20 hover:shadow-soft transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sunset-warmth text-sunset-warmth" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-lavender-peace" />
                  </div>
                  
                  <blockquote className="text-text-primary leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-serenity-blue pt-4">
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Before/After Emotional Impact */}
        <div className="bg-warm-embrace/30 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-text-primary">
                The Real Before & After
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    Before: The Daily Struggle
                  </h4>
                  <ul className="space-y-2 text-text-secondary text-sm ml-5">
                    <li>• Constant clutter causing daily stress</li>
                    <li>• No time for family connection</li>
                    <li>• Overwhelming mess despite constant cleaning</li>
                    <li>• Guilt about not having an "Instagram-worthy" home</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-forest-calm rounded-full"></div>
                    After: The Color Calm Life
                  </h4>
                  <ul className="space-y-2 text-text-secondary text-sm ml-5">
                    <li>• Peaceful spaces that maintain themselves</li>
                    <li>• Quality time for what matters most</li>
                    <li>• Systems everyone in the family can follow</li>
                    <li>• Confidence and pride in your beautiful home</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={familyImage}
                alt="Happy family enjoying their organized, peaceful home"
                className="w-full h-80 object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-trust/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-pure-clean">
                <p className="font-medium">
                  "Now we have family game nights every Friday instead of cleanup marathons."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
