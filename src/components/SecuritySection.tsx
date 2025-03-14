
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const SecuritySection = () => {
  const { toast } = useToast();

  const handleLearnMoreSecurity = () => {
    toast({
      title: "Security Information",
      description: "PayJoy uses industry-leading security standards to protect your data and transactions.",
      variant: "default",
    });
  };

  const securityFeatures = [
    'Tokenized transactions for enhanced security',
    'Instant card freezing from the app',
    'Real-time transaction alerts',
    'PIN-protected high-value transactions'
  ];

  const securityMetrics = [
    { label: 'Encryption', value: '256-bit' },
    { label: 'Fraud Detection', value: 'Real-time' },
    { label: 'Transaction Verification', value: 'Multi-factor' }
  ];

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span>Secure Transactions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Safety and Security at Every Step
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We prioritize your security with tokenized transactions, instant freezing options, and real-time alerts, ensuring your money stays protected.
            </p>
            
            <div className="space-y-4 mb-8">
              {securityFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="rounded-full shadow-button hover:shadow-none transition-all duration-300"
              onClick={handleLearnMoreSecurity}
            >
              Learn More About Security
            </Button>
          </div>
          
          <div className="relative p-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-70" />
              
              <div className="relative h-full w-full rounded-3xl bg-white p-8 shadow-card border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced Protection</h3>
                  <p className="text-muted-foreground mb-8">
                    Your card is protected by multiple layers of security, from encryption to real-time monitoring.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {securityMetrics.map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
