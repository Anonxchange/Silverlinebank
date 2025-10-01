import { CreditCard, Store, DollarSign, Users2, Lightbulb, Building2, Heart, Zap, TrendingUp, Shield, FileText, MapPin, Calendar, HelpCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const productGrid = [
  { icon: CreditCard, title: "Credit Cards", color: "bg-red-500" },
  { icon: Store, title: "Merchant Services", color: "bg-purple-500" },
  { icon: DollarSign, title: "Lines & Loans", color: "bg-yellow-500" },
  { icon: Users2, title: "Payroll Services", color: "bg-purple-400" },
  { icon: Lightbulb, title: "Resources", color: "bg-orange-500" },
];

const featuredServices = [
  {
    icon: "💳",
    title: "Payments taken with ease",
    description: "Accept card payments on-site, online, or on the go",
    link: "Merchant Services",
  },
  {
    icon: "🏦",
    title: "Banking services evolved",
    description: "Explore business checking accounts that work for you today and tomorrow",
    link: "Business checking",
  },
  {
    icon: "💰",
    title: "Earn a $500 cash reward bonus",
    description: "With the Signify Business Cash® Card. Terms apply.",
    link: "Apply now",
  },
  {
    icon: "📈",
    title: "Funding for your business",
    description: "Access funds for growth and cash flow when you need them",
    link: "Business lines and loans",
  },
];

const whyChooseUs = [
  {
    title: "Tailored",
    description: "We provide personalized options by working with you to develop a deep, long-term understanding of your business.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop",
  },
  {
    title: "Supportive",
    description: "Our bankers have the knowledge to help you move your business forward — now and in the future.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop",
  },
  {
    title: "Simple",
    description: "We provide easy-to-use products, tools, and resources for small businesses to help simplify your financial life.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop",
  },
];

const resources = [
  {
    title: "Get the right resources for you right now",
    description: "We're here to support you with tips, tools, and guidance to help your business thrive.",
    cta: "Explore now",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop",
  },
  {
    title: "Prepare before you apply",
    description: "Gather the documents you'll need to open a business checking account.",
    cta: "Get started",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  },
  {
    title: "Help protect your business",
    description: "Learn more about trademarks, copyrights, and patents.",
    cta: "Read the article",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop",
  },
];

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative">
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 pt-12 pb-32">
            <div className="max-w-md mx-auto px-4">
              <div className="bg-primary rounded-full w-48 h-48 mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-white text-6xl font-bold mb-1">$400</div>
                  <div className="text-white text-sm font-medium uppercase tracking-wider">Cash Bonus</div>
                  <div className="text-white text-xs mt-1">for your business</div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Earn a $400 business checking bonus
              </h1>
              <p className="text-center text-gray-700 mb-6">
                Switch to a Silverline Bank business checking account and access a range of services
              </p>
              
              <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 py-6 rounded-full text-base font-semibold">
                Get started &gt;&gt;
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="max-w-md mx-auto px-4">
            <div className="grid grid-cols-2 gap-4">
              {productGrid.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`${product.color} w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-md mx-auto px-4 space-y-4">
            {featuredServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <button className="text-purple-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        {service.link} <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Why choose Silverline Bank?
              </h2>
            </div>

            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-teal-700 text-white">
          <div className="max-w-md mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Zelle<sup>®</sup> for your business
            </h2>
            <p className="text-lg mb-8">
              Speed up your business with Zelle<sup>®</sup>
            </p>

            <div className="bg-white rounded-3xl p-8 mb-8 max-w-sm mx-auto">
              <div className="bg-teal-700 rounded-2xl p-6 mb-6">
                <h3 className="text-white text-xl font-bold mb-4">Send Money with Zelle<sup>®</sup></h3>
                <div className="flex justify-center gap-4 mb-6">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💸</span>
                  </div>
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📱</span>
                  </div>
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔐</span>
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-teal-500">
                    <span className="text-white">Activity</span>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-500">
                    <span className="text-white">Recipients</span>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white">Zelle<sup>®</sup> Preferences</span>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <p className="font-semibold">Get paid by your customers<sup>1</sup></p>
              <p className="font-semibold">Pay your suppliers<sup>1</sup></p>
              <p className="font-semibold">Issue reimbursements<sup>1</sup></p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Small business resources
              </h2>
            </div>

            <div className="space-y-6">
              {resources.map((resource, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full"
                    >
                      {resource.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How can we help?</h2>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-gray-600" />
                  <span className="text-lg font-medium text-gray-900">Find a location</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-gray-600" />
                  <span className="text-lg font-medium text-purple-700">Make an appointment</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-gray-600" />
                  <span className="text-lg font-medium text-gray-900">Quick help</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="max-w-md mx-auto px-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              <sup>1</sup> Enrollment with Zelle® through Silverline Bank Online® or Silverline Bank Business Online® is required. Terms and conditions apply. U.S. checking or savings account required to use Zelle®. Transactions between enrolled users typically occur in minutes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
