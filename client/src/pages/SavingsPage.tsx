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
      title: 'Way2Save Savings',
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
      {/* ... your JSX code continues here ... */}
      <Footer />
    </div>
  );
}
