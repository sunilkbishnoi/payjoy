
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import SecuritySection from '../components/SecuritySection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Get Started",
      description: "We'll help you get started with PayJoy!",
      variant: "default",
    });
  };

  const handleGetCardToday = () => {
    toast({
      title: "Card Request Initiated",
      description: "You'll be contacted shortly about your new PayJoy card!",
      variant: "default",
    });
    setTimeout(() => navigate('/card'), 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks onGetStarted={handleGetStarted} />
        <SecuritySection />
        <CtaSection onGetCardToday={handleGetCardToday} />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
