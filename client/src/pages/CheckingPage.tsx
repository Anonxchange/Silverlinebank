import { useState, useEffect, useRef } from "react";
import { Plus, Star, GraduationCap, Sparkles, Phone, MapPin, Calendar, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckingPage() {
  const [selectedTab, setSelectedTab] = useState("most-popular");
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let tabsOriginalTop = 0;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (tabsRef.current) {
            const rect = tabsRef.current.getBoundingClientRect();
            
            // Store original position on first check
            if (tabsOriginalTop === 0 && !isSticky) {
              tabsOriginalTop = rect.top + window.scrollY;
            }
            
            // Check if we've scrolled past the tabs original position
            const shouldBeSticky = window.scrollY > tabsOriginalTop;
            
            if (shouldBeSticky !== isSticky) {
              setIsSticky(shouldBeSticky);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  const accountTabs = [
    { id: "most-popular", label: "Most popular", icon: Star },
    { id: "overdraft", label: "Overdraft fee-free", icon: Plus },
    { id: "student", label: "Teen and student", icon: GraduationCap },
    { id: "premium", label: "Premium accounts", icon: Sparkles }
  ];

  const faqItems = [
    "How do I open a checking account?",
    "How do I open a joint checking account?",
    "How do I access my Silverline Bank checking accounts online?",
    "How do I find my routing and account numbers?",
    "How do I set up Direct Deposit?",
    "Are Silverline Bank checking accounts FDIC-insured?"
  ];

  const PhoneMockup = ({ balance = "$8,116.0", account = "EVERYDAY CHECKING ...0987" }) => (
    <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 mx-auto">
      <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2rem] overflow-hidden" style={{aspectRatio: '9/19.5'}}>
          <div className="p-4 h-full">
            <div className="flex justify-between text-xs mb-4">
              <span className="text-gray-600">9:19</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 text-gray-600"><Phone className="w-3 h-3" /></div>
                <div className="w-4 h-4 text-gray-600"><Star className="w-3 h-3" /></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <p className="text-[8px] text-gray-500 mb-1">{account}</p>
                <p className="text-xl font-bold text-gray-900">{balance}</p>
                <p className="text-[8px] text-gray-500">Available balance</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[8px] text-gray-500">Overview</p>
                  </div>
                  <div className="w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[7px]">
                    <span className="text-gray-600">Checking</span>
                    <span className="text-gray-900">$8,116.01</span>
                  </div>
                  <div className="flex justify-between text-[7px]">
                    <span className="text-gray-600">Savings</span>
                    <span className="text-gray-900">$5,238.93</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getAccountContent = () => {
    switch(selectedTab) {
      case "overdraft":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-2">Clear Access Banking</h2>
            <p className="text-center text-gray-700 mb-6">
              Checkless banking<sup>4</sup> with digital payments and no overdraft fees<sup>3</sup>
            </p>
          </div>
        );
      case "student":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Teen Checking</h2>
              <p className="text-center text-gray-700 mb-6">
                Banking for teens ages 13-17
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Student Checking</h2>
              <p className="text-center text-gray-700 mb-6">
                For students ages 17-24
              </p>
            </div>
          </div>
        );
      case "premium":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Prime Checking</h2>
              <p className="text-center text-gray-700 mb-6">
                Interest-bearing checking with more benefits
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Silverline Bank Premier® Checking</h2>
              <p className="text-center text-gray-700 mb-6">
                Premier level of relationship banking benefits and discounts<sup>6</sup>
              </p>
            </div>
          </div>
        );
      default: // most-popular
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Clear Access Banking</h2>
              <p className="text-center text-gray-700 mb-6">
                Checkless banking<sup>4</sup> with digital payments and no overdraft fees<sup>3</sup>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Everyday Checking</h2>
              <p className="text-center text-gray-700 mb-6">
                Flexible convenience for everyday banking
              </p>
            </div>
          </div>
        );
    }
  };

  const renderHeroSection = () => {
    if (selectedTab === "most-popular") {
      return (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1600&h=600&fit=crop" 
            alt="Most popular banking accounts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-emerald-700/90"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Banking made simple.
              </h2>
              <p className="text-lg md:text-xl opacity-90">Choose the account that fits your lifestyle</p>
            </div>
          </div>
        </div>
      );
    }

    if (selectedTab === "student") {
      return (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=1600&h=600&fit=crop" 
            alt="Teen and student banking" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600/90 to-sky-700/90"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Banking built for students.
              </h2>
              <p className="text-lg md:text-xl opacity-90">Start your financial journey with confidence</p>
            </div>
          </div>
        </div>
      );
    }

    if (selectedTab === "premium") {
      return (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=600&fit=crop" 
            alt="Premium banking services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/90 to-amber-700/90"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Premium banking benefits.
              </h2>
              <p className="text-lg md:text-xl opacity-90">Elevated service for your financial goals</p>
            </div>
          </div>
        </div>
      );
    }

    // Overdraft
    return (
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=600&fit=crop" 
          alt="Fee-free banking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-emerald-700/90"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              No overdraft fees.<sup className="text-lg">3</sup>
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Period.</h2>
            <p className="text-lg md:text-xl opacity-90">Banking without the worry of unexpected fees</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Title Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checking Accounts</h1>
          <p className="text-lg md:text-xl text-gray-700">Choose a bank account</p>
        </div>
      </div>

      {/* Sticky Tabs Navigation */}
      <div
        ref={tabsRef}
        className={`bg-white border-b transition-all duration-200 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'}`}
        style={{ willChange: isSticky ? 'transform' : 'auto', backfaceVisibility: 'hidden' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {accountTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 whitespace-nowrap border-b-4 transition-colors text-sm md:text-base ${
                  selectedTab === tab.id
                    ? 'border-blue-600 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {isSticky && <div className="h-[52px] md:h-[60px]"></div>}

      {/* Hero Section with Images */}
      {renderHeroSection()}

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Account Cards Section */}
        <div className="mb-12">
          {getAccountContent()}

          <div className="text-center mb-6 mt-4">
            <a href="#" className="text-blue-700 underline hover:text-blue-800 text-sm md:text-base">Compare all accounts</a>
          </div>

          {/* Account Details Grid */}
          {selectedTab === "most-popular" && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Clear Access Banking */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-6 bg-gray-50">
                  <div className="font-semibold text-gray-900 mb-2">Best for</div>
                  <p className="text-sm md:text-base text-gray-700">
                    People who want help with managing money, including teens and students
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Monthly service fee</div>
                    <p className="text-sm md:text-base text-gray-700">$0</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Minimum to open</div>
                    <p className="text-sm md:text-base text-gray-700">$25</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Open now
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Learn more
                  </Button>
                </div>
              </div>

              {/* Everyday Checking */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-6 bg-gray-50">
                  <div className="font-semibold text-gray-900 mb-2">Best for</div>
                  <p className="text-sm md:text-base text-gray-700">
                    Check writing and digital payments. Standard bank account features make it also great for college students.
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Monthly service fee</div>
                    <p className="text-sm md:text-base text-gray-700">
                      $10<br />
                      <span className="text-xs md:text-sm">
                        <strong>Notice:</strong> For fee periods that begin on or after November 29, 2025, the monthly service fee will be <strong>$15</strong>.{" "}
                        <a href="#" className="text-blue-700 underline">Learn more</a>.{" "}
                        <a href="#" className="text-blue-700 underline">How to avoid the fee</a> each fee period
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Minimum to open</div>
                    <p className="text-sm md:text-base text-gray-700">$25</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Open now
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "overdraft" && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-6 bg-gray-50">
                  <div className="font-semibold text-gray-900 mb-2">Best for</div>
                  <p className="text-sm md:text-base text-gray-700">
                    People who want help with managing money, including teens and students
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Monthly service fee</div>
                    <p className="text-sm md:text-base text-gray-700">$0</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Overdraft services<sup>1</sup></div>
                    <p className="text-sm md:text-base text-gray-700">
                      No overdraft fees<sup>3</sup>
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Minimum to open</div>
                    <p className="text-sm md:text-base text-gray-700">$25</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Open now
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "premium" && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Prime Checking */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-6 bg-orange-50">
                  <div className="font-semibold text-gray-900 mb-2">Best for</div>
                  <p className="text-sm md:text-base text-gray-700">
                    Customers who maintain higher combined balances
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Monthly service fee</div>
                    <p className="text-sm md:text-base text-gray-700">$25</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Minimum to open</div>
                    <p className="text-sm md:text-base text-gray-700">$100</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Open now
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Learn more
                  </Button>
                </div>
              </div>

              {/* Premier Checking */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-6 bg-amber-50">
                  <div className="font-semibold text-gray-900 mb-2">Best for</div>
                  <p className="text-sm md:text-base text-gray-700">
                    Customers seeking premium relationship banking with enhanced benefits
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Monthly service fee</div>
                    <p className="text-sm md:text-base text-gray-700">$35</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Minimum to open</div>
                    <p className="text-sm md:text-base text-gray-700">$100</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Open now
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold w-full text-sm md:text-base">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <a href="#" className="text-blue-700 underline hover:text-blue-800 text-sm md:text-base">
              Make an appointment at a branch &gt;
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl md:rounded-3xl flex items-center justify-center">
                <Star className="w-12 h-12 md:w-16 md:h-16 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
              Not sure which checking account is the best fit?
            </h3>
            <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold text-sm md:text-base">
                Compare all checking accounts
              </Button>
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-6 py-5 rounded-full font-semibold text-sm md:text-base">
                Take a quiz to find your account
              </Button>
            </div>
          </div>
        </div>

        {/* Bank Easy Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">Bank Easy</h2>
          <p className="text-lg md:text-xl text-center mb-6 md:mb-8">
            Get the app loved by millions<br />
            9M ratings | 4.9 stars
          </p>
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-48 md:w-56 lg:w-64">
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2rem] overflow-hidden" style={{aspectRatio: '9/19.5'}}>
                  <div className="p-4 h-full">
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm md:text-base mb-1">Good afternoon,</p>
                      <p className="text-gray-900 text-xl md:text-2xl font-bold">Henry</p>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                        <p className="text-[9px] md:text-[10px] text-gray-600 mb-1">EVERYDAY CHECKING ...0987</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">$5,238.93</p>
                        <p className="text-[9px] md:text-[10px] text-gray-600">Available balance</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                        <p className="text-[9px] md:text-[10px] text-gray-600 mb-1">WAY2SAVE ...3478</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">$5,712.12</p>
                        <p className="text-[9px] md:text-[10px] text-gray-600">Available balance</p>
                      </div>
                      <div className="bg-blue-100 rounded-xl p-3 flex items-center gap-2">
                        <Plus className="h-4 w-4 text-blue-700" />
                        <span className="text-xs text-blue-700 font-semibold">Open new account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white mb-8 md:mb-12">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg max-w-3xl mx-auto">
            <p>Deposit checks with mobile deposit<sup>7</sup></p>
            <p>Add cards to your digital wallet<sup>8</sup></p>
            <p>Send and receive money with Zelle®<sup>9</sup></p>
            <p>Get help with Fargo® virtual assistant<sup>10</sup></p>
            <p>View your latest FICO® Score<sup>11</sup></p>
            <p>Turn credit and debit cards on or off<sup>12</sup></p>
          </div>
          <div className="mt-6 md:mt-8 flex justify-center">
            <Button className="bg-black hover:bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold">
              Download on the App Store
            </Button>
          </div>
          <p className="text-xs md:text-sm text-center mt-4 md:mt-6 opacity-80">*Screen image is simulated</p>
          <p className="text-xs md:text-sm text-center mt-2 opacity-80">
            **4.9/5 Stars on the App Store and 4.8/5 on Google Play as of July 1, 2025
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-6 md:p-12 mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-1 bg-yellow-400 mx-auto mb-4 md:mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Plus all the features of a Silverline Bank checking account
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-base md:text-lg text-gray-900 mb-2">Online and mobile banking</h4>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Access your account and pay bills online from virtually anywhere, anytime
              </p>
              <a href="#" className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:underline text-sm md:text-base">
                Learn more <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-base md:text-lg text-gray-900 mb-2">10,000+ ATMs</h4>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                More Silverline Bank ATMs to help you bank locally and on the go
              </p>
              <a href="#" className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:underline text-sm md:text-base">
                Learn more <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-base md:text-lg text-gray-900 mb-2">Contactless debit card</h4>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Fast, secure payments and Silverline Bank ATM access
              </p>
              <a href="#" className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:underline text-sm md:text-base">
                Learn more <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h4 className="font-bold text-base md:text-lg text-gray-900 mb-2">24/7 Security</h4>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Fraud monitoring around the clock, plus Zero Liability protection<sup>13</sup>
              </p>
              <a href="#" className="text-blue-700 font-semibold inline-flex items-center gap-1 hover:underline text-sm md:text-base">
                Learn more <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Checking FAQs */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Checking FAQs</h3>
            <div className="space-y-2">
              {faqItems.map((question, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 md:p-4 text-left hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-sm md:text-base text-gray-900 font-medium">{question}</span>
                  <Plus className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0 ml-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* How can we help? */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">How can we help?</h3>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <button className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Call us</span>
                  <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
              </button>

              <button className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Find a location</span>
                  <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                </div>
              </button>

              <button className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-blue-700 text-sm md:text-base">Make an appointment</span>
                </div>
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6 md:pt-8">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Customer help</h4>
              <div className="space-y-2 md:space-y-3">
                <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Access saved application</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Routing number</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Debit card FAQs</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Account Tools & Banking Sections */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Account tools</h3>
            <div className="space-y-2 md:space-y-3">
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Silverline Bank Mobile app</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Banking alerts</span>
              </a>
            </div>

            <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-6 md:mt-8 mb-3 md:mb-4">Banking basics</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Debit cards</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Overdraft services</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Banking FAQs</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Banking next steps</h3>
            <div className="space-y-2 md:space-y-3">
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Savings accounts</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Credit cards</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline text-sm md:text-base">
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                <span>Switching to Silverline Bank</span>
              </a>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6 md:mb-8">
          <h4 className="font-bold text-base md:text-lg text-gray-900 mb-3 md:mb-4">Investment and Insurance Products are:</h4>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li><strong>• Not Insured by the FDIC or Any Federal Government Agency</strong></li>
            <li><strong>• Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</strong></li>
            <li><strong>• Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</strong></li>
          </ul>
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-600 leading-relaxed">
            Investment products and services are offered through Silverline Bank Advisors. Silverline Bank Advisors is a trade name used by Silverline Bank Clearing Services, LLC (SBCS) and Silverline Bank Advisors Financial Network, LLC, Members <a href="#" className="text-blue-700 underline">SIPC</a>, separate registered broker-dealers and non-bank affiliates of Silverline Bank & Company.
          </p>
        </div>

        {/* Legal Disclaimers */}
        <div className="bg-white rounded-lg p-6 md:p-8 text-xs md:text-sm text-gray-600 leading-relaxed space-y-3 md:space-y-4">
          <div className="flex items-start gap-2">
            <span className="font-semibold">How was your experience?</span>
            <a href="#" className="text-blue-700 underline hover:text-blue-800">Give us feedback.</a>
          </div>

          <div className="space-y-3 md:space-y-4 text-xs leading-relaxed">
            <p><strong>3.</strong> Our standard overdraft coverage does not apply to Clear Access Banking accounts. Optional overdraft services, such as Overdraft Protection and Debit Card Overdraft Service, are not available for Clear Access Banking accounts. Other fees may apply, and it is possible for the account to have a negative balance. Please see the <a href="#" className="text-blue-700 underline">Wells Fargo Consumer Account Fee and Information Schedule and Deposit Account Agreement</a> for details.</p>

            <p><strong>4.</strong> If you convert from a Wells Fargo account with check writing ability to a Clear Access Banking account, any outstanding check(s) presented on the new Clear Access Banking account on or after the date of conversion will be returned unpaid. The payee may charge additional fees when the check is returned. Make sure that any outstanding checks have been paid and/or you have made different arrangements with the payee(s) for the checks you have written before converting to the Clear Access Banking account.</p>

            <p><strong>5.</strong> With Early Pay Day, the Bank may make certain direct deposits available to you one to two business days before we receive the funds from the payor, which is typically your employer. Early Pay Day is not guaranteed, may vary between pay periods, and we may stop providing it at any time without advance notice to you. Our ability to provide early access to funds may be limited by many factors, such as when we receive notice of payment from your payor. It is always your obligation to verify that the funds are available in your account before spending them. Available for personal accounts only. See our <a href="#" className="text-blue-700 underline">Deposit Account Agreement</a> for more details.</p>

            <p><strong>6.</strong> (A) If your Prime Checking or Premier Checking account is converted to another checking product or closed by us or you, all linked accounts are delinked from the Prime Checking or Premier Checking account and, effective immediately, benefits no longer apply, including benefits to your now delinked accounts. You'll no longer receive discounts, options to avoid fees on other products or services, or the Relationship Interest Rate; for time accounts (CDs), this change will occur at renewal. Your delinked accounts will revert to the Bank's current applicable interest rate or fee at that time. (B) If you or we delink an account from your Prime Checking or Premier Checking account but your accounts remain linked, the loss of all benefits and the other consequences described above in (A) will immediately apply to the delinked account. Benefits available to your Prime Checking or Premier Checking account and any remaining linked accounts will continue.</p>

            <p><strong>7.</strong> Mobile deposit is only available through the Wells Fargo Mobile<sup>®</sup> app on eligible mobile devices. Deposit limits and other restrictions apply. Some accounts are not eligible for mobile deposit. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply. See Wells Fargo's <a href="#" className="text-blue-700 underline">Online Access Agreement</a> and your applicable business account fee disclosures for other terms, conditions, and limitations.</p>

            <p><strong>8.</strong> Digital wallets may not be available on all devices.</p>

            <p><strong>9.</strong> Enrollment with Zelle<sup>®</sup> through Wells Fargo Online<sup>®</sup> or Wells Fargo Business Online<sup>®</sup> is required. Terms and conditions apply. To send or receive money with Zelle<sup>®</sup> both parties must have an eligible checking or savings account enrolled with Zelle<sup>®</sup> through your bank. Transactions between enrolled users typically occur in minutes. For your protection, Zelle<sup>®</sup> should only be used for sending money to friends, family, or others you trust. Neither Wells Fargo nor Zelle<sup>®</sup> offers purchase protection for payments made with Zelle<sup>®</sup> - for example, if you do not receive the item you paid for or the item is not as described or as you expected. Payment requests to Zelle<sup>®</sup> must be sent to an email address. For more information, view the <a href="#" className="text-blue-700 underline">Zelle<sup>®</sup> Transfer Service Addendum to the Wells Fargo Online Access Agreement</a>. Your mobile carrier's message and data rates may apply.</p>

            <p><strong>10.</strong> Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply. Fargo is only available on the smartphone versions of the Wells Fargo Mobile<sup>®</sup> app.</p>

            <p><strong>11.</strong> You must be a Wells Fargo account holder of an eligible Wells Fargo consumer account with a FICO<sup>®</sup> Score available, and enrolled in Wells Fargo Online. Eligible Wells Fargo consumer accounts include deposit, loan, and credit accounts, but other consumer accounts may also be eligible. Contact Wells Fargo for details. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply.</p>

            <p className="ml-4">Please note that the score provided under this service is for educational purposes and may not be the score used by Wells Fargo to make credit decisions. Wells Fargo looks at many factors to determine your credit options; therefore, a specific FICO<sup>®</sup> Score or Wells Fargo credit rating does not guarantee a specific loan rate, approval of a loan, or an upgrade on a credit card.</p>

            <p className="ml-4">Wells Fargo and Fair Isaac are not credit repair organizations as defined under federal and state law, including the Credit Repair Organizations Act. Wells Fargo and Fair Isaac don't provide credit repair services or advice or assistance with rebuilding or improving your credit record, credit history, or credit rating.</p>

            <p><strong>12.</strong> Turning off your card is not a replacement for reporting your card lost or stolen. Contact us immediately if you believe that unauthorized transactions have been made. Turning your card off will not stop recurring transactions presented as recurring transactions or the posting of refunds, reversals, or credit adjustments to your account. Any digital card numbers linked to the card will also be turned off. For debit cards, turning off your card will not stop transactions using other cards linked to your deposit account. For credit cards, turning off your card will turn off all cards associated with your credit card account. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply.</p>

            <p><strong>13.</strong> With Zero Liability protection, you will be reimbursed for promptly reported unauthorized card transactions, subject to certain conditions. Please see the applicable Wells Fargo account agreement or <a href="#" className="text-blue-700 underline">debit and ATM card terms and conditions</a> for information on liability for unauthorized transactions.</p>

            <p><strong>14.</strong> Other fees may apply, and it is possible for the account to have a negative balance. Please see the <a href="#" className="text-blue-700 underline">Wells Fargo Consumer Account Fee and Information Schedule and Deposit Account Agreement</a> for details.</p>

            <p className="mt-6 md:mt-8 pt-4 md:pt-6">
              Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud Keychain, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Wallet is a trademark of Apple Inc.
            </p>

            <p className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
              Deposit products offered by Silverline Bank, N.A. Member FDIC.
            </p>
            <p>RSNIP-01292027-8237046.1.1</p>
            <p>DT2-08042026-12-8246423-1.1</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
