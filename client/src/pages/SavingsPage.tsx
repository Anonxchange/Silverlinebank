import React, { useState } from ‘react’;
import { ChevronRight, PiggyBank, Percent, Sprout, Phone, MapPin, Calendar } from ‘lucide-react’;
import Header from ‘@/components/Header’;
import Footer from ‘@/components/Footer’;

export default function SavingsAccountSelector() {
const [activeTab, setActiveTab] = useState(‘popular’);
const [expandedFaq, setExpandedFaq] = useState(null);

const tabs = [
{ id: ‘popular’, label: ‘Most popular’, icon: PiggyBank },
{ id: ‘platinum’, label: ‘Platinum Savings’, icon: Percent },
{ id: ‘cd’, label: ‘Certificates of Deposit’, icon: Sprout }
];

const faqs = [
‘What is a savings account?’,
‘How do savings accounts work?’,
‘What do I need to open a savings account online?’,
‘How do I open a joint savings account or CD?’,
‘Are Wells Fargo savings accounts FDIC-insured?’
];

return (
<div className="min-h-screen bg-gray-50 flex flex-col">
{/* Header Component */}
<Header />

```
  {/* Page Header */}
  <div className="bg-red-600 text-white p-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <ChevronRight className="rotate-180" size={20} />
        <span className="text-sm">Personal</span>
      </div>
      <h1 className="text-2xl font-light">Savings Accounts and CDs</h1>
    </div>
  </div>

  {/* Tabs */}
  <div className="bg-white border-b sticky top-0 z-10">
    <div className="flex justify-around max-w-7xl mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-4 flex flex-col items-center gap-2 relative ${
            activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
          }`}
        >
          <tab.icon size={32} strokeWidth={1.5} />
          <span className="text-xs text-center">{tab.label}</span>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700" />
          )}
        </button>
      ))}
    </div>
  </div>

  {/* Main Content */}
  <main className="flex-1">
    <div className="p-6 max-w-7xl mx-auto">
      {activeTab === 'popular' && (
        <div className="space-y-6">
          <h2 className="text-3xl font-light text-center mb-8">Choose a savings account</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
              <p className="text-lg mb-4">Savings. Made easy.</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-xs">
                <div className="opacity-80">Account preview</div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl mb-2">Way2Save Savings</h3>
              <p className="text-gray-600 mb-6">Build your savings automatically</p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-semibold text-gray-700 w-24">Best for</span>
                  <span className="text-gray-600">Saving as you spend with Save As You Go automatic transfers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cd' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl mb-4">Wells Fargo CDs</h3>
            <p className="text-gray-600 mb-6">Guaranteed returns regardless of market conditions</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <span className="font-semibold text-gray-700 w-32">Best for</span>
                <span className="text-gray-600">An alternative way to grow your savings with higher interest rates</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-gray-700 w-32">Terms</span>
                <span className="text-gray-600">Flexible term options from 3 months to a year or more</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-gray-700 w-32">Monthly service fee</span>
                <span className="text-gray-600">No monthly service fee</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6">$2,500 minimum opening deposit</p>

            <button className="w-full bg-red-600 text-white py-4 rounded-full font-semibold mb-4 hover:bg-red-700 transition">
              Choose a CD
            </button>

            <a href="#" className="flex items-center justify-center gap-2 text-blue-700 hover:underline">
              Make an appointment at a branch
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      )}

      <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-light text-center mb-8">Savings FAQs</h2>
        
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 border-b"
            >
              <span className="text-gray-700">{faq}</span>
              <ChevronRight 
                className={`transform transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} 
                size={20} 
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-light mb-6">How can we help?</h2>
        
        <div className="space-y-4">
          <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-50 rounded-lg">
            <div className="bg-gray-400 rounded-full p-3">
              <Phone className="text-white" size={24} />
            </div>
            <span className="text-lg">Call us</span>
            <ChevronRight className="ml-auto" size={20} />
          </button>

          <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-50 rounded-lg">
            <div className="bg-gray-400 rounded-full p-3">
              <MapPin className="text-white" size={24} />
            </div>
            <span className="text-lg">Find a location</span>
            <ChevronRight className="ml-auto" size={20} />
          </button>

          <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-50 rounded-lg">
            <div className="bg-gray-400 rounded-full p-3">
              <Calendar className="text-white" size={24} />
            </div>
            <span className="text-lg text-blue-700">Make an appointment</span>
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-light mb-4">Manage your account</h2>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Tips on managing your money
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Manage your payments online
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Transferring money
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-light mb-4">Additional resources</h2>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Planning for retirement
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Financial Health
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-700 hover:underline">
              <ChevronRight size={20} />
              Kids Savings Account
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

  {/* Footer Component */}
  <Footer />
</div>
```

);
}