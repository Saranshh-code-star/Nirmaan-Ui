import { Zap, Palette, Lock, Code, Layers, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with minimal bundle size and tree-shaking support.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Easily customize colors, spacing, and styles to match your brand identity.",
  },
  {
    icon: Lock,
    title: "Accessible",
    description: "Built with accessibility in mind, following WAI-ARIA standards and best practices.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean API, TypeScript support, and comprehensive documentation for smooth DX.",
  },
  {
    icon: Layers,
    title: "Composable",
    description: "Build complex UIs by combining simple, reusable components however you need.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Beautiful, contemporary designs that look great in any project out of the box.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to build
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features that make building beautiful interfaces a breeze
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:translate-y-[-4px] bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
