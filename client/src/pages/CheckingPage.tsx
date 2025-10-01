
import { useState } from "react";
import { ChevronLeft, Plus, Star, ArrowRight, Phone, MessageCircle, MapPin, CreditCard, DollarSign, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckingPage() {
  const [, setLocation] = useLocation();
  const [selectedTab, setSelectedTab] = useState("everyday");

  const checkingProducts = [
    {
      id: "everyday",
      name: "Everyday Checking",
      icon: CreditCard,
      title: "Everyday Checking",
      subtitle: "Banking for your day-to-day needs",
      bestFor: "Basic banking with no minimum balance requirement",
      monthlyFee: "$10 monthly service fee",
      minBalance: "$25 minimum deposit to open",
      features: [
        "No minimum balance requirement",
        "Fee waived with qualifying direct deposits",
        "Mobile and online banking",
        "Free first box of checks"
      ]
    },
    {
      id: "preferred",
      name: "Preferred Checking", 
      icon: Star,
      title: "Preferred Checking",
      subtitle: "Enhanced banking with relationship benefits",
      bestFor: "Customers who maintain higher balances",
      monthlyFee: "$15 monthly service fee",
      minBalance: "$500 minimum daily balance",
      features: [
        "No monthly fee with $500 minimum daily balance",
        "Free checks and money orders",
        "Preferred customer service line",
        "Enhanced mobile features"
      ]
    },
    {
      id: "portfolio",
      name: "Portfolio Checking",
      icon: Shield, 
      title: "Portfolio by Silverline",
      subtitle: "Premium banking with exclusive benefits",
      bestFor: "High-net-worth customers seeking premium service",
      monthlyFee: "$30 monthly service fee",
      minBalance: "$25,000 combined relationship balance",
      features: [
        "No monthly fee with qualifying balance",
        "Free wire transfers",
        "Portfolio advisor consultations",
        "Preferred rates on loans and deposits"
      ]
    }
  ];

  const faqItems = [
    "What is a checking account?",
    "How do checking accounts work?", 
    "What do I need to open a checking account online?",
    "How do I open a joint checking account?",
    "What's the difference between savings and checking accounts?",
    "How do I avoid monthly service fees?"
  ];

  const manageAccountItems = [
    "Set up direct deposit",
    "Order checks online", 
    "Mobile check deposit",
    "Set up account alerts",
    "View account statements",
    "Update account information"
  ];

  const additionalResources = [
    "Debit card benefits",
    "Overdraft protection",
    "Online bill pay",
    "Zelle® payments",
    "ATM locations",
    "Account security tips"
  ];

  const selectedProduct = checkingProducts.find(product => product.id === selectedTab);

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
          <span className="text-gray-900 font-medium">Checking</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Checking Accounts
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Find the right checking account for your everyday banking needs
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
            Choose a checking account that fits your lifestyle
          </h2>

          {/* Product Tabs */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8 overflow-x-auto">
            {checkingProducts.map((product) => (
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

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="text-xl font-bold text-blue-700 mb-2">{selectedProduct.monthlyFee}</div>
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

              <div className="bg-gradient-to-br from-green-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Start banking today
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    Open your checking account online in minutes
                  </p>
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
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
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compare all accounts
              </h3>
              <p className="text-gray-600 mb-6">
                See features and fees for all our checking accounts
              </p>
              <Button variant="outline" className="w-full rounded-full">
                Compare now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fee calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Calculate potential monthly fees for your account
              </p>
              <Button variant="outline" className="w-full rounded-full">
                Calculate fees
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
                Take our quiz to find the right checking account for you
              </p>
              <Button variant="outline" className="w-full rounded-full">
                Take quiz
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checking FAQs */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-8 h-1 bg-yellow-400 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Checking FAQs</h3>
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
              Our specialists are here to help you find the perfect checking solution
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
              <strong>Monthly Service Fee</strong> may be avoided when you meet certain requirements. See account agreement for details.
            </p>
            <p>
              <strong>1.</strong> Direct deposit is an electronic deposit of your paycheck, pension or government benefits from your employer or outside agency.
            </p>
            <p>
              <strong>2.</strong> The minimum daily balance is the lowest account balance on any given day during the fee period.
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
