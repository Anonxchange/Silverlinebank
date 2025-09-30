import { Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AppDownloadSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Card className="bg-gradient-to-r from-primary/10 to-chart-1/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-primary/20 rounded-full p-6">
                  <Smartphone className="w-16 h-16 text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3" data-testid="text-app-title">
                  Bank on the go with our mobile app
                </h2>
                <p className="text-base text-muted-foreground mb-6" data-testid="text-app-description">
                  Manage your accounts, deposit checks, transfer money, and pay bills—all from your smartphone.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button 
                    variant="default"
                    data-testid="button-download-ios"
                    onClick={() => console.log('Download iOS app clicked')}
                  >
                    Download on App Store
                  </Button>
                  <Button 
                    variant="outline"
                    data-testid="button-download-android"
                    onClick={() => console.log('Download Android app clicked')}
                  >
                    Get it on Google Play
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
