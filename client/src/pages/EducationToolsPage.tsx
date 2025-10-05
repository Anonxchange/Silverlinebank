
import { ChevronLeft, CreditCard, Target, DollarSign, Calculator, PieChart, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationToolsPage() {
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
            <h1 className="text-3xl md:text-4xl font-light mt-2 text-foreground">Financial Health</h1>
          </div>
        </div>

        <section className="relative bg-muted/30 py-12 md:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop" 
                alt="People celebrating goals"
                className="rounded-lg shadow-lg w-full mb-8"
              />
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
                Reach for your goals, wherever you are in life
              </h2>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              What are you working toward?
            </h2>
            
            <div className="grid gap-6 max-w-3xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Manage credit and debt
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Discover the importance of using credit wisely and paying on time
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        See more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Target className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Plan for retirement
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Discover how you can start getting ready for life after work
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        See more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Care for life events
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Get advice on life changes that may impact your finances
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        See more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Tools to help you get there
            </h2>
            
            <div className="grid gap-6 max-w-3xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Credit Close-Up<sup>®</sup>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Own the skills to track, raise or maintain your FICO<sup>®</sup> Credit Score<sup>1</sup>
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Debt-to-income (DTI) calculator
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        See your estimated DTI and how it could affect your borrowing power<sup>2</sup>
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <PieChart className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        Budget Watch
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Create a personalized budget to track expenses and help you meet your financial goals
                      </p>
                      <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold inline-flex items-center">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="#" className="text-[#6F42C1] hover:text-[#5A34A0] font-semibold text-lg">
                View more tools
              </Link>
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
              <p>1. You must be a Silverline Bank account holder of an eligible Silverline Bank consumer account with a FICO® Score available, and enrolled in Silverline Bank Online. Eligible Silverline Bank consumer accounts include deposit, loan, and credit accounts, but other consumer accounts may also be eligible. Contact Silverline Bank for details. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply.</p>
              
              <p>Please note that the score provided under this service is for educational purposes and may not be the score used by Silverline Bank to make credit decisions. Silverline Bank looks at many factors to determine your credit options; therefore, a specific FICO® Score or Silverline Bank credit rating does not guarantee a specific loan rate, approval of a loan, or an upgrade on a credit card.</p>
              
              <p>2. This calculator is for educational purposes only and is not a denial or approval of credit.</p>
              
              <div className="flex items-center gap-2 pt-4">
                <div className="text-base">🏠</div>
                <span className="font-medium">Equal Housing Lender</span>
              </div>
              
              <p className="pt-2">Deposit products offered by Silverline Bank, N.A. Member FDIC.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
