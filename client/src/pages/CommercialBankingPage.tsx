import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CommercialBankingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <section className="bg-white">
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop"
              alt="Business professionals"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-12 text-gray-900 leading-tight">
              Business can be complicated—your banking shouldn't be.
            </h1>
            
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16">
              Seamless, scalable, smart
            </h2>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Turn to our team for market-leading financial solutions, trusted insights, and the strength of our global footprint.
            </p>
            
            <div className="flex flex-col gap-6 max-w-md mx-auto mb-16">
              <Button 
                className="w-full h-auto py-6 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full text-lg"
              >
                Financing your business
              </Button>
              
              <Button 
                className="w-full h-auto py-6 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full text-lg"
              >
                Payments and liquidity solutions
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
                alt="Team meeting"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Navigating the unique challenges of your industry
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From health care to technology, food to manufacturing, we have broad and deep experience across many industries and sectors. We'll help you identify and take advantage of key opportunities throughout the cycles of your business and the economy.
              </p>
              
              <Button 
                variant="outline" 
                className="h-auto py-4 px-10 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-50"
              >
                Explore industry solutions
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Sharing insights on what matters to you
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Take a deep dive with our experts as they present valuable research, analysis, and perspectives on current innovations and industry trends.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                    alt="Business analytics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    Middle Market Indicator: growth remains strong amid increased uncertainty and heightened challenges
                  </h3>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    View infographic (PDF) &gt;
                  </a>
                  <br />
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    Access full report (PDF) &gt;
                  </a>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop"
                    alt="Construction site"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    Smart strategies to right-size your business
                  </h3>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    Listen now &gt;
                  </a>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop"
                    alt="Retail business"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">
                    From factory to checkout: The supply chain story you didn't know you were living
                  </h3>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    Read report (PDF) &gt;
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How proptech innovators can solve three common challenges
                  </h3>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    Read article &gt;
                  </a>
                  
                  <div className="my-6 border-t border-gray-200"></div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why every business owner needs a contingency plan
                  </h3>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium">
                    Read article &gt;
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button className="h-auto py-4 px-12 bg-red-700 hover:bg-red-800 text-white rounded-full text-lg">
                Explore all insights
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Celebrating customer successes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
                    alt="Business founders"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 leading-tight">
                    Discover how Chomps meat sticks became a snack sensation
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Chomps' growth from a bootstrapped startup to a national brand is just the beginning. With the help of Silverline Bank, it has plans to take an even larger bite out of the snack market.
                  </p>
                  <Button 
                    variant="outline" 
                    className="h-auto py-3 px-8 rounded-full border-2 border-gray-800 hover:bg-gray-50"
                  >
                    Read article
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                    alt="Business owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 leading-tight">
                    New banking relationship sets up medical staffing firm for long-term success
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Nationwide, women-owned businesses generate $2.7 trillion in revenue annually. Candace Clow, founder and CEO of Marvel Medical Staffing, is one of these savvy, hard-working women entrepreneurs.
                  </p>
                  <Button 
                    variant="outline" 
                    className="h-auto py-3 px-8 rounded-full border-2 border-gray-800 hover:bg-gray-50"
                  >
                    Read article
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Reach out to get started
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's connect. We're focused on providing tailored products and services to meet the unique banking needs of commercial businesses with annual revenues ranging from $25 million to $2 billion.
            </p>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 px-12 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-50 mb-16"
            >
              Contact us
            </Button>

            <div className="text-sm text-gray-600 space-y-4 max-w-3xl mx-auto text-left">
              <p>
                Commercial Banking products and services are provided by Silverline Bank, N.A. and its subsidiaries and affiliates. Silverline Bank, N.A., a bank affiliate of Silverline Bank & Company, is not liable or responsible for obligations of its affiliates. Deposits held in non-U.S. branches are not FDIC insured. Products and services require credit approval.
              </p>
              <p>
                Silverline Bank, N.A. Member FDIC. Deposits held in non-U.S. branches are not FDIC insured.
              </p>
              <p className="font-medium">RO-4452472</p>
              <p className="font-medium">LRC-0525</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
