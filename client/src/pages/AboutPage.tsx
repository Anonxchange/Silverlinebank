
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="text-center py-8 md:py-12">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h1 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
                About Silverline Bank
              </h1>
            </div>
            
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                alt="Professional woman smiling outside bank branch"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Unified card overlapping the image */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4">
                <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg max-w-md w-full transform translate-y-1/2">
                  <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    Putting people and communities first
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We're committed to helping customers and communities thrive through responsible banking and meaningful partnerships.
                  </p>
                </div>
              </div>
          

           {/* Unified card overlapping the image */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4">
                <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg max-w-md w-full transform translate-y-1/2">
                  <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    News releases
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Keeping you informed with the latest, breaking news from within and around Silverline Bank
                  </p>
                </div>
              </div>
            

           {/* Unified card overlapping the image */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4">
                <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg max-w-md w-full transform translate-y-1/2">
                  <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    Silverline Bank Stories
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Expert tips, real stories, and customer spotlights to inform businesses, empower communities, and spark ideas.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Add spacing to prevent overlap with next section */}
            <div className="h-24"></div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
            
            {/* Investor Relations */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Investor relations
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Providing investors with information about our financial performance
                </p>
                <div className="text-center">
                  <Button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Leadership and Governance */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Leadership and governance
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Earning trust by doing the right thing in the right way for customers, communities, and employees
                </p>
                <div className="text-center">
                  <Button variant="outline" className="w-full md:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-50 rounded-full px-8 py-3">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Inclusion and Accessibility */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99l-2.88 3.63A2 2 0 0 0 11.75 15H14v7h6zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm-2 .5c-1.1 0-2 .9-2 2v7h2v-5h.5l3.5-3.5c.26-.26.41-.62.41-1 0-.83-.67-1.5-1.5-1.5H10.5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Inclusion and accessibility
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Championing inclusion and accessibility in every aspect of our business
                </p>
                <div className="text-center">
                  <Button variant="outline" className="w-full md:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-50 rounded-full px-8 py-3">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Careers Section */}
        <section className="bg-gradient-to-br from-yellow-100 to-orange-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Imagine a rewarding career with great work-life balance
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Wherever you may be on your journey, discover your sweet spot at Silverline Bank.
            </p>
            
            <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-50 rounded-full px-12 py-4 text-lg">
              Join us
            </Button>
          </div>
        </section>

        {/* Responsibility and Impact */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Responsibility and impact
                </h3>
                <p className="text-gray-700 mb-6">
                  Focusing on making a positive impact by supporting a sustainable and inclusive future
                </p>
                <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-50 rounded-full px-8 py-3">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              History in the making
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              We've helped people go further with their money since our founding by Henry Silverline and William Bank in 1852. With innovative solutions that evolve with the times, we continue to help our customers get ahead.
            </p>
            
            <Button variant="link" className="text-purple-700 hover:text-purple-800 text-lg">
              Explore our history
            </Button>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
            
            {/* Supplier Resource Center */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Supplier resource center
                </h3>
                <p className="text-gray-700 mb-6">
                  Get the information you need to do business with Silverline Bank.
                </p>
                <Button variant="link" className="p-0 text-purple-700 hover:text-purple-800">
                  Learn more &gt;
                </Button>
              </CardContent>
            </Card>

            {/* Sponsorships */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Sponsorships
                </h3>
                <p className="text-gray-700 mb-6">
                  Check out how to apply for a Silverline Bank sponsorship.
                </p>
                <Button variant="link" className="p-0 text-purple-700 hover:text-purple-800">
                  Learn more &gt;
                </Button>
              </CardContent>
            </Card>

            {/* Teamworks for Employees */}
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Teamworks for employees
                </h3>
                <p className="text-gray-700 mb-6">
                  Access employee benefits and services privately — anytime, anywhere.
                </p>
                <Button variant="link" className="p-0 text-purple-700 hover:text-purple-800">
                  Learn more &gt;
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="bg-white py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              </svg>
              <span className="text-gray-600">How was your experience?</span>
              <Button variant="link" className="p-0 text-purple-700 hover:text-purple-800">
                Give us feedback.
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mb-8">DT1-03312026-18-8141655-1.1</p>
          </div>
        </section>

        {/* Footer Links Section */}
        <section className="bg-gray-100 py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="space-y-3">
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Privacy, Cookies, Security & Legal
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Notice of Data Collection
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Report Fraud
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Home
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Careers
                </Button>
              </div>
              
              <div className="space-y-3">
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Do Not Sell or Share My Personal Information
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  General Terms of Use
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Sitemap
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  About Silverline Bank
                </Button>
                <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900 justify-start">
                  Inclusion and Accessibility
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                © 1999 - 2025 Silverline Bank. NMLS# ID 399801
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
