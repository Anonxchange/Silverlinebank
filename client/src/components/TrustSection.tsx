import { Shield, Lock, CheckCircle2, Award } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    label: "FDIC Insured"
  },
  {
    icon: Lock,
    label: "Bank-Level Security"
  },
  {
    icon: CheckCircle2,
    label: "150+ Years of Service"
  },
  {
    icon: Award,
    label: "Award-Winning Service"
  }
];

export default function TrustSection() {
  return (
    <section className="bg-muted/30 py-8 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 text-center"
                data-testid={`trust-${feature.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
