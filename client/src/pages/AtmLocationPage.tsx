
import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, AlertCircle, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AtmLocationPage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    // Here you would typically make an API call to search for locations
    console.log("Searching for:", searchQuery);
  };

  const handleBack = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-white">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center mb-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10 mr-3"
                onClick={handleBack}
              >
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="text-xl font-bold tracking-tight">
                SILVERLINE BANK
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white">
          <div className="max-w-md mx-auto px-4 py-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Find ATMs or Locations
            </h2>

            {/* Error Message */}
            {showError && (
              <div className="flex items-start gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-red-700">
                  <p className="font-medium">
                    We could not find a location based on the information you entered. Please revise your information and search again.
                  </p>
                </div>
              </div>
            )}

            {/* Search Form */}
            <div className="space-y-4 mb-8">
              <div>
                <label htmlFor="location-search" className="block text-gray-700 font-medium mb-2">
                  ZIP code or city & state
                </label>
                <Input
                  id="location-search"
                  type="text"
                  placeholder="Enter ZIP code or city & state"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:border-primary focus:ring-0 text-base"
                />
              </div>
              
              <Button 
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium rounded-lg"
              >
                Search
              </Button>
            </div>

            {/* Appointment Section */}
            <div className="space-y-4">
              <div className="text-gray-700">
                <h3 className="font-medium mb-2">Schedule time with a banker</h3>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300 py-3 text-base font-medium rounded-lg"
                onClick={() => console.log('Make appointment clicked')}
              >
                Make an Appointment
              </Button>
            </div>

            {/* Additional Services */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium text-gray-900">ATM Network</h4>
                  <p className="text-sm text-gray-600">Access over 13,000 ATMs nationwide</p>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80"
                  onClick={() => console.log('ATM fees clicked')}
                >
                  Learn about ATM fees
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
