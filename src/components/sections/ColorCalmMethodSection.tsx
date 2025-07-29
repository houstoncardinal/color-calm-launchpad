import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Heart, ArrowRight, CheckCircle } from "lucide-react";
import organizingImage from "@/assets/organizing-professional.jpg";

const ColorCalmMethodSection = () => {
  const steps = [
    {
      number: "01",
      title: "Color Psychology Assessment",
      description: "We analyze your space and lifestyle to determine the perfect color palette that promotes calm and productivity.",
      icon: Brain,
      color: "serenity-blue"
    },
    {
      number: "02", 
      title: "Strategic Organization Design",
      description: "Using color theory principles, we create organization systems that feel natural and effortless to maintain.",
      icon: Palette,
      color: "sage-harmony"
    },
    {
      number: "03",
      title: "Mindful Space Transformation",
      description: "We implement the system with premium cleaning and organization, creating your personal sanctuary.",
      icon: Heart,
      color: "lavender-peace"
    }
  ];

  const benefits = [
    "Reduced stress and anxiety in your daily environment",
    "Effortless organization that maintains itself",
    "More quality time for family connection",
    "Increased focus and mental clarity",
    "A home that supports your wellbeing",
    "Color-coded systems everyone can follow"
  ];

  return (
    <section id="method" className="py-20 bg-pure-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-peace/20 rounded-full border border-lavender-peace/40 mb-6">
            <Palette className="w-4 h-4 text-plum-luxury" />
            <span className="text-sm font-medium text-text-primary">
              Our Signature Method
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            The Color Calm Method™
          </h2>
          
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            More than traditional cleaning, our method combines color psychology with professional organization 
            to create spaces that naturally promote peace, reduce stress, and support your family's wellbeing.
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif font-bold text-ocean-trust">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src={organizingImage}
              alt="Professional organizer demonstrating the Color Calm Method"
              className="w-full h-full object-cover rounded-3xl shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-trust/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-calm rounded-3xl p-8 md:p-12 shadow-floating border border-sage-harmony/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-text-primary mb-4">
              Transform Your Life, Not Just Your Space
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              When your environment is designed with color psychology principles, 
              every day becomes more peaceful, productive, and joyful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest-calm mt-1 flex-shrink-0" />
                <span className="text-text-primary">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="xl" className="gap-3">
              Experience the Color Calm Method
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Science Behind the Method */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-warm-embrace/40 border-sage-harmony/40 shadow-card hover:shadow-elegant transition-all duration-500">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-gradient-trust rounded-xl mx-auto flex items-center justify-center">
                <Brain className="w-6 h-6 text-pure-clean" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-text-primary">
                The Science of Color Psychology
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                Research shows that colors directly impact our mood, stress levels, and cognitive function. 
                Our certified color psychology approach creates environments that naturally support:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-serenity-blue rounded-full mx-auto"></div>
                  <strong className="text-text-primary">Reduced Cortisol</strong>
                  <p className="text-text-secondary">Calming blues lower stress hormones</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-sage-harmony rounded-full mx-auto"></div>
                  <strong className="text-text-primary">Enhanced Focus</strong>
                  <p className="text-text-secondary">Greens improve concentration and balance</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-lavender-peace rounded-full mx-auto"></div>
                  <strong className="text-text-primary">Better Sleep</strong>
                  <p className="text-text-secondary">Soft purples promote restful relaxation</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ColorCalmMethodSection;