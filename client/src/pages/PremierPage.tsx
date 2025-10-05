
import { ChevronLeft, Star, Target, DollarSign, User, Plus, Calendar, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PremierPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-16">
        <div className="border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Personal
            </Link>
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Silverline Bank Premier</h1>
          </div>
        </div>

        <section className="relative bg-muted/30 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" 
                  alt="Premier banking experience"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="order-1 md:order-2 bg-background rounded-lg shadow-lg p-8 border border-border">
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <h2 className="text-3xl font-light text-center mb-4 text-foreground">
                  Personal finance designed around you
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-center text-muted-foreground mb-6">
                      Premium service and benefits. Tailored for clients with $250,000 or more in qualifying balances at Silverline Bank.<sup className="text-sm">1,2</sup>
                    </p>
                  </div>

                  <Button 
                    className="w-full bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 rounded-full text-lg shadow-md transition-all"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-7 h-7 text-[#D4AF37]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Premier service</CardTitle>
                      <CardDescription className="text-base mb-4">
                        A Premier banker and team, plus 24/7 phone support
                      </CardDescription>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Make an appointment →
                      </Link>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-7 h-7 text-[#D4AF37]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Premier banking<sup className="text-sm">1,2</sup></CardTitle>
                      <CardDescription className="text-base mb-4">
                        Interest rate discounts on select new loans<sup className="text-sm">3</sup>, credit card offers, and waived fees
                      </CardDescription>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Goals-based planning</CardTitle>
                      <CardDescription className="text-base mb-4">
                        LifeSync<sup className="text-sm">©</sup> and your premier team can help you reach your goals<sup className="text-sm">4</sup>
                      </CardDescription>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Silverline Bank Advisors</CardTitle>
                      <CardDescription className="text-base mb-4">
                        Investing discounts and benefits<sup className="text-sm">1,2,5</sup>
                      </CardDescription>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop" 
              alt="Exclusive benefits"
              className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mb-8"
            />
            
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-foreground">
              Exclusive benefits.<sup className="text-sm">1,2</sup> Priority service.
            </h2>
            <p className="text-xl text-center mb-8 text-muted-foreground">
              Meet Silverline Bank Premier<sup className="text-sm">©</sup>.
            </p>
            
            <div className="text-center">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                Get started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Silverline Bank Bank discounts & benefits<sup className="text-sm">1,2,5</sup>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">Relationship Interest Rates</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    on select linked CDs & savings accounts<sup className="text-sm">6</sup>. Mortgage discount based on eligible assets<sup className="text-sm">7</sup>
                  </p>
                </div>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">Credit card offers and bonuses</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    Special offers and benefits for Premier customers
                  </p>
                </div>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">No ATM fees worldwide<sup className="text-sm">8,9</sup></h3>
                  <p className="text-center text-muted-foreground mb-6">
                    and no wire transfer fees for incoming or outgoing wire transfers<sup className="text-sm">8,10,11</sup>
                  </p>
                </div>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop" 
                    alt="Professional with phone"
                    className="rounded-lg w-full mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-center mb-4">Silverline Bank Advisors discounts & benefits</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Waived Silverline Bank Advisors annual account fees</li>
                    <li>• Discounted Intuitive Investor<sup className="text-sm">®</sup> advisory fee</li>
                    <li>• Access to securities-based lending<sup className="text-sm">1,2</sup></li>
                  </ul>
                  <div className="text-center">
                    <Button variant="outline" className="rounded-full px-6 py-3 text-base border-2 hover:bg-accent">
                      Learn more
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Get to know Silverline Bank Premier
            </h2>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" 
                  alt="Maximize your benefits"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Four ways to maximize your premier benefits</h3>
                  <p className="text-muted-foreground mb-6">
                    From personal service to discounts and other features, Silverline Bank Premier has you covered.
                  </p>
                  <Button variant="outline" className="rounded-full px-6 py-3 text-base border-2 hover:bg-accent">
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop" 
                  alt="Open Premier Checking"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">How to open your Premier Checking account</h3>
                  <p className="text-muted-foreground mb-6">
                    Taking advantage of premier service, discounts, and benefits is easier than you might think.
                  </p>
                  <Button variant="outline" className="rounded-full px-6 py-3 text-base border-2 hover:bg-accent">
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
              Start your premier experience
            </h2>
            
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Apply today for Silverline Bank Premier Checking.
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto mb-12">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-6 rounded-full text-lg shadow-md transition-all">
                Learn more
              </Button>
              <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-accent font-medium py-6 rounded-full text-lg">
                Make an appointment
              </Button>
            </div>

            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Still have questions?
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How can I avoid the $35 monthly service fee for Premier Checking?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    The fee can be avoided each fee period with $250,000 or more in statement-ending qualifying linked balances. This includes deposit account balances (checking, savings, time accounts), investment account balances, and applicable bank fiduciary and custody account balances.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How do I upgrade an existing Silverline Bank account?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    You can upgrade to Premier Checking by visiting a branch, calling us, or through online banking. A banker can help you with the transition and ensure you understand all the benefits available to you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-[#2D1B4E] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
              The future is premier
            </h2>
            <p className="text-xl text-center mb-8 opacity-90">
              The Silverline Bank Mobile<sup className="text-sm">®</sup> app, upgraded for you
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/Anonxchange/Silverlinebank/refs/heads/main/attached_assets/IMG_0891.png?w=400&h=600&fit=crop" 
                  alt="Mobile app preview"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>

            <div className="space-y-4 text-center mb-8">
              <p className="text-lg">Access a Premier banker</p>
              <p className="text-lg">Focus your finances with goals-based planning</p>
              <p className="text-lg">Enjoy premier discounts</p>
            </div>

            <div className="text-center">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg">
                Download on the App Store
              </Button>
            </div>

            <p className="text-center text-sm mt-6 opacity-75">*Screen image is simulated</p>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              How can we help?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg text-[#6F42C1] hover:text-[#5A34A0]">Make an appointment</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg text-[#6F42C1] hover:text-[#5A34A0]">Find a location</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg text-[#6F42C1] hover:text-[#5A34A0]">Call us</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-lg border border-border p-6 mb-6">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Investment and Insurance Products are:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>• Not Insured by the FDIC or Any Federal Government Agency</strong></li>
                <li><strong>• Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</strong></li>
                <li><strong>• Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</strong></li>
              </ul>
            </div>

            <div className="text-xs text-muted-foreground space-y-4">
              <p>1. Silverline Bank Premier requires meeting all conditions of Silverline Bank Premier participation. Silverline Bank [Bank and Silverline Bank Advisors] discounts and benefits are available to all customers who have a Silverline Bank Premier Checking account. The Premier Checking account has a $35 monthly service fee. The fee can be avoided each fee period with $250,000 or more in statement-ending qualifying linked (a) consumer bank deposit account balances (checking, savings, time accounts (CDs), FDIC-insured IRAs) and (b) investment account balances (investments available through our affiliate Silverline Bank Advisors, and applicable bank fiduciary and custody accounts). Silverline Bank may waive the monthly service fee at its discretion for promotional or other purposes.</p>
              
              <p>2. Certain investments or investment accounts are not eligible for linking.</p>
              
              <p>3. All loans are subject to credit approval, income verification and, if applicable, collateral evaluation. Programs, rates, terms, and conditions are subject to change without notice. The interest rate discount requires a qualifying Silverline Bank consumer checking account. Loan applicants with a Prime Checking, Premier Checking, or Private Bank Interest Checking account at the time of application for credit qualify for additional interest rate discounts.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
