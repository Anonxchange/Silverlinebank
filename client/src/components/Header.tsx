import { useState } from "react";
import { useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <>
      <header className="bg-primary text-primary-foreground h-16 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight" data-testid="text-bank-name">
            SILVERLINE BANK
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary" 
            className="bg-white text-foreground hover:bg-white/90 font-medium"
            data-testid="button-sign-on"
            onClick={() => setLocation('/sign-on')}
          >
            Sign On
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-primary-foreground hover:bg-primary/90"
            data-testid="button-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
