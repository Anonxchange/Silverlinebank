
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
    <section className="bg-background">
      <div className="w-full">
        {/* Full Width Home Ownership Card */}
        <Card className="overflow-hidden w-full max-w-none rounded-none border-0">
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
              </div>
            ))}
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
              <div className="max-w-md mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-light mb-6" data-testid="text-home-ownership-title">
                  A home of your own
                </h3>
                <p className="text-lg mb-8 opacity-90 font-light" data-testid="text-home-ownership-description">
                  With low down payment options on a fixed-rate mortgage
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full max-w-xs bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full py-4 px-8 text-lg font-medium transition-all duration-300"
                  data-testid="button-get-started-home"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {interestImages.map((_, index) => (
              <button
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 w-2'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
