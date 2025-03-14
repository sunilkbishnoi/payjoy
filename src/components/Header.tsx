
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Card', path: '/card', icon: CreditCard },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
        >
          <img 
            src="/lovable-uploads/c63c0914-45fc-498f-bd38-5e3149794f15.png" 
            alt="PayJoy Logo" 
            className="h-10"
          />
          <span className="text-xl font-semibold tracking-tight text-primary">PayJoy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors relative py-2",
                location.pathname === link.path 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary" 
                  : "text-foreground/70 hover:text-foreground link-underline"
              )}
            >
              <span>{link.name}</span>
            </Link>
          ))}
          <Button size="sm" className="ml-2 rounded-full shadow-button hover:shadow-none transition-all duration-300">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 p-6 flex flex-col gap-6 transition-all duration-300 ease-apple transform",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
          "md:hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-colors",
              location.pathname === link.path 
                ? "bg-primary/10 text-primary font-medium" 
                : "hover:bg-accent text-foreground/70 hover:text-foreground"
            )}
          >
            {link.icon && <link.icon className="h-5 w-5" />}
            <span>{link.name}</span>
          </Link>
        ))}
        <Button className="mt-4 w-full rounded-xl shadow-button">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
