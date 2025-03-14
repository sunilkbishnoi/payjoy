
import React from 'react';
import { CreditCard, NfcIcon, Smartphone, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-blue-50 to-transparent -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 h-64 w-64 bg-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-primary text-sm font-medium mb-6 animate-fade-in">
              <NfcIcon className="h-4 w-4 mr-2" />
              <span>UPI Tap-to-Pay Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance mb-6 animate-fade-in bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent" style={{ animationDelay: '100ms' }}>
              The Smarter Way to Pay, Travel & Save
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 text-balance animate-fade-in" style={{ animationDelay: '200ms' }}>
              One card for all your payments. Use our UPI-enabled card for seamless transactions across travel, retail, and utilities. No wallet needed, just tap and go.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Card
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-2">
                How It Works
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {[
                { icon: NfcIcon, label: "UPI Tap-to-Pay" },
                { icon: ShoppingCart, label: "Universal Acceptance" },
                { icon: Smartphone, label: "Mobile Recharge" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Card visualization */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-[4/3] p-6">
              {/* Logo display */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <img 
                  src="/lovable-uploads/c63c0914-45fc-498f-bd38-5e3149794f15.png" 
                  alt="PayJoy Logo" 
                  className="h-24 md:h-28 animate-float"
                />
              </div>
              
              {/* Main card */}
              <div className={cn(
                "absolute payment-card bg-gradient-to-br from-purple-600 to-blue-600 p-6",
                "flex flex-col justify-between text-white shadow-xl rotate-6",
                "animate-float hover-scale origin-bottom-left",
                "border border-white/20"
              )}>
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <NfcIcon className="h-6 w-6" />
                    </div>
                    <span className="text-xs uppercase tracking-wider opacity-80">Tap to pay</span>
                  </div>
                  <div className="mt-6 text-sm font-light opacity-90">PayJoy Card</div>
                </div>
                
                <div>
                  <div className="text-xl font-semibold mb-2">•••• •••• •••• 4289</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs opacity-80">
                      <span>VALID THRU</span>
                      <div>05/28</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <CreditCard className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary card */}
              <div className={cn(
                "absolute payment-card bg-gradient-to-br from-pink-600 to-purple-600 p-6",
                "flex flex-col justify-between text-white shadow-xl -rotate-6",
                "animate-float hover-scale origin-bottom-right",
                "border border-white/20",
                "animation-delay-1000"
              )}>
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <NfcIcon className="h-6 w-6" />
                    </div>
                    <span className="text-xs uppercase tracking-wider opacity-80">Premium</span>
                  </div>
                  <div className="mt-6 text-sm font-light opacity-90">PayJoy Gold</div>
                </div>
                
                <div>
                  <div className="text-xl font-semibold mb-2">•••• •••• •••• 7651</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs opacity-80">
                      <span>VALID THRU</span>
                      <div>09/29</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <CreditCard className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
