import { ChevronLeft, ChevronRight, Home as HomeIcon, Search, Circle, CheckCircle, TrendingUp, DollarSign, CreditCard, Handshake, Calculator, Percent, BookOpen, HeadphonesIcon, Plus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomeLoanPage() {
  const [selectedGoal, setSelectedGoal] = useState<"purchase" | "refinance" | null>(null);

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
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Home Mortgage Loans</h1>
          </div>
        </div>

        <section className="relative bg-muted/30 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                  alt="Happy family in their new home"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="order-1 md:order-2 bg-background rounded-lg shadow-lg p-8 border border-border">
                <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
                <h2 className="text-3xl font-light text-center mb-8 text-foreground">
                  Thinking of buying or<br />refinancing?
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-semibold text-center mb-4 text-foreground">
                      Get started with a personalized rate quote
                    </p>
                    <p className="text-center text-muted-foreground mb-6">
                      It takes just a few minutes. There's no commitment and no credit impact.
                    </p>
                    <p className="text-center text-muted-foreground font-medium">
                      Start by selecting your mortgage goal:
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={() => setSelectedGoal("purchase")}
                      className="w-full bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 rounded-full text-lg shadow-md transition-all"
                    >
                      Home purchase
                    </Button>
                    <Button 
                      onClick={() => setSelectedGoal("refinance")}
                      className="w-full bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 rounded-full text-lg shadow-md transition-all"
                    >
                      Refinance
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Homebuying starts here
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <HomeIcon className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">See what you can afford</CardTitle>
                  <CardDescription className="text-base">
                    Find out in minutes how much you could borrow and receive a customized mortgage estimate — all without affecting your credit score.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Check price range <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Shop for homes</CardTitle>
                  <CardDescription className="text-base">
                    Current Silverline Bank customers enjoy exclusive access to a one-stop real estate shopping tool.¹ Start your home search now.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Start home shopping <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <Circle className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Learn how to buy your first home</CardTitle>
                  <CardDescription className="text-base">
                    Learn the key steps to the homebuying process — and find tips, tools, and a team to guide you every step of the way.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Begin your journey <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Ready to apply?</CardTitle>
                  <CardDescription className="text-base">
                    Once you've prequalified or found a home, it's time to submit a mortgage application and work with us to complete the final steps to becoming a homeowner.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Apply now <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                Learn more about homebuying
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Explore the benefits of refinancing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <Percent className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">See if you could lower your payment</CardTitle>
                  <CardDescription className="text-base">
                    Use our refinance tool to calculate how much you could save each month with today's rates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    See what you could save <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Estimate your home's value</CardTitle>
                  <CardDescription className="text-base">
                    Current Silverline Bank customers can track neighborhood sales data, see how renovating could increase your home value, and much more.¹
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Claim your home to see its value <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <HomeIcon className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Tap into your home's equity</CardTitle>
                  <CardDescription className="text-base">
                    With a cash-out refinance, you can pay for things like home improvements or college tuition, or even consolidate your debt.²
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Learn more <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#D71E28]" />
                  </div>
                  <CardTitle className="text-xl">Apply for your refinance</CardTitle>
                  <CardDescription className="text-base">
                    When you're ready to lower your payment, pay off your mortgage faster, or consolidate debt, our online application will get you started fast.²
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Start here <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                Learn more about refinancing
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Get more with your mortgage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="border-b-4 border-yellow-400">
                  <div className="flex items-center justify-center py-12">
                    <DollarSign className="w-24 h-24 text-gray-400" strokeWidth={1} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">$10,000 down payment grant</CardTitle>
                  <CardDescription className="text-base">
                    The Homebuyer Access® grant provides $10,000 in down payment assistance to eligible borrowers buying a home in select locations.³
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Learn more <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="border-b-4 border-yellow-400">
                  <div className="flex items-center justify-center py-12">
                    <CreditCard className="w-24 h-24 text-gray-400" strokeWidth={1} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Up to $5,000 for closing costs</CardTitle>
                  <CardDescription className="text-base">
                    Through our Dream. Plan. Home.® closing cost credit,⁴ eligible buyers get up to $5,000 to apply toward one-time closing costs when buying a primary home.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Learn more <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <div className="border-b-4 border-yellow-400">
                  <div className="flex items-center justify-center py-12">
                    <Handshake className="w-24 h-24 text-gray-400" strokeWidth={1} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Relationship benefits</CardTitle>
                  <CardDescription className="text-base">
                    You may qualify for a closing cost credit up to $1000 or an interest rate discount from 0.125%-1.250%, based on your new and existing eligible assets with Silverline Bank.⁵,⁶
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Learn more <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Grow your knowledge with our mortgage tools
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Mortgage calculators</CardTitle>
                  <CardDescription className="text-base">
                    Run the numbers with our collection of helpful tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    View calculators <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Today's mortgage and refinance rates</CardTitle>
                  <CardDescription className="text-base">
                    See rate and APR information for popular loan types.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Check rates <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Learning center</CardTitle>
                  <CardDescription className="text-base">
                    Get informed about the mortgage and homebuying process, from starting your home search to planning your next move.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Explore articles <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Manage your account</CardTitle>
                  <CardDescription className="text-base">
                    Already have a mortgage with us? Here's everything you need to manage your account.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="inline-flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-semibold">
                    Customer help <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Common mortgage questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    How much home can I afford?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    The amount you can afford depends on your income, debt, credit score, and the size of your down payment. Use our mortgage calculator to get an estimate of what you could borrow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    What parts of my finances does a mortgage lender review?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Lenders review your credit history, employment and income, assets and savings, current debts, and the property you're purchasing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    What is the minimum down payment for conventional, FHA, and VA loans?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Conventional loans typically require 3-20% down, FHA loans require as little as 3.5%, and VA loans may require 0% down for eligible veterans.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    What other costs are part of my mortgage?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Beyond your principal and interest, you'll pay property taxes, homeowners insurance, HOA fees (if applicable), and possibly PMI if your down payment is less than 20%.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-8">
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                  More home loan FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Hear from our customers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-base text-muted-foreground italic mb-4">
                    "It was a wonderful seamless experience getting my mortgage from Silverline Bank. Everyone I worked with was professional, clear, and made the process very smooth. I am very grateful and would definitely recommend Silverline Bank to others."
                  </p>
                  <p className="font-semibold text-center">Despina K.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-base text-muted-foreground italic mb-4">
                    "Start to finish really great experience. Everyone involved was pleasant, professional, and kind. I have done several mortgages and this by far was the easiest."
                  </p>
                  <p className="font-semibold text-center">Kenneth F.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Talk to a mortgage consultant
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Buying or Refinancing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="tel:1-877-937-9357" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold text-lg">
                    1-877-937-9357
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    <p>Mon – Fri: 7 am – 8 pm</p>
                    <p>Sat: 8 am – 6 pm</p>
                    <p>Central Time</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marque 9 para recibir atención en español.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Account servicing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="tel:1-866-234-8271" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold text-lg">
                    1-866-234-8271
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    <p>Mon – Fri: 7 am – 10 pm</p>
                    <p>Sat: 8 am – 2 pm</p>
                    <p>Central Time</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marque 9 para recibir atención en español.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mt-8 space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Let us contact you</CardTitle>
                  <CardDescription>
                    Enter your contact information to have a mortgage consultant call you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full rounded-full py-6 bg-white text-foreground border-2 border-foreground hover:bg-accent">
                    Get a call back
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Find a consultant</CardTitle>
                  <CardDescription>
                    Use our locator to search for mortgage consultants in your area.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full rounded-full py-6 bg-white text-foreground border-2 border-foreground hover:bg-accent">
                    Search locations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Quick help</h2>
            
            <div className="space-y-3 mb-8">
              <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Finish a saved application or check status
              </Link>
              <Link href="/sign-on" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Sign on to manage your account
              </Link>
              <Link href="/customer-service" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Customer help and payment options
              </Link>
              <Link href="#" className="flex items-center text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                <ChevronRight className="w-5 h-5 mr-2" />
                Voice a concern
              </Link>
            </div>

            <div className="prose max-w-none text-sm text-muted-foreground space-y-4">
              <p>
                If you extend your loan term, you may pay more interest over the life of your loan.
              </p>
              <p>
                If you are a service member on active duty, an eligible spouse, partner, or dependent, or currently receiving SCRA benefits, please consult with your legal advisor prior to seeking a refinance of your existing mortgage loan. In some cases, a refinance may impact your eligibility for benefits under the Servicemembers Civil Relief Act or applicable state law.
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Powered by ComeHome.</li>
                <li>
                  Using a cash-out refinance to consolidate debt increases your mortgage debt, reduces equity, and extends the term on shorter-term debt and secures such debts with your home. The relative benefits you receive from loan consolidation will vary depending on your individual circumstances. You should consider that debt consolidation may increase the total number of monthly payments and the total amount paid over the term of the loan. To enjoy the benefits of debt consolidation, you should not carry new credit card or high interest rate debt.
                </li>
                <li>
                  The Homebuyer Access® grant may help customers purchase a home by providing a $10,000 grant for a down payment, subject to eligibility requirements. Grant funds cannot be used in connection with the financing of a Silverline Bank real estate owned (REO) property purchase. Repayment is not required for the grant. To use the grant, the full $10,000 must be applied toward the down payment. We cannot apply less than the full amount. The down payment grant is available in certain areas. Eligibility for grant money will not be confirmed until underwriting is complete.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
