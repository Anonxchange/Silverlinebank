import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pazeImg from "@assets/generated_images/Payment_feature_promotional_photo_24febe8b.png";
import lifeSyncImg from "@assets/generated_images/Mobile_app_insights_screenshot_8d6f43d5.png";

export default function FeaturesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <Card className="overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={pazeImg} 
              alt="Paze payment feature" 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-paze-title">
              Paze<sup className="text-sm">SM</sup> offers added security
            </h3>
            <p className="text-base text-muted-foreground mb-6" data-testid="text-paze-description">
              A convenient way to use your eligible Silverline Bank cards at select merchants
            </p>
            <Button 
              variant="outline" 
              size="lg"
              data-testid="button-learn-more-paze"
              onClick={() => console.log('Learn more Paze clicked')}
            >
              Learn more
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-muted/30">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-lifesync-title">
                  Move your goals forward
                </h3>
                <p className="text-base text-muted-foreground mb-6" data-testid="text-lifesync-description">
                  Take the next step with LifeSync<sup className="text-xs">®</sup>
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  data-testid="button-get-started-lifesync"
                  onClick={() => console.log('Get started LifeSync clicked')}
                >
                  Get started
                </Button>
              </div>
              <div className="w-full md:w-80 order-1 md:order-2">
                <img 
                  src={lifeSyncImg} 
                  alt="LifeSync app screenshot" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
