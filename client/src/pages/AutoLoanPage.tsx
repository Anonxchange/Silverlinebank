
import { ChevronLeft, MapPin, Smartphone, Heart, Calendar, Plus } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AutoLoanPage() {
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
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Auto loans</h1>
          </div>
        </div>

        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop" 
              alt="Family with child on bicycle"
              className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
            />
          </div>
        </section>

        <section className="py-16 border-b border-border bg-background">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
              The easy way to manage your auto loan
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Set up your account to pay online, access statements, and view loan activity.<sup className="text-sm">1</sup>
            </p>
            <Button className="bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 px-12 rounded-full text-lg shadow-md transition-all">
              Get started
            </Button>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Benefits of Silverline Bank auto financing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">Nationwide network</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Silverline Bank auto loans are only available through our network of nearly 11,000 dealerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">Convenience</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Access your account from the Silverline Bank Mobile® app<sup className="text-sm">2</sup> or get dedicated support by phone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">Peace of mind</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Silverline Bank has more than 50 years of auto financing experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-[#1A4D5C] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Banking where and when you need it
            </h2>
            <p className="text-base mb-8 opacity-90">
              Access your account to view transactions or schedule payments while on the go.
            </p>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-[#0F3A47] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <img 
              src="https://raw.githubusercontent.com/Anonxchange/Silverlinebank/refs/heads/main/attached_assets/IMG_0882.png?w=600&h=400&fit=crop" 
              alt="Mobile app preview"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto mb-8"
            />
            <p className="text-sm opacity-75">*Screen image is simulated</p>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Wherever you are in your auto loan journey, we're here for you
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=400&h=300&fit=crop" 
                    alt="Person walking to car in winter"
                    className="rounded-lg w-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Learn about auto financing</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Just getting started? Get an overview ahead of your vehicle search.
                  </p>
                  <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    Let's go &gt;
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop" 
                    alt="Woman working in delivery van"
                    className="rounded-lg w-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Explore payment options</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Learn about Autopay<sup className="text-sm">2</sup> and other ways to make auto loan payments.
                  </p>
                  <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    Get the details &gt;
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop" 
                    alt="Family at home with car"
                    className="rounded-lg w-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Get help with payments</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    If you're experiencing challenges with your auto loan, we may be able to help.
                  </p>
                  <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    Learn more &gt;
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
              Silverline Bank is committed to a more sustainable tomorrow
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=400&fit=crop" 
                alt="Person charging electric vehicle"
                className="rounded-lg shadow-lg w-full mb-8"
              />
              
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Electric vehicles: a greener way to go</h3>
                  <ul className="space-y-3 text-base text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Discover the potential cost savings of owning an electric vehicle (EV)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Understand emissions ratings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Find the EV that's right for you</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full rounded-full py-6 text-base border-2 hover:bg-accent">
                    Learn about EVs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Answers to auto loan questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How do I apply for a Silverline Bank auto loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Silverline Bank auto loans are only available through our nationwide network of nearly 11,000 dealerships. Be sure to ask your dealership if Silverline Bank auto financing is available. If your loan is funded by Silverline Bank Auto, we'll service your account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How can I start managing my auto loan account online?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    You can manage your auto loan account through Silverline Bank Online or the Silverline Bank Mobile app. Sign in to view your account details, make payments, and access your statements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How can I stop receiving paper statements for my car loan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    You can switch to paperless statements by signing in to your account online and updating your statement preferences. This will help reduce paper waste and give you instant access to your statements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <Plus className="w-5 h-5 mr-3 flex-shrink-0" />
                    How can I change my auto loan payment due date?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    To change your payment due date, please contact our customer service team at 1-800-289-8004. They can help you adjust your payment schedule to better fit your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-8">
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-2 hover:bg-accent">
                  Review all FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Customer support
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#6F42C1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">Ask Fargo®</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fargo,<sup className="text-xs">3</sup> your virtual assistant in the mobile app, offers a simplified and personalized banking experience — in English or Spanish.<sup className="text-xs">2</sup>
                  </p>
                  <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    Meet Fargo &gt;
                  </Link>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#6F42C1]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">Financial Health</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take control of your financial life with tools that help you meet your goals.
                  </p>
                  <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-medium">
                    Learn more &gt;
                  </Link>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#6F42C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">Call us</CardTitle>
                  <Link href="tel:1-800-289-8004" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold text-lg block mb-4">
                    1-800-289-8004
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    <p>Mon – Thurs: 7 am – 10 pm</p>
                    <p>Fri: 7 am – 9 pm</p>
                    <p>Sat: 7 am – 5:30 pm</p>
                    <p>Central Time</p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-xs text-muted-foreground space-y-4">
              <p>1. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply.</p>
              <p>2. Terms and conditions apply. Mobile carrier's message and data rates may apply. See Silverline Bank's Online Access Agreement for more information.</p>
              <p>3. Fargo is only available on the smartphone version of the Silverline Bank Mobile® app.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
