import { useState } from "react";
import { Button } from "./ui/button";
import { Heart, Menu, X, ImageIcon } from "lucide-react";
import { images } from "../config/imageConfig";
import { LocalImage } from "./LocalImage";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "About", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Donate", id: "donation-section" },
    { label: "Volunteer", id: "volunteer-signup" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <LocalImage 
                src={images.logo} 
                alt="Beacon of Hope Logo" 
                className="w-11 h-11 object-contain transition-transform group-hover:scale-105"
                fallbackGradient="from-green-600 to-green-700 rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800 leading-none">Beacon of Hope</h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1 hidden sm:block">Cameroon Charity</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.slice(1, 5).map((item, index) => (
              <button 
                key={index}
                onClick={() => item.id ? scrollToSection(item.id) : item.action?.()}
                className="text-gray-700 hover:text-green-700 transition font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => scrollToSection('donation-section')}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-gray-100 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-left py-2 px-4 hover:bg-gray-100 rounded">
              Programs
            </button>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => scrollToSection('donation-section')}
            >
              Donate Now
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => scrollToSection('volunteer-signup')}
            >
              Volunteer
            </Button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 hover:bg-gray-100 rounded">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}