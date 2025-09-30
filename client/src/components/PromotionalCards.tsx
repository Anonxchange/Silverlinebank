import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, GraduationCap, PiggyBank, Percent } from "lucide-react";

const promotions = [
  {
    icon: CreditCard,
    title: "Enjoy 0% intro APR for 21 months",
    description: "from account opening on purchases and qualifying balance transfers. Terms apply.",
    linkText: "Learn more",
    iconColor: "text-primary"
  },
  {
    icon: GraduationCap,
    title: "New customer? Say hello to a $125 bonus",
    description: "Open a Clear Access Banking account, great for students & more, complete offer requirements",
    linkText: "See offer details",
    iconColor: "text-chart-3"
  },
  {
    icon: PiggyBank,
    title: "Open a savings account",
    description: "Explore our savings accounts and find the right fit for you",
    linkText: "Get started",
    iconColor: "text-chart-2"
  },
  {
    icon: Percent,
    title: "Interest rates today",
    description: "Learn more",
    linkText: "Learn more",
    iconColor: "text-chart-3"
  }
];

export default function PromotionalCards() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-promo-${index}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-4">
                    <div className={`${promo.iconColor} flex-shrink-0`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2" data-testid={`text-promo-title-${index}`}>
                        {promo.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`text-promo-desc-${index}`}>
                        {promo.description}
                      </p>
                      <button 
                        className="text-primary font-medium hover:underline"
                        data-testid={`button-promo-link-${index}`}
                        onClick={() => console.log(`${promo.title} clicked`)}
                      >
                        {promo.linkText} &gt;
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
