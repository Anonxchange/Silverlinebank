
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CorporateInvestmentBankingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop"
              alt="Business professionals in modern office"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 text-gray-900 leading-tight">
              People you trust and respect, with the strategic solutions and financial strength to help power your business
            </h1>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-white py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <Button 
              variant="outline" 
              className="h-auto py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg border-2 border-gray-800 hover:bg-gray-50 mb-8 md:mb-16"
            >
              Hear what our clients are saying
            </Button>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bg-white py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 md:mb-8"></div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 md:mb-8">
              Explore recent perspectives and insights
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-16 leading-relaxed max-w-3xl mx-auto">
              Explore how our team elevates industry solutions and enhances client experiences to drive growth and achievement across sectors.
            </p>
          </div>
        </section>

        {/* Deal Features Section */}
        <section className="bg-gray-50 py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* PNC Deal */}
              <Card className="overflow-hidden border-none shadow-lg w-full">
                <div className="bg-white p-4 md:p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <div className="text-orange-600 text-4xl md:text-6xl font-bold">PNC</div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 md:pt-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Deal Feature</h3>
                    
                    <div className="space-y-2 md:space-y-3 text-left">
                      <p className="text-base md:text-lg font-semibold text-gray-900">Mergers & Acquisitions</p>
                      <p className="text-sm md:text-base text-gray-700">PNC Financial Services Group, Inc to acquire FirstBank Holding Company</p>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">$4.1 billion</p>
                      <p className="text-sm md:text-base text-gray-700">Silverline Bank acted as Financial Advisor to PNC</p>
                      <p className="text-sm md:text-base text-gray-600">September 2025</p>
                      
                      <div className="pt-3 md:pt-4 space-y-2">
                        <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                          Read press release &gt;
                        </Button>
                        <br />
                        <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                          See more deals &gt;
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Via Transportation IPO */}
              <Card className="overflow-hidden border-none shadow-lg w-full">
                <div className="bg-white p-4 md:p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <div className="text-blue-600 text-3xl md:text-4xl font-bold">VIA</div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 md:pt-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Deal Feature</h3>
                    
                    <div className="space-y-2 md:space-y-3 text-left">
                      <p className="text-base md:text-lg font-semibold text-gray-900">Equity Capital Markets</p>
                      <p className="text-sm md:text-base text-gray-700">Via Transportation</p>
                      <p className="text-sm md:text-base text-gray-700">Initial Public Offering</p>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">$493 million</p>
                      <p className="text-sm md:text-base text-gray-700">Silverline Bank acted as Active Book Runner</p>
                      <p className="text-sm md:text-base text-gray-600">September 2025</p>
                      
                      <div className="pt-3 md:pt-4 space-y-2">
                        <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                          Read press release &gt;
                        </Button>
                        <br />
                        <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                          See more deals &gt;
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sycamore Partners Deal */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="bg-white p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-green-700 text-lg font-bold flex items-center">
                      <span className="mr-2">🌳</span>
                      SYCAMORE PARTNERS
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-gray-600">to acquire</p>
                    <div className="text-blue-600 text-lg font-bold mt-2">
                      Walgreens Boots Alliance
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Deal Feature</h3>
                    
                    <div className="space-y-3 text-left">
                      <p className="text-lg font-semibold text-gray-900">Mergers & Acquisitions</p>
                      <p className="text-gray-700">Sycamore Partners to acquire Walgreens Boots Alliance</p>
                      <p className="text-2xl font-bold text-gray-900">$23.7 billion</p>
                      <p className="text-gray-700">Silverline Bank acted as Financial Advisor to Sycamore Partners</p>
                      <p className="text-gray-600">August 2025</p>
                      
                      <div className="pt-4">
                        <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800">
                          See more deals &gt;
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* The Next Horizon */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop"
                    alt="Business professionals walking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Next Horizon</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our clients are industry leaders, changemakers, and visionaries. We focus on services and solutions that can help you embrace change and elevate your business.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Featured client: IHG Hotels & Resorts: Global Hospitality Growth
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800">
                    Watch video &gt;
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="bg-white py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 md:mb-8"></div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 md:mb-8">
              Solutions customized for your business
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-16 leading-relaxed max-w-3xl mx-auto">
              Leverage our deep industry expertise, powerful financial support, and comprehensive solutions for corporate and
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <section className="bg-gray-50 py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              {/* Investment Banking */}
              <Card className="overflow-hidden border-none shadow-lg w-full">
                <div className="relative h-48 md:h-64">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                    alt="Business professionals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Investment Banking</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    Utilize the depth and breadth of our experience to help optimize your strategy to move forward confidently
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-base md:text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Global Markets */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
                    alt="Business team meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Markets</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Access our personalized services, execution, and insightful market analytics and advisory
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Commercial Real Estate */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                    alt="Office meeting with city view"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Real Estate</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Access to financing, banking, and advisory solutions for investors and developers
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Lending */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                    alt="Construction and development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lending</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Take advantage of customized solutions to increase value and mitigate risk
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Global Payments & Liquidity */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Payments & Liquidity</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Treasury management solutions to help optimize cash flow and liquidity and mitigate financial risk for your business
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Our Approach */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
                    alt="Business consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Experience the Silverline Bank difference: industry expertise, customized solutions, execution, and access to global services
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-lg">
                    Explore more &gt;
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="bg-white py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 md:mb-8"></div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 md:mb-8">
              Be a part of what's next
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-16 leading-relaxed max-w-3xl mx-auto">
              Our greatest asset is our people. Join our team in unlocking economic growth and human potential across industries and within our communities.
            </p>
          </div>
        </section>

        {/* Leadership Profile */}
        <section className="bg-gray-50 py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="overflow-hidden border-none shadow-lg w-full">
              <div className="relative h-48 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                  alt="Alex Douklias"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Alex Douklias</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">Vice Chair, Corporate Banking</p>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed italic">
                  "I don't think of it as selling. I think of it as delivering solutions. My focus is on understanding my clients' pain points and finding ways to help. If we do that well, the business naturally follows."
                </p>
                <div className="space-y-2 md:space-y-3">
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                    Read more &gt;
                  </Button>
                  <br />
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm md:text-base">
                    See more inspiring leaders &gt;
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Events and Resources */}
        <section className="bg-white py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Innovation Summit */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop"
                    alt="Innovation Summit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation in Treasury Summit</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Hear from CFOs, treasurers, and Silverline Bank experts on the rapid pace of change in global payments and liquidity and staying ahead of the curve.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800">
                    Watch videos &gt;
                  </Button>
                </CardContent>
              </Card>

              {/* Career Development */}
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=400&fit=crop"
                    alt="Career development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Championing your future</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Tune into our newest episode of our Leading Voices podcast 
                    <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800 mx-1">
                      "Talent Development: Finding success,"
                    </Button>
                    as our development officer leaders from banking and markets teams explore the transformative power of life lessons in fostering personal and professional development.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Grow and advance your career with a team that values diverse perspectives.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-700 hover:text-purple-800">
                    Explore our careers &gt;
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-xs md:text-sm text-gray-600 space-y-3 md:space-y-4">
              <p className="leading-relaxed">
                Silverline Bank Corporate & Investment Banking (CIB) and Silverline Bank Securities (WFS) are the trade names used for the corporate banking, capital markets, and investment banking services of Silverline Bank & Company and its subsidiaries, including but not limited to Silverline Bank Securities, LLC, member FINRA, NYSE, FINRA, NFA, and SIPC, Silverline Bank Prime Services, LLC, member of FINRA, NFA and SIPC, and Silverline Bank, N.A., member NFA and swap dealer registered with the CFTC and security-based swap dealer registered with the SEC, member FDIC. Silverline Bank Securities, LLC and Silverline Bank Prime Services, LLC, are distinct entities from affiliated banks and thrifts.
              </p>
              <p className="font-medium">RO-4041158</p>
              <p className="font-medium">LRC-1124</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
