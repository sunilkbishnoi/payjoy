
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
  RefreshCw,
  Shield,
  Zap,
  Clock,
  Gift,
  Share2,
  Users,
  PiggyBank,
  Landmark,
  Crown
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
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Multi-layer encryption and fraud detection to keep your transactions secure.',
    color: 'bg-teal-50 text-teal-600'
  },
  {
    icon: Zap,
    title: 'Instant Payments',
    description: 'Pay for services instantly without waiting for transaction approval.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: PiggyBank,
    title: 'Smart Savings',
    description: 'Automated savings features that round up transactions and save the difference.',
    color: 'bg-pink-50 text-pink-600'
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

const premiumFeatures = [
  {
    icon: Clock,
    title: 'Priority Processing',
    description: 'Skip the queue with preferred transaction processing for Premium members.'
  },
  {
    icon: Gift,
    title: 'Exclusive Rewards',
    description: 'Earn 2x reward points and access to premium merchant discounts.'
  },
  {
    icon: Landmark,
    title: 'Travel Insurance',
    description: 'Complimentary travel and purchase protection on eligible transactions.'
  },
  {
    icon: Users,
    title: 'Family Accounts',
    description: 'Create linked accounts for family members with custom spending limits.'
  }
];

const Features = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            All-in-One Super App Experience
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            From tap-to-pay to travel bookings, our app provides a seamless experience for all your payment and mobility needs.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative mb-20 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-3xl blur-xl -z-10"></div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/c63c0914-45fc-498f-bd38-5e3149794f15.png" 
              alt="PayJoy Logo" 
              className="h-32 md:h-40 mb-6 animate-float"
            />
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary">The Future of Payments</h3>
            <p className="text-muted-foreground mt-2">
              PayJoy combines the convenience of UPI with the security of card payments
            </p>
          </div>
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

        {/* Premium features */}
        <div className="mt-24 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium mb-4">
              <Crown className="h-4 w-4 mr-2" />
              <span>Premium Benefits</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Upgrade to PayJoy Premium</h2>
            <p className="text-muted-foreground">
              Enjoy exclusive benefits and enhanced features with our premium subscription
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
              Upgrade Now
            </Button>
          </div>
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
