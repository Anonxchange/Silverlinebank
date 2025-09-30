import { useState } from "react";
import { X, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    title: "Personal",
    items: [
      "Checking",
      "Savings & CDs",
      "Credit Cards",
      "Home Loans",
      "Personal Loans",
      "Auto Loans",
      "Premier",
      "Education & Tools"
    ]
  },
  {
    title: "",
    items: [
      "Investing & Wealth Management",
      "Small Business",
      "Commercial Banking",
      "Corporate & Investment Banking"
    ]
  },
  {
    title: "",
    items: [
      "About Silverline Bank",
      "ATMs/Locations",
      "Customer service and FAQs",
      "Español"
    ]
  }
];

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-foreground/50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-background z-50 shadow-xl overflow-y-auto">
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-xl font-bold" data-testid="text-menu-title">SILVERLINE BANK</h2>
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white text-foreground hover:bg-white/90"
              data-testid="button-menu-sign-on"
              onClick={() => console.log('Sign On clicked')}
            >
              Sign On
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              className="text-primary-foreground hover:bg-primary/90"
              data-testid="button-close-menu"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        <div className="p-4 border-b border-border bg-background">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-menu-search"
            />
          </div>
        </div>

        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border-b border-border">
            {section.title && (
              <div className="bg-chart-3 text-foreground font-semibold px-4 py-3">
                {section.title}
              </div>
            )}
            <div className="bg-background">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="w-full px-4 py-4 flex items-center justify-between hover-elevate active-elevate-2 border-b border-border last:border-b-0"
                  data-testid={`button-menu-${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  onClick={() => console.log(`${item} clicked`)}
                >
                  <span className="text-base text-foreground">{item}</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
