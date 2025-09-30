
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Menu, ArrowRight, Key } from "lucide-react";

export default function SignOnPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [saveUsername, setSaveUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Bank Header */}
      <div className="bg-primary text-white py-4 px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">SILVERLINE BANK</h1>
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-primary/90"
          onClick={() => setLocation('/')}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <h2 className="text-3xl font-light text-gray-800 mb-8">Good afternoon</h2>

        <div className="space-y-4">
          {/* Username Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-14 text-lg border-2 border-gray-300 rounded-2xl px-4 bg-white focus:border-primary focus:ring-0"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 text-lg border-2 border-gray-300 rounded-2xl px-4 pr-16 bg-white focus:border-primary focus:ring-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <span className="text-sm underline">Show</span>
            </button>
          </div>

          {/* Save Username Checkbox */}
          <div className="flex items-center space-x-3 pt-2">
            <Checkbox
              id="save-username"
              checked={saveUsername}
              onCheckedChange={setSaveUsername}
              className="border-2 border-gray-400 rounded"
            />
            <label htmlFor="save-username" className="text-gray-800 text-base">
              Save username
            </label>
          </div>

          {/* Help Text */}
          <p className="text-sm text-gray-600 leading-relaxed">
            To help keep your account secure, save your username only on devices that aren't used by other people.
          </p>

          {/* Sign On Button */}
          <div className="pt-6">
            <Button 
              className="w-full h-12 md:h-14 bg-gray-300 hover:bg-gray-400 text-gray-600 text-base md:text-lg font-medium rounded-2xl"
              onClick={() => console.log('Sign on clicked')}
            >
              Sign on
            </Button>
          </div>

          {/* Or Divider */}
          <div className="text-center py-3 md:py-4">
            <span className="text-gray-600 text-base md:text-lg">or</span>
          </div>

          {/* Use a passkey Button */}
          <Button 
            variant="outline"
            className="w-full h-12 md:h-14 border-2 border-gray-800 text-gray-800 hover:bg-gray-50 text-base md:text-lg font-medium rounded-2xl flex items-center justify-center gap-2 md:gap-3"
            onClick={() => console.log('Use passkey clicked')}
          >
            <Key className="h-4 w-4 md:h-5 md:w-5" />
            Use a passkey
          </Button>

          {/* Passkey Help Text */}
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Don't have one? Create a passkey after signing on and skip the password next time.
          </p>

          {/* Forgot Password Link */}
          <div className="pt-8">
            <button 
              className="text-gray-700 hover:text-gray-900 flex items-center gap-2 text-base"
              onClick={() => console.log('Forgot password clicked')}
            >
              <ArrowRight className="h-4 w-4" />
              Forgot username or password?
            </button>
          </div>
        </div>
      </div>

      {/* Investment Disclaimer */}
      <div className="mx-6 mb-6 p-4 border border-gray-300 bg-white rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">Investment and Insurance Products are:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-black font-bold">■</span>
            <span><strong>Not Insured by the FDIC or Any Federal Government Agency</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black font-bold">■</span>
            <span><strong>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black font-bold">■</span>
            <span><strong>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</strong></span>
          </li>
        </ul>
      </div>

      {/* Footer Info */}
      <div className="px-6 pb-4">
        <p className="text-sm text-gray-600 mb-6">
          Deposit products offered by Silverline Bank, N.A. Member FDIC.
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm text-gray-700">
          <a href="#" className="hover:text-gray-900">About Silverline Bank</a>
          <a href="#" className="hover:text-gray-900">Report Email Fraud</a>
          <a href="#" className="hover:text-gray-900">Online Access Agreement</a>
          <a href="#" className="hover:text-gray-900">Security Center</a>
          <a href="#" className="hover:text-gray-900">Privacy, Cookies, Security & Legal</a>
          <a href="#" className="hover:text-gray-900">Sitemap</a>
          <a href="#" className="hover:text-gray-900">Do not sell or share my personal information</a>
          <a href="#" className="hover:text-gray-900">Give Us Feedback</a>
          <a href="#" className="hover:text-gray-900">Notice of Data Collection</a>
          <span></span>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-300 mt-6">
          <p className="text-xs text-gray-600">
            © 1999 - 2025 Silverline Bank. All rights reserved. NMLSR ID 399801
          </p>
        </div>
      </div>

      {/* Browser Bar Simulation */}
      <div className="bg-gray-600 text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-blue-400 text-sm font-bold">1</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-sm">act.secure.silverlinebank.com</span>
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
