
import React from 'react';
import { CreditCard, NfcIcon, Wallet, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface HowItWorksProps {
  onGetStarted: () => void;
}

const HowItWorks = ({ onGetStarted }: HowItWorksProps) => {
  const { toast } = useToast();

  const handleStepClick = (title: string, description: string) => {
    toast({
      title,
      description,
    });
  };

  const steps = [
    {
      step: '01',
      title: 'Get Your Card',
      description: 'Order your PayJoy card online or pick it up from authorized centers near you.',
      icon: CreditCard,
      delay: 0
    },
    {
      step: '02',
      title: 'Activate & Load',
      description: 'Activate your card and load money using any UPI app by simply tapping it on your phone.',
      icon: NfcIcon,
      delay: 100
    },
    {
      step: '03',
      title: 'Tap & Pay',
      description: 'Make payments anywhere by tapping your card on NFC-enabled payment terminals.',
      icon: Wallet,
      delay: 200
    }
  ];

  return (
    <section className="py-24 bg-primary/5" id="how-it-works">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How UPI Tap-to-Pay Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the seamless integration of UPI with contactless card technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 animate-fade-in hover-scale cursor-pointer"
              style={{ animationDelay: `${item.delay}ms` }}
              onClick={() => handleStepClick(item.title, item.description)}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="rounded-full shadow-button hover:shadow-none transition-all duration-300 gap-2 animate-fade-in"
            onClick={onGetStarted}
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
