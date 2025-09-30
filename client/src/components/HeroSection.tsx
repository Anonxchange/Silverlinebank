import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import checkingImg from "@assets/stock_images/checking_account_sav_9c774ca6.jpg";
import buildingImg1 from "@assets/stock_images/modern_glass_office__c69eec70.jpg";
import buildingImg2 from "@assets/stock_images/modern_glass_office__ab3c7364.jpg";
import buildingImg3 from "@assets/stock_images/modern_glass_office__488ba5bd.jpg";

const heroImages = [
  checkingImg,
  buildingImg1,
  buildingImg2,
  buildingImg3
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background w-full pt-8 md:pt-12">
      <div className="w-full relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background"></div>
            </div>
          ))}
          
          <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
            <div className="max-w-xl w-full bg-card/95 backdrop-blur-sm border border-card-border rounded-md p-8 md:p-10 text-center shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-1 bg-chart-2 mx-auto mb-3"></div>
                <p className="text-base text-muted-foreground font-medium" data-testid="text-hero-label">
                  Enjoy
                </p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-chart-2 mb-4" data-testid="text-hero-amount">
                $325
              </h2>
              <div className="w-16 h-1 bg-chart-2 mx-auto mb-8"></div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-hero-title">
                $325 checking bonus on us
              </h3>
              <p className="text-base text-muted-foreground mb-8" data-testid="text-hero-description">
                New customers open an eligible checking account with qualifying direct deposits
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full font-medium"
                data-testid="button-get-started"
                onClick={() => console.log('Get started clicked')}
              >
                Get started &gt;&gt;
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-primary w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
