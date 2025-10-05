
import { useState } from 'react';
import { ChevronLeft, ChevronRight, PiggyBank, TrendingUp, Calendar, Phone, MapPin, Shield, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function SavingsPage() {
  const [selectedAccount, setSelectedAccount] = useState<'way2save' | 'platinum' | 'cd'>('way2save');

  const accounts = [
    {
      id: 'way2save',
      name: 'Way2Save Savings',
      tagline: 'Build your savings automatically',
      gradient: 'from-blue-600 to-blue-800',
      bestFor: 'Saving as you spend with automatic transfers',
      minBalance: '$25',
      monthlyFee: '$5',
      feeWaiver: 'Save As You Go transfers or maintain $300 minimum daily balance',
      features: ['Automatic savings transfers', 'No minimum opening deposit', 'Easy access to your money']
    },
    {
      id: 'platinum',
      name: 'Platinum Savings',
      tagline: 'Grow your savings with competitive rates',
      gradient: 'from-purple-600 to-indigo-700',
      bestFor: 'Higher interest rates with flexible access',
      minBalance: '$100',
      monthlyFee: '$12',
      feeWaiver: 'Maintain $3,500 minimum daily balance or link to a Premier checking account',
      features: ['Competitive interest rates', 'Relationship interest rate discounts', 'Multiple ways to access your funds']
    },
    {
      id: 'cd',
      name: 'Certificates of Deposit',
      tagline: 'Guaranteed returns regardless of market conditions',
      gradient: 'from-emerald-600 to-teal-700',
      bestFor: 'Fixed interest rates and guaranteed returns',
      minBalance: '$2,500',
      monthlyFee: 'No monthly fee',
      feeWaiver: null,
      features: ['Fixed interest rates', 'Terms from 3 months to 5 years', 'FDIC insured up to $250,000']
    }
  ];

  const selectedAccountData = accounts.find(acc => acc.id === selectedAccount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-16">
        {/* Page Header */}
        <div className="border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Personal
            </Link>
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Savings Accounts and CDs</h1>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-64 md:h-80 overflow-hidden border-b border-border">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=600&fit=crop" 
            alt="Savings and growth" 
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${selectedAccountData?.gradient || 'from-blue-600 to-blue-800'}`}></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                Start saving for what matters most
              </h2>
              <p className="text-lg md:text-xl opacity-90">Choose the savings account that fits your goals</p>
            </div>
          </div>
        </section>

        {/* Account Selection Tabs */}
        <section className="border-b border-border bg-background sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around gap-2">
              {accounts.map((account) => (
                <button
                  key={account.id}
                  onClick={() => setSelectedAccount(account.id as any)}
                  className={`flex-1 py-4 px-2 text-center transition-all relative ${
                    selectedAccount === account.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="text-sm md:text-base font-medium">{account.name}</div>
                  {selectedAccount === account.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D71E28]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Account Details */}
        {selectedAccountData && (
          <section className="py-12 border-b border-border">
            <div className="max-w-4xl mx-auto px-4">
              <Card className="border-2 shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-br ${selectedAccountData.gradient} p-8 text-white`}>
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{selectedAccountData.name}</h3>
                  <p className="text-lg opacity-90">{selectedAccountData.tagline}</p>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Best for</h4>
                      <p className="text-muted-foreground">{selectedAccountData.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Minimum opening deposit</h4>
                      <p className="text-muted-foreground">{selectedAccountData.minBalance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Monthly service fee</h4>
                      <p className="text-muted-foreground">{selectedAccountData.monthlyFee}</p>
                    </div>
                    {selectedAccountData.feeWaiver && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Fee waiver</h4>
                        <p className="text-muted-foreground">{selectedAccountData.feeWaiver}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Key features</h4>
                    <ul className="space-y-2">
                      {selectedAccountData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-[#D71E28] flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="flex-1 bg-[#D71E28] hover:bg-[#B71820] text-white font-medium py-6 rounded-full text-lg shadow-md transition-all">
                      Open account
                    </Button>
                    <Button variant="outline" className="flex-1 border-2 py-6 rounded-full text-lg font-medium">
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Why save with Silverline Bank
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">FDIC Insured</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Your deposits are insured up to $250,000 per depositor
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Earn competitive interest rates on your savings
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D71E28] flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-[#D71E28]" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl text-foreground">Easy Access</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground">
                    Access your money when you need it through online or mobile banking
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Savings FAQs
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What is a savings account?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A savings account is a deposit account that earns interest and provides a safe place to store your money while it grows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How do savings accounts work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You deposit money into your savings account, and it earns interest over time. You can withdraw funds when needed, though some accounts may have transaction limits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What do I need to open a savings account online?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You'll need valid identification, your Social Security number, contact information, and an initial deposit to get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Are Silverline Bank savings accounts FDIC-insured?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, all Silverline Bank savings accounts are FDIC-insured up to $250,000 per depositor, per account ownership category.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              How can we help?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Call us</h3>
                  <p className="text-sm text-muted-foreground">1-800-TO-WELLS</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Find a location</h3>
                  <p className="text-sm text-muted-foreground">Near you</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Make an appointment</h3>
                  <p className="text-sm text-muted-foreground">At a branch</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
