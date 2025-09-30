
import { Card, CardContent } from "@/components/ui/card";

export default function InsightsSection() {
  return (
    <section className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-1 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-insights-title">
              Need help? Ask Silverline<sup className="text-xl">®</sup>
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-8" data-testid="text-insights-description">
              Silverline<sup className="text-xs">1</sup> gives you valuable insights like a summary of your spending by category, retailer and across accounts. Find it only in the Silverline Bank Mobile<sup className="text-xs">®</sup> app.
            </p>
          </div>

          {/* Mobile App Mockup */}
          <div className="order-2 md:order-2 flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl max-w-[280px]">
                <div className="bg-gray-50 rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="ml-2 text-xs">📶 📶 🔋</div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-white px-6 py-4 flex items-center justify-between border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        S
                      </div>
                      <span className="font-semibold text-black">Silverline</span>
                    </div>
                    <button className="text-gray-400 text-xl">×</button>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4 bg-white">
                    <h3 className="text-lg text-black mb-6">Here are insights into your spending</h3>
                    
                    {/* Tabs */}
                    <div className="flex gap-8 mb-6 border-b">
                      <button className="text-gray-500 pb-2">Summary</button>
                      <button className="text-purple-600 pb-2 border-b-2 border-purple-600 font-medium">Category</button>
                      <button className="text-gray-500 pb-2">Merchant</button>
                    </div>

                    {/* Spending Chart */}
                    <div className="relative mb-6">
                      <div className="flex justify-center mb-4">
                        <div className="relative w-32 h-32">
                          {/* Donut Chart */}
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            {/* Red segment */}
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#ef4444"
                              strokeWidth="3"
                              strokeDasharray="25, 100"
                              strokeDashoffset="0"
                            />
                            {/* Purple segment */}
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#8b5cf6"
                              strokeWidth="3"
                              strokeDasharray="30, 100"
                              strokeDashoffset="-25"
                            />
                            {/* Pink segment */}
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#ec4899"
                              strokeWidth="3"
                              strokeDasharray="20, 100"
                              strokeDashoffset="-55"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                            <div className="text-xs text-gray-500">Mar 1 - Mar 31, 2024</div>
                            <div className="text-lg font-semibold">$1,725.34</div>
                            <div className="text-xs text-green-600">+ $1,100.66 from Feb</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-black mb-2">Top categories</h4>
                      <div className="text-xs text-gray-500 mb-3">March 1 - March 31, 2024</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-black text-sm">Shopping</span>
                          </div>
                          <span className="text-black text-sm">$350.23</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-gray-400 text-sm">Food / Drink</span>
                          </div>
                          <span className="text-gray-400 text-sm">$298.47</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="px-4 py-3 bg-gradient-to-r from-purple-400 to-pink-400">
                    <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        S
                      </div>
                      <input 
                        type="text" 
                        placeholder="Type or say something" 
                        className="flex-1 text-gray-500 text-sm bg-transparent outline-none"
                        readOnly
                      />
                      <button className="text-purple-600">🎤</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* App Store Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-primary-foreground/70">*Screen image is simulated</p>
        </div>
      </div>
    </section>
  );
}
