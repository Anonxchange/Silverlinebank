import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import communityImg1 from "@assets/generated_images/Gemini_Generated_Image_ghkkopghkkopghkk.png";
import communityImg2 from "@assets/generated_images/Community_empowerment_photography_d6423b3a.png";

export default function CommunitySection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-1 bg-chart-3 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="text-community-header">
            Serving our customers and communities
          </h2>
        </div>
        
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-community-statement">
          It doesn't happen with one transaction, in one day on the job, or in one quarter. It's earned relationship by relationship.
        </p>

        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={communityImg1} 
                alt="Community volunteers at bank branch" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-who-we-are">
                Who we are
              </h3>
              <p className="text-base text-muted-foreground mb-6" data-testid="text-who-we-are-desc">
                Silverline Bank helps strengthen communities through inclusion, economic empowerment, and sustainability.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                data-testid="button-about-silverline"
                onClick={() => console.log('About Silverline Bank clicked')}
              >
                About Silverline Bank
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={communityImg2} 
                alt="Community members working together" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-commitment-title">
                Why we're committed to communities
              </h3>
              <p className="text-base text-muted-foreground mb-6" data-testid="text-commitment-desc">
                We don't just serve our communities—we are our communities. We're committed to helping customers and neighborhoods across the country thrive.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                data-testid="button-silverline-stories"
                onClick={() => console.log('Silverline Bank Stories clicked')}
              >
                Silverline Bank Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
