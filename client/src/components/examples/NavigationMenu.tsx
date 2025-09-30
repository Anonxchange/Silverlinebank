import { useState } from 'react';
import NavigationMenu from '../NavigationMenu';
import { Button } from '@/components/ui/button';

export default function NavigationMenuExample() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="relative h-screen">
      <Button onClick={() => setIsOpen(true)}>Open Menu</Button>
      <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
