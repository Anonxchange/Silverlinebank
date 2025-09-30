import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import financialGuidanceImg from "@assets/generated_images/Financial_guidance_lifestyle_photo_ec2f8e3c.png";

export default function FinancialGuidanceSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-1 bg-chart-3 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground" data-testid="text-guidance-title">
            Financial guidance and support
          </h2>
        </div>
        
        <Card className="overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={financialGuidanceImg} 
              alt="Person planning financial goals" 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-ready-set-save">
              Ready. Set. Save.
            </h3>
            <p className="text-base text-muted-foreground mb-6" data-testid="text-savings-strategy">
              See how a savings strategy can help you reach your goals
            </p>
            <Button 
              variant="outline" 
              size="lg"
              data-testid="button-get-started-guidance"
              onClick={() => console.log('Get started guidance clicked')}
            >
              Get started
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
