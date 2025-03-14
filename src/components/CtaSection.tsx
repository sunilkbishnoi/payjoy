
import React from 'react';
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  onGetCardToday: () => void;
}

const CtaSection = ({ onGetCardToday }: CtaSectionProps) => {
  const handleLearnMore = () => {
    // Scroll to the features section
    const featuresSection = document.querySelector('section.py-24.overflow-hidden');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">
            Ready to Experience the Future of Payments?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Join thousands of users who have simplified their daily transactions with PayJoy's UPI Tap-to-Pay card.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full shadow-button hover:shadow-none transition-all duration-300"
              onClick={onGetCardToday}
            >
              Get Your Card Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
