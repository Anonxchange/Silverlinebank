import { MapPin, Calendar, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const helpItems = [
  {
    icon: MapPin,
    label: "Find a location",
    hasDropdown: true
  },
  {
    icon: Calendar,
    label: "Make an appointment",
    hasDropdown: false
  },
  {
    icon: HelpCircle,
    label: "Quick help",
    hasDropdown: true
  }
];

export default function HelpSection() {
  return (
    <section className="bg-background py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8" data-testid="text-help-header">
          How can we help?
        </h2>
        
        <div className="space-y-4">
          {helpItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start gap-4 h-auto py-4 px-6 hover-elevate"
                data-testid={`button-help-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => console.log(`${item.label} clicked`)}
              >
                <div className="bg-muted rounded-full p-3">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-base font-medium text-primary flex-1 text-left">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <span className="text-muted-foreground">&gt;</span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
