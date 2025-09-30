
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import checkingImg from "@assets/stock_images/checking_account_sav_9c774ca6.jpg";
import buildingImg1 from "@assets/stock_images/modern_glass_office__c69eec70.jpg";
import buildingImg2 from "@assets/stock_images/modern_glass_office__ab3c7364.jpg";
import buildingImg3 from "@assets/stock_images/modern_glass_office__488ba5bd.jpg";

const interestImages = [
  checkingImg,
  buildingImg1,
  buildingImg2,
  buildingImg3
];

export default function InterestRatesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % interestImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Interest Rates Card */}
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-none">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-500 rounded-full p-3 relative">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.55 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.55 17 2V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H7ZM20 8H4V20H20V8ZM6 10V12H18V10H6Z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 text-yellow-400">
                    <span className="text-lg">✨</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Interest rates today
                  </h3>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-600 font-medium"
                    data-testid="button-learn-more-rates"
                  >
                    Learn more &gt;
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Home Ownership Card with Changing Images */}
          <Card className="overflow-hidden">
            <div className="relative h-80 md:h-96 overflow-hidden">
              {interestImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Home ownership slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/70"></div>
                </div>
              ))}
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" data-testid="text-home-ownership-title">
                  A home of your own
                </h3>
                <p className="text-base mb-6 opacity-90" data-testid="text-home-ownership-description">
                  With low down payment options on a fixed-rate mortgage
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-get-started-home"
                >
                  Get started
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {interestImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
