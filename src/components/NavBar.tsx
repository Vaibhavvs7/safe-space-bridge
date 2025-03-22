
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">MindBridge</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-foreground hover:text-wellness-700 transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-wellness-700 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground hover:text-wellness-700 transition-colors">Testimonials</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden sm:inline-flex border-wellness-600 text-wellness-700 hover:bg-wellness-50"
            onClick={() => window.location.href = '/login'}
          >
            Log In
          </Button>
          <Button 
            className="bg-wellness-600 hover:bg-wellness-700 text-white"
            onClick={() => window.location.href = '/signup'}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
