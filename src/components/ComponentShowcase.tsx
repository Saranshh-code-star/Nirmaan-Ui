import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const ComponentShowcase = () => {
  return (
    <section id="components" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Components that work together
          </h2>
          <p className="text-xl text-muted-foreground">
            A growing collection of beautiful, accessible components
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-border shadow-elegant">
            <CardHeader>
              <CardTitle>Buttons & Inputs</CardTitle>
              <CardDescription>Interactive elements for user actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <Input placeholder="Type something..." />
              <div className="flex items-center gap-4">
                <Badge>New</Badge>
                <Badge variant="secondary">Popular</Badge>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border shadow-elegant">
            <CardHeader>
              <CardTitle>Controls & Feedback</CardTitle>
              <CardDescription>Switches, sliders, and more</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable notifications</span>
                <Switch />
              </div>
              <div className="space-y-2">
                <span className="text-sm">Volume</span>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark mode</span>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            Explore All Components
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
