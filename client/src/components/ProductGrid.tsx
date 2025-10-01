import { CreditCard, PiggyBank, Home, FileText, Car, TrendingUp, Crown, GraduationCap } from "lucide-react";
import { Link } from "wouter";

const products = [
  { icon: CreditCard, label: "Checking", gradient: "from-purple-400 to-blue-500", link: null },
  { icon: PiggyBank, label: "Savings & CDs", gradient: "from-orange-400 to-yellow-500", link: null },
  { icon: CreditCard, label: "Credit Cards", gradient: "from-red-500 to-pink-500", link: null },
  { icon: Home, label: "Home Loans", gradient: "from-purple-500 to-indigo-400", link: null },
  { icon: FileText, label: "Personal Loans", gradient: "from-orange-400 to-red-400", link: null },
  { icon: Car, label: "Auto Loans", gradient: "from-red-600 to-orange-500", link: null },
  { icon: TrendingUp, label: "Investing", gradient: "from-indigo-400 to-purple-500", link: "/investing" },
  { icon: Crown, label: "Premier", gradient: "from-yellow-400 to-purple-400", link: null },
  { icon: GraduationCap, label: "Education & Tools", gradient: "from-purple-500 to-pink-500", link: null },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-8 md:py-12 border-b border-border">
      <div className="max-w-md mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            const content = (
              <>
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-base font-medium text-foreground">
                  {product.label}
                </span>
              </>
            );

            if (product.link) {
              return (
                <Link key={index} href={product.link} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent active:bg-accent/80 transition-all text-left">
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent active:bg-accent/80 transition-all text-left"
                onClick={() => console.log(`${product.label} clicked`)}
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
