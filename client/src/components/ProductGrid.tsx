import { CreditCard, Home, DollarSign, Car, TrendingUp, Award, GraduationCap } from "lucide-react";

const products = [
  { icon: CreditCard, label: "Credit Cards", color: "text-chart-1" },
  { icon: Home, label: "Home Loans", color: "text-chart-3" },
  { icon: DollarSign, label: "Personal Loans", color: "text-chart-2" },
  { icon: Car, label: "Auto Loans", color: "text-chart-3" },
  { icon: TrendingUp, label: "Investing", color: "text-chart-2" },
  { icon: Award, label: "Premier", color: "text-chart-3" },
  { icon: GraduationCap, label: "Education & Tools", color: "text-chart-2" },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-12 md:py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                data-testid={`button-product-${product.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => console.log(`${product.label} clicked`)}
              >
                <div className={`${product.color}`}>
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground text-center" data-testid={`text-product-${product.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {product.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
