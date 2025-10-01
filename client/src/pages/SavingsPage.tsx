
import { useState } from "react";
import { ChevronLeft, Plus, Star, ArrowRight, Phone, MessageCircle, MapPin, PiggyBank, Percent, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SavingsPage() {
  const [, setLocation] = useLocation();
  const [selectedTab, setSelectedTab] = useState("most-popular");

  const savingsProducts = [
    {
      id: "most-popular",
      name: "Most popular",
      icon: PiggyBank,
      title: "Way2Save® Savings",
      subtitle: "Build your savings automatically",
      bestFor: "Saving as you spend with Save As You Go® automatic transfers",
      apy: "0.15% APY",
      minBalance: "$25 minimum deposit to open",
      features: [
        "Automatic transfers from checking",
        "No monthly service fee with qualifying activities",
        "Mobile and online banking"
      ]
    },
    {
      id: "platinum",
      name: "Platinum Savings", 
      icon: Percent,
      title: "Platinum Savings",
      subtitle: "Grow your savings with more ways to access your money",
      bestFor: "Higher balance customers who want easy access",
      apy: "0.45% APY",
      minBalance: "$25 minimum deposit to open",
      features: [
        "Higher interest rates for larger balances",
        "Convenient access to your money",
        "Mobile and online banking"
      ]
    },
    {
      id: "certificates",
      name: "Certificates of Deposit",
      icon: TrendingUp, 
      title: "Silverline Bank CDs",
      subtitle: "Provide a guaranteed rate of return, even during uncertain times",
      bestFor: "Guaranteed returns with fixed rates",
      apy: "4.50% APY",
      minBalance: "$2,500 minimum deposit",
      features: [
        "Fixed interest rates",
        "Guaranteed returns",
        "Multiple term options available"
      ]
    }
  ];

  const faqItems = [
    "What is a savings account?",
    "How do savings accounts work?", 
    "What do I need to open a savings account online?",
    "How do I open a joint savings account or CD?",
    "What's the difference between savings and checking accounts?",
    "How much should I save each month?"
  ];

  const manageAccountItems = [
    "Tips on managing your money",
    "Manage your payments online", 
    "Transferring money",
    "Set up automatic transfers",
    "View account statements",
    "Update account information"
  ];

  const additionalResources = [
    "Planning for retirement",
    "Financial Health Assessment",
    "Kids Savings Account",
    "Emergency fund planning",
    "Investment options",
    "Financial calculators"
  ];

  const selectedProduct = savingsProducts.find(product => product.id === selectedTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <button 
            onClick={() => setLocation('/')}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <span className="text-gray-600 text-base">Personal</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Savings & CDs</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Savings Accounts and CDs
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Build your savings with competitive rates and flexible access to your money
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full">
                Open an account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-700 px-8 py-3 text-lg font-semibold rounded-full">
                Compare accounts
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Accent Bar */}
      <div className="bg-yellow-400 h-2"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Choose Account Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose a savings account that's right for you
          </h2>

          {/* Product Tabs */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8 overflow-x-auto">
            {savingsProducts.map((product) => (
              <button
                key={product.id}
                className={`flex-1 text-center py-6 px-4 border-b-4 transition-all duration-200 min-w-0 ${
                  selectedTab === product.id
                    ? 'border-red-600 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedTab(product.id)}
              >
                <div className="flex justify-center mb-2">
                  <product.icon className="h-8 w-8" />
                </div>
                <div className="text-sm font-semibold">{product.name}</div>
              </button>
            ))}
          </div>

          {/* Selected Product Details */}
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">{selectedProduct.subtitle}</p>
                  <div className="mb-6">
                    <span className="font-semibold text-gray-900">Best for: </span>
                    <span className="text-gray-700">{selectedProduct.bestFor}</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-700 mb-2">{selectedProduct.apy}</div>
                  <div className="text-sm text-gray-600">{selectedProduct.minBalance}</div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Key features:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold">
                    Open account
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full font-semibold">
                    Learn more
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Start saving today
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    Open your account online in minutes with as little as $25
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                    Get started
                  </Button>
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="w-32 h-32 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tools and Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compare all rates
              </h3>
              <p className="text-gray-600 mb-6">
                See current rates for all our savings accounts and CDs
              </p>
              <Button variant="outline" className="w-full rounded-full">
                View rates
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Savings calculator
              </h3>
              <p className="text-gray-600 mb-6">
                See how your savings can grow over time
              </p>
              <Button variant="outline" className="w-full rounded-full">
                Calculate savings
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Find your account
              </h3>
              <p className="text-gray-600 mb-6">
                Take our quiz to find the right savings account for you
              </p>
              <Button variant="outline" className="w-full rounded-full">
                Take quiz
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Savings FAQs */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-8 h-1 bg-yellow-400 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Savings FAQs</h3>
              <div className="space-y-4">
                {faqItems.map((question, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 text-left border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{question}</span>
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Manage Your Account */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Manage your account
              </h3>
              <div className="space-y-4">
                {manageAccountItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <span className="text-red-600 font-medium">{item}</span>
                    <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Additional resources
              </h3>
              <div className="space-y-4">
                {additionalResources.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <span className="text-red-600 font-medium">{item}</span>
                    <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need help choosing the right account?
            </h3>
            <p className="text-lg text-gray-600">
              Our specialists are here to help you find the perfect savings solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call us</h4>
              <p className="text-gray-600 mb-4">1-800-869-3557</p>
              <Button variant="outline" className="rounded-full">
                Call now
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Chat with us</h4>
              <p className="text-gray-600 mb-4">Available 24/7</p>
              <Button variant="outline" className="rounded-full">
                Start chat
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit a branch</h4>
              <p className="text-gray-600 mb-4">Find locations near you</p>
              <Button variant="outline" className="rounded-full">
                Find branch
              </Button>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-6 w-6" />
            <span className="text-lg">
              How was your experience? 
              <button className="underline ml-2 hover:text-blue-200 transition-colors">
                Give us feedback
              </button>
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong>Annual Percentage Yield (APY)</strong> is accurate as of today's date and subject to change at any time without notice. Minimum balance and other requirements may apply to earn the stated APY.
            </p>
            <p>
              <strong>1.</strong> When you have the Save As You Go transfer option, each time you (or any authorized signer or joint owner) use your debit card for a one-time purchase or complete a Bill Pay transaction through online banking, and the one-time debit card purchase or Bill Pay transaction posts to the account, we'll automatically transfer $1 from your linked Silverline Bank checking account to your Way2Save Savings account.
            </p>
            <p>
              <strong>2.</strong> The fee period is the period used to calculate the Monthly Service Fee. The fee period details are provided on the Monthly Service Fee Summary located in your account statement.
            </p>
            <p>
              <strong>Investment and Insurance Products are:</strong> Not Insured by the FDIC or Any Federal Government Agency • Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate • Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
