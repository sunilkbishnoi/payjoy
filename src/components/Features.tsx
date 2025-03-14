import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CreditCard, 
  NfcIcon, 
  Bus, 
  Train, 
  Plane, 
  ShoppingBag, 
  MapPin, 
  AlertCircle,
  Smartphone,
  Wallet,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: NfcIcon,
    title: 'Tap-to-Pay with UPI',
    description: 'Simply tap your card on any NFC-enabled payment terminal for instant UPI transactions.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Wallet,
    title: 'Recharge via UPI',
    description: 'Hold your card against your smartphone to reload balance via any UPI app.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: RefreshCw,
    title: 'Auto-Recharge',
    description: 'Set up automatic reloads when your balance falls below a threshold you set.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Card Management',
    description: 'Activate, block, or check balance of your card anytime from the app.',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: MapPin,
    title: 'Navigation',
    description: 'Access maps and real-time transit updates for your daily commute.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Services',
    description: 'Quick access to SOS, police, and hospital services when you need them most.',
    color: 'bg-orange-50 text-orange-600'
  }
];

const travelFeatures = [
  {
    icon: Bus,
    title: 'Bus',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Train,
    title: 'Train',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Plane,
    title: 'Flight',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Smartphone,
    title: 'Recharge',
    color: 'from-yellow-500 to-yellow-600'
  }
];

const Features = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in">
            All-in-One Super App Experience
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            From tap-to-pay to travel bookings, our app provides a seamless experience for all your payment and mobility needs.
          </p>
        </div>

        {/* Travel & payment options */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-center">Works Everywhere You Go</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {travelFeatures.map((feature, index) => (
              <div 
                key={index}
                className="aspect-square rounded-2xl bg-gradient-to-br hover-lift hover-scale cursor-pointer p-1"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` 
                }}
              >
                <div className="h-full w-full rounded-xl bg-white flex flex-col items-center justify-center p-4">
                  <feature.icon className="h-10 w-10 mb-3" />
                  <span className="font-medium">{feature.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift hover-scale border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", feature.color)}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full shadow-button hover:shadow-none transition-all duration-300 animate-fade-in">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
