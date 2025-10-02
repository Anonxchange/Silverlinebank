import React, { useState } from 'react';
import { ChevronRight, PiggyBank, Percent, Sprout, Phone, MapPin, Calendar, TrendingUp, DollarSign, Shield, Clock, CheckCircle, ArrowRight, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SilverlineSavingsPage() {
  const [activeTab, setActiveTab] = useState('way2save');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const savingsProducts = {
    way2save: {
      id: 'way2save',
      name: 'Way2Save',
      title: 'Way2Save® Savings',
      tagline: 'Build your savings automatically',
      apy: '0.15',
      minDeposit: '$25',
      monthlyFee: '$5',
      feeWaiver: 'Waived with $300 minimum daily balance or linked to a Silverline Bank checking account',
      icon: PiggyBank,
      color: 'blue',
      benefits: [
        'Automatic transfers from your checking account',
        'Save $1 for every debit card purchase or Bill Pay transaction',
        'Save with recurring monthly automatic transfers',
        'No minimum balance requirement',
        'FDIC insured up to $250,000'
      ],
      bestFor: 'Building savings automatically with everyday spending',
      description: 'The Way2Save Savings account is perfect for customers who want to save money without thinking about it. Link it to your Silverline Bank checking account and watch your savings grow automatically.'
    },
    platinum: {
      id: 'platinum',
      name: 'Platinum Savings',
      title: 'Platinum Savings',
      tagline: 'Grow your savings with convenient access',
      apy: '0.45',
      minDeposit: '$25',
      monthlyFee: '$12',
      feeWaiver: 'Waived with $3,500 minimum daily balance',
      icon: Percent,
      color: 'purple',
      benefits: [
        'Higher interest rates for larger balances',
        'Unlimited branch and ATM withdrawals',
        'Check writing privileges',
        'Online and mobile banking',
        'FDIC insured up to $250,000'
      ],
      bestFor: 'Higher balance customers who want easy access to funds',
      description: 'The Platinum Savings account gives you several easy ways to get to your money when you need it, with competitive interest rates and flexible access options.'
    },
    cds: {
      id: 'cds',
      name: 'Certificates of Deposit',
      title: 'Silverline Bank CDs',
      tagline: 'Guaranteed returns with fixed rates',
      apy: '4.50',
      minDeposit: '$2,500',
      monthlyFee: '$0',
      feeWaiver: 'No monthly fee',
      icon: Sprout,
      color: 'green',
      benefits: [
        'Fixed interest rates for the entire term',
        'Guaranteed returns regardless of market conditions',
        'Multiple term options from 3 months to 5 years',
        'No monthly service fee',
        'FDIC insured up to $250,000'
      ],
      bestFor: 'Customers seeking predictable returns with money they will not need immediately',
      description: 'Silverline Bank Certificates of Deposit offer an alternative way to grow your savings with guaranteed fixed interest rates for your chosen term.'
    }
  };

  const cdTerms = [
    { term: '3 Month', apy: '3.50%', minDeposit: '$2,500' },
    { term: '6 Month', apy: '4.00%', minDeposit: '$2,500' },
    { term: '9 Month', apy: '4.25%', minDeposit: '$2,500' },
    { term: '12 Month', apy: '4.50%', minDeposit: '$2,500' },
    { term: '18 Month', apy: '4.35%', minDeposit: '$2,500' },
    { term: '24 Month', apy: '4.25%', minDeposit: '$2,500' },
    { term: '36 Month', apy: '4.15%', minDeposit: '$2,500' },
    { term: '60 Month', apy: '4.10%', minDeposit: '$2,500' }
  ];

  const faqs = [
    {
      question: 'What is a savings account?',
      answer: 'A savings account is a deposit account held at a bank that pays interest. It provides a safe place to store money you do not plan to spend immediately while earning interest on your balance.'
    },
    {
      question: 'How do savings accounts work?',
      answer: 'You deposit money into your savings account, and the bank pays you interest on your balance. You can make deposits and withdrawals, though some accounts may limit the number of monthly withdrawals.'
    },
    {
      question: 'What do I need to open a savings account online?',
      answer: 'To open a savings account online, you will need: a valid government-issued ID, Social Security number, contact information, and funding source for your initial deposit.'
    },
    {
      question: 'How do I open a joint savings account or CD?',
      answer: 'Joint accounts can be opened online or at a branch. All account holders must provide identification and sign the account agreement. Both owners have equal access to the account.'
    },
    {
      question: 'Are Silverline Bank savings accounts FDIC-insured?',
      answer: 'Yes, all Silverline Bank savings accounts and CDs are FDIC-insured up to $250,000 per depositor, per ownership category.'
    },
    {
      question: 'What is the difference between a savings account and a CD?',
      answer: 'A savings account offers flexible access to your money with variable interest rates. A CD requires you to keep money deposited for a fixed term in exchange for higher, guaranteed interest rates.'
    }
  ];

  const selectedProduct = savingsProducts[activeTab];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Savings Accounts and CDs
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Find the right savings account to help you reach your financial goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg">
                Open an account
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-full font-semibold text-lg transition">
                Compare rates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">4.50% APY</div>
              <div className="text-gray-600">Up to on select CDs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">$25</div>
              <div className="text-gray-600">Minimum to open</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">FDIC</div>
              <div className="text-gray-600">Insured up to $250,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Selection Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Choose a savings account
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              {Object.values(savingsProducts).map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`p-6 text-center transition-all border-b-4 ${
                    activeTab === product.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <product.icon className={`w-12 h-12 mx-auto mb-3 ${
                    activeTab === product.id ? 'text-red-600' : 'text-gray-400'
                  }`} />
                  <div className={`font-semibold ${
                    activeTab === product.id ? 'text-red-600' : 'text-gray-700'
                  }`}>
                    {product.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-3">{selectedProduct.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{selectedProduct.tagline}</p>
                  
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-green-700">{selectedProduct.apy}%</span>
                      <span className="text-lg text-green-600">APY</span>
                    </div>
                    <div className="text-sm text-gray-600">Annual Percentage Yield</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-semibold text-gray-700">Minimum opening deposit</span>
                      <span className="text-gray-900">{selectedProduct.minDeposit}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="font-semibold text-gray-700">Monthly service fee</span>
                      <span className="text-gray-900">{selectedProduct.monthlyFee}</span>
                    </div>
                    <div className="text-sm text-gray-600 italic">
                      {selectedProduct.feeWaiver}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Best for:</h4>
                    <p className="text-gray-700">{selectedProduct.bestFor}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition">
                      Open account
                    </button>
                    <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-semibold transition">
                      Learn more
                    </button>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-6">
                    <h4 className="text-2xl font-bold mb-4">Account benefits</h4>
                    <ul className="space-y-3">
                      {selectedProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* CD Terms Table */}
              {activeTab === 'cds' && (
                <div className="mt-12">
                  <h4 className="text-2xl font-bold mb-6">Available CD terms and rates</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cdTerms.map((term, index) => (
                      <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition">
                        <div className="text-lg font-semibold text-gray-900 mb-2">{term.term}</div>
                        <div className="text-3xl font-bold text-red-600 mb-2">{term.apy}</div>
                        <div className="text-sm text-gray-600">{term.minDeposit} minimum</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-6">
                    *APY = Annual Percentage Yield. Rates are effective as of today's date and subject to change. Early withdrawal penalties may apply.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Silverline Bank */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why save with Silverline Bank?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">FDIC Insured</h3>
              <p className="text-gray-600 text-sm">Your deposits are insured up to $250,000</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
              <p className="text-gray-600 text-sm">Earn more on your savings with great rates</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Access</h3>
              <p className="text-gray-600 text-sm">Manage your account online, mobile, or in-branch</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Get help whenever you need it</p>
            </div>
          </div>
        </div>

        {/* Savings Calculator Promo */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See how your savings can grow
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                Use our savings calculator to estimate how much you could earn with regular deposits and compound interest.
              </p>
              <button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full font-semibold transition inline-flex items-center gap-2">
                Try the calculator
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">$50,000</div>
              <div className="text-xl text-gray-800">in 5 years with $750/month</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus className="w-6 h-6 text-red-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How can we help you?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call us</h3>
              <p className="text-gray-600 mb-4">1-800-SILVER-BANK</p>
              <p className="text-sm text-gray-500">Mon-Fri: 7am-10pm<br/>Sat-Sun: 8am-8pm</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit a branch</h3>
              <p className="text-gray-600 mb-4">Over 500 locations</p>
              <button className="text-red-600 font-semibold hover:underline">
                Find a branch near you
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Make an appointment</h3>
              <p className="text-gray-600 mb-4">Meet with a banker</p>
              <button className="text-red-600 font-semibold hover:underline">
                Schedule now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Manage your account</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Tips on managing your money
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Manage payments online
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Transfer money
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Set up automatic transfers
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Financial resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Planning for retirement
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Financial wellness center
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Kids savings accounts
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Emergency fund guide
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Tools & calculators</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Savings calculator
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  CD calculator
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Budget planner
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-red-600 hover:underline">
                  <ChevronRight className="w-5 h-5" />
                  Retirement calculator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Important information</h3>
          <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
            <p>
              <strong>Annual Percentage Yield (APY)</strong> is accurate as of today's date and subject to change at any time without notice. Minimum balance and other requirements may apply to earn the stated APY.
            </p>
            <p>
              When you have the Save As You Go transfer option, each time you (or any authorized signer or joint owner) use your debit card for a one-time purchase or complete a Bill Pay transaction through online banking, we will automatically transfer $1 from your linked Silverline Bank checking account to your Way2Save Savings account.
            </p>
            <p>
              <strong>Early Withdrawal Penalties:</strong> You may pay an early withdrawal penalty if you withdraw funds from your CD before the term is complete. Penalties vary based on term length and could reduce earnings on the account.
            </p>
            <p>
              The monthly service fee period details are provided on the Monthly Service Fee Summary located in your account statement.
            </p>
            <p>
              <strong>Investment and Insurance Products:</strong> Not Insured by the FDIC or Any Federal Government Agency • Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate • Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested
            </p>
            <p>
              Deposit products offered by Silverline Bank, Member FDIC.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
