import { Smartphone, PieChart, Handshake, Users, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Use public path for images
const professionalBusinessImg = "/attached_assets/stock_images/female-professional-helping-new-employee 2.jpg";
const happyMotherImg = "/attached_assets/stock_images/happy_mother_playing_2f22dd98.jpg";
const modernBridgeImg = "/attached_assets/stock_images/modern_bridge_infras_69e246fe.jpg";
const personHoldingSmartImg = "/attached_assets/stock_images/person_holding_smart_653c4fd0.jpg";
const happyCoupleImg = "/attached_assets/stock_images/happy_couple_embraci_f23d0507.jpg";
const laboratoryImg = "/attached_assets/stock_images/laboratory_test_tube_472c2098.jpg";
const digitalNetworkImg = "/attached_assets/stock_images/digital_network_glob_1ab6bb9b.jpg";

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

        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Boost your protection
            </h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Get the latest security features and tips in the newly redesigned Security Center, only in the Silverline Bank Mobile® app<sup>2</sup>.
            </p>
            
            {/* Mock phone with Security Center interface */}
            <div className="relative mx-auto mb-6" style={{ width: '280px', height: '500px' }}>
              <div className="absolute inset-0 bg-white rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-teal-800 rounded-[2rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span>5:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="text-xs">📶 📶 📶</div>
                      <div className="text-xs">🔋</div>
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <button className="text-white text-lg">←</button>
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">🛡️</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">🔔</span>
                        <span className="text-white">🔒</span>
                        <span className="text-white text-xs">Sign off</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-xl font-semibold mb-2">Security Center</h3>
                    <p className="text-teal-200 text-sm mb-6">Take a minute to explore your top recommendations</p>
                    
                    <div className="text-center mb-6">
                      <div className="text-green-400 text-6xl font-bold mb-2">80%</div>
                      <div className="text-green-400 text-sm font-medium tracking-wider">DONE</div>
                      <div className="w-16 h-16 mx-auto mt-4 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-teal-800 text-2xl">✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom card */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-2xl p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <h4 className="text-gray-900 font-semibold mb-1">Very Nice!</h4>
                      <p className="text-gray-600 text-sm">You've gone paperless.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Store button */}
            <div className="mb-6">
              <div className="inline-flex items-center bg-black rounded-lg px-4 py-2">
                <div className="mr-3">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white text-xs">Download on the</div>
                  <div className="text-white text-lg font-semibold">App Store</div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xs">*Screen images simulated</p>
          </div>
        </section>

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