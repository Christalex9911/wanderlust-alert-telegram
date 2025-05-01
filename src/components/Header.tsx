
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-hotdeal">
            <span className="text-travel-dark">Travel</span>Hot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#tours" className="text-sm font-medium hover:text-hotdeal transition-colors">
            Горящие туры
          </a>
          <a href="#about" className="text-sm font-medium hover:text-hotdeal transition-colors">
            О нас
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-hotdeal transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <a 
            href="tel:+78001234567" 
            className="hidden sm:flex items-center space-x-1 font-medium text-sm text-travel-dark hover:text-hotdeal transition-colors"
          >
            <PhoneIcon size={16} />
            <span>8 (800) 123-45-67</span>
          </a>
          <Button
            className="bg-hotdeal hover:bg-hotdeal-hover text-xs sm:text-sm"
            asChild
          >
            <a href="#tours">Горящие туры</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
