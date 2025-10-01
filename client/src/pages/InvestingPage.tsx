import { Smartphone, PieChart, Handshake, Users, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// ✅ External Unsplash images
const professionalBusinessImg = "https://images.unsplash.com/photo-1581090700227-4c4f8b3a56b9?q=80&w=1200&auto=format&fit=crop";
const happyMotherImg = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop";
const modernBridgeImg = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop";
const personHoldingSmartImg = "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?q=80&w=1200&auto=format&fit=crop";
const happyCoupleImg = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop";
const laboratoryImg = "https://images.unsplash.com/photo-1581092795360-6a5d3c1df2b3?q=80&w=1200&auto=format&fit=crop";
const digitalNetworkImg = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop";

const investmentOptions = [
  {
    icon: Smartphone,
    title: "Do-it-yourself investing",
    description: "Hands-on control with $0 online stock and ETF trades",
    link: "SilverlineTrade®",
  },
  {
    icon: PieChart,
    title: "Automated investing",
    description: "Begin your investing journey with just $500",
    link: "Intuitive Investor®",
  },
  {
    icon: Handshake,
    title: "Dedicated financial advisor",
    description: "Personalized investment planning and advice",
    link: "Silverline Bank Advisors",
  },
  {
    icon: Users,
    title: "Team-based wealth management",
    description: "Solutions for high-net-worth individuals",
    link: "The Private Bank",
  },
];

const insights = [
  {
    title: "Investment Strategy update",
    description: "Weekly market insights and possible impacts on investors from Silverline Bank Investment Institute.",
    cta: "Get the report",
    image: modernBridgeImg,
  },
  {
    title: "Navigating market uncertainty",
    description: "Silverline Bank Investment Institute provides insights on the events moving the markets and how investors may want to respond.",
    cta: "Get the latest",
    image: personHoldingSmartImg,
  },
  {
    title: "Retirement strategies",
    description: "Whether you're close to retirement or years away, we can help you build a retirement plan to help meet your goals.",
    cta: "Retirement center",
    image: happyCoupleImg,
  },
];

export default function InvestingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative">
          <div className="relative">
            <img 
              src={professionalBusinessImg} 
              alt="Financial advisor consultation"
              className="w-full h-64 md:h-80 object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Unified card overlapping the image */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg max-w-md w-full transform translate-y-1/2">
                <h1 className="text-2xl md:text-3xl font-serif text-amber-700 mb-3">
                  Investing simplified
                </h1>
                <p className="text-gray-700 mb-4 text-sm">
                  Investing isn't easy, but we've done the work to help simplify.
                </p>
                <Button 
                  className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-2 rounded-full text-sm font-medium"
                >
                  Show me how
                </Button>
              </div>
            </div>
          </div>

          {/* Add spacing to prevent overlap with next section */}
          <div className="h-24"></div>

          <div className="flex gap-3 mt-6 justify-center px-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-700 text-white text-xs">
              <PieChart className="w-3 h-3" />
              <span className="font-medium">Investing</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs">
              <Users className="w-3 h-3" />
              <span className="font-medium">Wealth management</span>
            </button>
          </div>
        </section>

        {/* ✅ Rest of the code stays the same, just images now external */}
        <section className="py-8 md:py-12 bg-background">
          <div className="max-w-md mx-auto px-4 space-y-4">
            {investmentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {option.description}
                      </p>
                      <button className="text-indigo-900 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        {option.link}
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-md mx-auto px-4 mt-6">
            <Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 rounded-full text-sm font-medium">
              Compare ways to invest
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-8">
              <img 
                src={happyMotherImg} 
                alt="Happy family"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h2 className="text-3xl font-serif text-amber-700 mb-4">
                Competitive. Flexible. Accessible.
              </h2>
              <p className="text-gray-700 mb-6">
                Brokered Liquid Deposit is the cash alternative that works harder.
              </p>
              <Button variant="outline" className="w-full py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-50 text-sm">
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-12 md:py-16 bg-background border-t border-border">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-amber-700 mx-auto mb-6"></div>
              <h2 className="text-3xl font-serif text-amber-700 mb-8">
                Investing strategies and insights
              </h2>
            </div>

            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {insight.description}
                    </p>
                    <Button 
                      variant={index === 0 ? "default" : "outline"}
                      className={`w-full py-3 rounded-full text-sm ${
                        index === 0 
                          ? "bg-gray-900 hover:bg-gray-800 text-white" 
                          : "border-2 border-gray-800 text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {insight.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-amber-700 mx-auto mb-6"></div>
              <h2 className="text-3xl font-serif text-amber-700 mb-8">
                Benefits and resources
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={laboratoryImg} 
                  alt="Scientific research"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The potential for new weight-loss drugs
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Looking forward, Silverline Bank Investment Institute believes the market for GLP-1 drugs should continue expanding rapidly as various factors will likely make them more accessible to patients.
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-sm">
                    Get the report
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={digitalNetworkImg} 
                  alt="Digital assets"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Understanding digital assets
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Silverline Bank Investment Institute provides an overview of what digital assets are and their importance to the digital future.
                  </p>
                  <Button variant="outline" className="w-full py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-50 text-sm">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}