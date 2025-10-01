import { MapPin, Calendar, Phone, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceCategories = [
  {
    title: "Checking and savings",
    link: "Get info >",
  },
  {
    title: "Online banking",
    link: "Get info >",
  },
  {
    title: "Mobile features",
    link: "Get info >",
  },
  {
    title: "Investing and retirement",
    link: "Get info >",
  },
  {
    title: "Credit cards",
    link: "Get info >",
  },
  {
    title: "Home lending",
    link: "Get info >",
  },
  {
    title: "Loans",
    link: "Get info >",
  },
  {
    title: "Security and fraud",
    link: "Get info >",
  },
];

const virtualAssistantExamples = [
  "Show me my recent transactions.",
  "What's my routing number?",
  "Do I have any pending transactions?",
];

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-md mx-auto pb-8 pt-6">
        {/* Title */}
        <div className="bg-white px-4 pt-6 pb-4">
          <h1 className="text-2xl font-normal text-gray-900">
            Silverline Bank Customer Service
          </h1>
        </div>

        {/* Hero Illustration */}
        <div className="bg-white px-4 pb-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-16 h-20 bg-purple-200 rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                <Lightbulb className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="w-16 h-20 bg-purple-300 rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-purple-700" />
              </div>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <h2 className="text-xl font-light text-gray-900">
              Connect to information and support
            </h2>
          </div>
        </div>

        {/* Service Categories */}
        <div className="px-4 space-y-4 mb-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-primary font-medium mt-2">
                  {category.link}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Assistant Section */}
        <div className="px-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              Just ask SilverAssist™
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your virtual assistant in the mobile app is always ready to help. Get answers, insights, and shortcuts with SilverAssist.
            </p>
            <ul className="text-left space-y-3 mb-6">
              {virtualAssistantExamples.map((example, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className="text-gray-900">{example}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="w-full max-w-sm border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-full py-6 text-base font-medium"
            >
              Meet SilverAssist
            </Button>
          </div>
        </div>

        {/* Other Ways to Connect */}
        <div className="px-4">
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <h2 className="text-2xl font-light text-gray-900 text-center mb-6">
            Other ways to connect with us
          </h2>

          <div className="space-y-4">
            {/* Find a Bank */}
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="relative">
                    <MapPin className="h-10 w-10 text-yellow-500" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-8 bg-orange-200 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Find a Silverline Bank bank
                </h3>
                <p className="text-gray-700 mb-4">
                  Search our nationwide ATMs and branches.
                </p>
                <button className="text-primary font-medium hover:underline">
                  See what's near you &gt;
                </button>
              </CardContent>
            </Card>

            {/* Make an Appointment */}
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Make an appointment
                </h3>
                <p className="text-gray-700 mb-4">
                  Connect with a Silverline Bank banker to get personalized help.
                </p>
                <button className="text-primary font-medium hover:underline">
                  Schedule online &gt;
                </button>
              </CardContent>
            </Card>

            {/* Give us a Call */}
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-12 w-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Give us a call
                </h3>
                <p className="text-gray-700 mb-4">
                  Find the right Silverline Bank phone number.
                </p>
                <button className="text-primary font-medium hover:underline">
                  Call us &gt;
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="px-4 mt-8">
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Investment and Insurance Products are:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Not Insured</strong> by the FDIC or Any Federal Government Agency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Not a Deposit</strong> or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Subject to Investment Risks</strong>, Including Possible Loss of the Principal Amount Invested</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-sm text-gray-600 space-y-3">
            <p>
              Investment products and services are offered through Silverline Bank Advisors. Silverline Bank Advisors is a trade name used by Silverline Bank Clearing Services, LLC (SBCS) and Silverline Bank Advisors Financial Network, LLC, separate registered broker-dealers and non-bank affiliates of Silverline Bank & Company.
            </p>
            
            <div className="border-t border-gray-300 pt-4 mt-4">
              <p className="flex items-center gap-2 text-gray-700">
                <span>💬</span>
                <span>How was your experience? <a href="#" className="text-primary font-medium hover:underline">Give us feedback.</a></span>
              </p>
            </div>

            <p className="text-xs">
              Deposit products offered by Silverline Bank, N.A. Member FDIC.
            </p>
            
            <p className="text-xs">
              PM-03192026-7038564.1.1
            </p>
            
            <p className="text-xs">
              LRC-0924
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-4 mt-8 pb-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <a href="#" className="text-gray-700 hover:underline">Privacy, Cookies, Security & Legal</a>
            <a href="#" className="text-gray-700 hover:underline">Do Not Sell or Share My Personal Information</a>
            <a href="#" className="text-gray-700 hover:underline">Notice of Data Collection</a>
            <a href="#" className="text-gray-700 hover:underline">General Terms of Use</a>
            <a href="#" className="text-gray-700 hover:underline">Report Fraud</a>
            <a href="#" className="text-gray-700 hover:underline">Sitemap</a>
            <a href="#" className="text-gray-700 hover:underline">Home</a>
            <a href="#" className="text-gray-700 hover:underline">About Silverline Bank</a>
            <a href="#" className="text-gray-700 hover:underline">Careers</a>
            <a href="#" className="text-gray-700 hover:underline">Inclusion and Accessibility</a>
          </div>
          
          <p className="text-xs text-gray-600 mt-6">
            © 1999 - 2025 Silverline Bank. NMSLR ID 399801
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
