const products = [
  { emoji: "💳", label: "Checking", gradient: "from-purple-400 to-blue-500" },
  { emoji: "💰", label: "Savings & CDs", gradient: "from-orange-400 to-yellow-500" },
  { emoji: "💳", label: "Credit Cards", gradient: "from-red-500 to-pink-500" },
  { emoji: "🏠", label: "Home Loans", gradient: "from-purple-500 to-indigo-400" },
  { emoji: "📋", label: "Personal Loans", gradient: "from-orange-400 to-red-400" },
  { emoji: "🚗", label: "Auto Loans", gradient: "from-red-600 to-orange-500" },
  { emoji: "📊", label: "Investing", gradient: "from-indigo-400 to-purple-500" },
  { emoji: "👤", label: "Premier", gradient: "from-yellow-400 to-purple-400" },
  { emoji: "🧮", label: "Education & Tools", gradient: "from-purple-500 to-pink-500" },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-8 md:py-12 border-b border-border">
      <div className="max-w-md mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <button
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent active:bg-accent/80 transition-all text-left"
              onClick={() => console.log(`${product.label} clicked`)}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl shadow-md`}>
                {product.emoji}
              </div>
              <span className="text-base font-medium text-foreground">
                {product.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
