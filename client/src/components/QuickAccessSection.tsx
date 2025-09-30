import { Landmark, PiggyBank, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quickAccessItems = [
  {
    icon: Landmark,
    label: "Checking",
    color: "text-chart-3"
  },
  {
    icon: PiggyBank,
    label: "Savings & CDs",
    color: "text-chart-1"
  },
  {
    icon: CreditCard,
    label: "Credit Cards",
    color: "text-chart-2"
  },
  {
    icon: TrendingUp,
    label: "Investing",
    color: "text-chart-4"
  }
];

export default function QuickAccessSection() {
  return (
    <section className="bg-background border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickAccessItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate cursor-pointer"
                onClick={() => console.log(`${item.label} quick access clicked`)}
                data-testid={`card-quick-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className={`${item.color}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-medium text-center" data-testid={`text-quick-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item.label}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
