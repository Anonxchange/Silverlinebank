import { ChevronLeft, ChevronRight, Home as HomeIcon, DollarSign, Percent, CreditCard, Clock, Calendar, TrendingUp, Plus } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PersonalLoanPage() {
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
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Personal Loans</h1>
          </div>
        </div>

        <section className="relative bg-muted/30 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop" 
                  alt="Happy family together"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="order-1 md:order-2 bg-background rounded-lg shadow-lg p-8 border border-border">
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <h2 className="text-3xl font-light text-center mb-4 text-foreground">
                  Rates as low as 6.74% APR<sup className="text-sm">1</sup>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-center text-muted-foreground mb-6">
                      Pay for home improvements, make a major purchase, or consolidate debt<sup className="text-sm">2</sup>
                    </p>
                  </div>

                  <Button 
                    className="w-full bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 rounded-full text-lg shadow-md transition-all"
                  >
                    Check my loan options
                  </Button>

                  <Link href="#" className="block text-center text-sm text-muted-foreground hover:text-foreground underline">
                    Check your rate with no impact to your credit score
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    The Annual Percentage Rate (APR) shown is for a personal loan of at least $10,000, with a 3-year term and includes a relationship discount of 0.25%.<sup className="text-sm">1,3</sup> Your actual APR may be higher than the rate shown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-border bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-center text-base text-muted-foreground">
              To be eligible for a personal loan, you are required to have an open Silverline Bank account for at least 12 months.
            </p>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Use a personal loan for just about anything
            </h2>
            
            <p className="text-center text-base text-muted-foreground max-w-3xl mx-auto mb-12">
              A personal loan can give you the financial flexibility to take on nearly anything you want to do next in life. Maybe you're ready to start home renovations. Or perhaps you've been thinking about consolidating debt.<sup className="text-sm">2</sup> There are so many ways you can use the funds.
            </p>

            <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
              <Link href="#" className="block">
                <Card className="border hover:shadow-md transition-all bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-2 border-[#D71E28] flex items-center justify-center flex-shrink-0">
                          <HomeIcon className="w-7 h-7 text-[#D71E28]" strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#6F42C1]">Home improvement</h3>
                      </div>
                      <ChevronRight className="w-6 h-6 text-[#6F42C1] flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#" className="block">
                <Card className="border hover:shadow-md transition-all bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-2 border-[#D71E28] flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-7 h-7 text-[#D71E28]" strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#6F42C1]">Major expenses</h3>
                      </div>
                      <ChevronRight className="w-6 h-6 text-[#6F42C1] flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#" className="block">
                <Card className="border hover:shadow-md transition-all bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-2 border-[#D71E28] flex items-center justify-center flex-shrink-0">
                          <Percent className="w-7 h-7 text-[#D71E28]" strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#6F42C1]">Debt consolidation</h3>
                      </div>
                      <ChevronRight className="w-6 h-6 text-[#6F42C1] flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-foreground">
              Why Silverline Bank?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Customizable loans</h3>
                <p className="text-base text-muted-foreground">
                  From $3,000 to $100,000 and terms from 12 to 84 months.<sup className="text-sm">4</sup>
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto mb-6">
                  <Percent className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Competitive rates</h3>
                <p className="text-base text-muted-foreground">
                  Fixed interest rates and an interest rate discount with auto pay from a qualifying Silverline Bank account.<sup className="text-sm">3</sup>
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Skip the fees</h3>
                <p className="text-base text-muted-foreground">
                  No origination fee, no closing fee, and no prepayment penalty.<sup className="text-sm">5</sup>
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Quick credit decision</h3>
                <p className="text-base text-muted-foreground">
                  Same-day credit decision for most customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Personal loan</h3>
                <div className="space-y-3">
                  <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Home improvement loans
                  </Link>
                  <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Ways to use a personal loan
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Debt consolidation</h3>
                <div className="space-y-3">
                  <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Loans for debt consolidation
                  </Link>
                  <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Debt Consolidation Calculator
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Related information</h3>
              <div className="space-y-3 max-w-md mx-auto">
                <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  See our personal loan rates
                </Link>
                <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Frequently asked questions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">Returning customer</h3>
            <div className="space-y-3 max-w-md mx-auto">
              <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Check your application status
              </Link>
              <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Retrieve a saved application
              </Link>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground">
                Repay a personal loan in terms of 12-84 months. Rates range from 6.74% to 26.49% Annual Percentage Rate (APR)<sup className="text-sm">5</sup>, which includes a relationship discount of 0.25%. No origination fee or prepayment penalty. Representative example of repayment terms for an unsecured personal loan: For $16,000 borrowed over 36 months at 12.99% Annual Percentage Rate (APR), the monthly payment is $539. This example is an estimate only and assumes all payments are made on time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Personal Loan FAQs
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    What's a personal loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    A personal loan is an unsecured loan that can be used for almost any purpose. Unlike a mortgage or auto loan, the funds aren't designated for a specific purchase. You receive the money in a lump sum and repay it in fixed monthly installments over a set period.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How do I get a personal loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    You can apply for a personal loan online or at a branch. You'll need to provide information about your income, employment, and existing debts. Once approved, funds are typically available within a few business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    What's the interest rate on a personal loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Interest rates vary based on your creditworthiness, loan amount, and term. Rates currently range from 6.74% to 26.49% APR. You may qualify for a relationship discount if you have a qualifying Silverline Bank account and set up automatic payments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How fast is the personal loan process?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Most customers receive a same-day credit decision. Once approved, funds are typically available within 1-3 business days, depending on how you choose to receive them.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    What do I need to get a personal loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    You'll need an open Silverline Bank account for at least 12 months, proof of income, identification, and information about your current debts. A good credit score will help you qualify for better rates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    Will my credit be impacted when I apply for a personal loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Checking your rate will not impact your credit score. However, if you proceed with a full application and are approved, the loan inquiry will appear on your credit report and may have a minor impact on your score.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              How can we help?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg text-[#6F42C1] hover:text-[#5A34A0]">Find a location</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg text-[#6F42C1] hover:text-[#5A34A0]">Call us</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs text-muted-foreground space-y-2">
              <p>1. At least 10% of the applicants approved for these terms qualified for the lowest rate available based on data from 04/01/2025 to 06/30/2025. The rates shown are as of 07/07/2025 and subject to change without notice. Your Annual Percentage Rate (APR) will be based on the amount of credit requested, loan term and your creditworthiness. The lowest rate available assumes excellent credit history.</p>
              <p>2. Before you apply, we encourage you to carefully consider whether consolidating your existing debt is the right choice for you. Consolidating multiple debts means you will have a single payment monthly, but it may not reduce or pay your debt off sooner. The payment reduction may come from a lower interest rate, a longer loan term, or a combination of both. By extending the loan term, you may pay more in interest over the life of the loan. By understanding how consolidating your debt benefits you, you will be in a better position to decide if it is the right option for you. New credit accounts are subject to application, credit qualification, and income verification.</p>
              <p>3. To qualify for a customer relationship discount, you must have a qualifying Silverline Bank consumer checking account and make automatic payments from a Silverline Bank deposit account. To learn which accounts qualify for the discount, please consult with a Silverline Bank banker or consult our FAQs. If automatic payments are canceled, for any reason at any time, after account opening, the interest rate and the corresponding monthly payment may increase. Only one relationship discount may be applied per application.</p>
              <p>4. Representative example of repayment terms for an unsecured personal loan: For $16,000 borrowed over 36 months at 12.99% Annual Percentage Rate (APR), the monthly payment is $539. This example is an estimate only and assumes all payments are made on time.</p>
              <p>5. Late fees may still be assessed.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
