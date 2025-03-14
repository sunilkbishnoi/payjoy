
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { Button } from "@/components/ui/button";
import { CreditCard, NfcIcon, Shield, ArrowRight, MapPin, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Features />
        
        {/* How it works section */}
        <section className="py-24 bg-primary/5">
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
              {[
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
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${item.delay}ms` }}
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
              <Button size="lg" className="rounded-full shadow-button hover:shadow-none transition-all duration-300 gap-2 animate-fade-in">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Security section */}
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
                  {[
                    'Tokenized transactions for enhanced security',
                    'Instant card freezing from the app',
                    'Real-time transaction alerts',
                    'PIN-protected high-value transactions'
                  ].map((item, i) => (
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
                
                <Button size="lg" className="rounded-full shadow-button hover:shadow-none transition-all duration-300">
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
                      {[
                        { label: 'Encryption', value: '256-bit' },
                        { label: 'Fraud Detection', value: 'Real-time' },
                        { label: 'Transaction Verification', value: 'Multi-factor' }
                      ].map((item, i) => (
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
        
        {/* CTA section */}
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
                <Button size="lg" variant="secondary" className="rounded-full shadow-button hover:shadow-none transition-all duration-300">
                  Get Your Card Today
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-secondary">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-semibold tracking-tight">PayJoy</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  The future of seamless payments with UPI Tap-to-Pay technology.
                </p>
              </div>
              
              {[
                {
                  title: 'Product',
                  links: ['Features', 'How It Works', 'Pricing', 'Security']
                },
                {
                  title: 'Company',
                  links: ['About', 'Careers', 'Blog', 'Press']
                },
                {
                  title: 'Resources',
                  links: ['Help Center', 'Contact', 'Terms', 'Privacy']
                }
              ].map((column, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2023 PayJoy. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                  <a key={i} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
