
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  NfcIcon, 
  Shield, 
  Eye, 
  EyeOff, 
  Power, 
  RefreshCw,
  PlusCircle,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Bus,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mockCards = [
  {
    id: '1',
    name: 'PayJoy Card',
    number: '•••• •••• •••• 4289',
    expiry: '05/28',
    balance: 2580.75,
    status: 'active',
    type: 'standard',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: '2',
    name: 'PayJoy Gold',
    number: '•••• •••• •••• 7651',
    expiry: '09/29',
    balance: 5250.50,
    status: 'active',
    type: 'premium',
    color: 'from-purple-600 to-pink-600'
  }
];

const mockTransactions = [
  {
    id: 't1',
    date: new Date(2023, 7, 15),
    merchant: 'Metro Rail',
    amount: -120,
    type: 'transport',
    status: 'completed'
  },
  {
    id: 't2',
    date: new Date(2023, 7, 14),
    merchant: 'City Bus',
    amount: -40,
    type: 'transport',
    status: 'completed'
  },
  {
    id: 't3',
    date: new Date(2023, 7, 13),
    merchant: 'SuperMart',
    amount: -450.25,
    type: 'retail',
    status: 'completed'
  },
  {
    id: 't4',
    date: new Date(2023, 7, 10),
    merchant: 'UPI Recharge',
    amount: 1000,
    type: 'recharge',
    status: 'completed'
  },
];

const CardManager = () => {
  const [selectedCard, setSelectedCard] = useState(mockCards[0]);
  const [showCardDetails, setShowCardDetails] = useState(false);
  
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Your Cards</h2>
          
          <div className="space-y-4">
            {mockCards.map((card) => (
              <div 
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={cn(
                  "payment-card cursor-pointer transition-all duration-300 ease-apple p-5",
                  "border border-white/20 bg-gradient-to-br text-white",
                  "hover:shadow-xl hover-scale",
                  selectedCard.id === card.id ? "shadow-lg scale-[1.02]" : "opacity-80 scale-100",
                  card.color
                )}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <NfcIcon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider opacity-80">
                    {card.type === 'premium' ? 'Premium' : 'Standard'}
                  </span>
                </div>
                
                <div className="mt-4 text-sm font-light opacity-90">{card.name}</div>
                <div className="text-lg font-semibold mt-1 mb-4">{card.number}</div>
                
                <div className="flex justify-between items-center text-xs opacity-80">
                  <div>
                    <span>VALID THRU</span>
                    <div>{card.expiry}</div>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <CreditCard className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full justify-start gap-2 h-14 border-dashed">
              <PlusCircle className="h-5 w-5" />
              <span>Add New Card</span>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="details">Card Details</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="animate-fade-in">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">{selectedCard.name}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowCardDetails(!showCardDetails)}
                    >
                      {showCardDetails ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Card Number</p>
                      <p className="font-medium">
                        {showCardDetails ? '4289 5678 9012 4289' : selectedCard.number}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                      <p className="font-medium">{selectedCard.expiry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Card Type</p>
                      <p className="font-medium capitalize">{selectedCard.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <div className="flex items-center gap-1">
                        <span className={cn(
                          "inline-block w-2 h-2 rounded-full",
                          selectedCard.status === 'active' ? "bg-green-500" : "bg-red-500"
                        )} />
                        <p className="font-medium capitalize">{selectedCard.status}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary p-6 rounded-xl mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-muted-foreground">Current Balance</p>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <RefreshCw className="h-3.5 w-3.5" />
                        <span>Recharge</span>
                      </Button>
                    </div>
                    <p className="text-3xl font-bold">₹{selectedCard.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="gap-2 justify-center">
                      <Shield className="h-4 w-4" />
                      <span>Freeze Card</span>
                    </Button>
                    <Button variant="outline" className="gap-2 justify-center">
                      <Power className="h-4 w-4" />
                      <span>Deactivate</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions" className="animate-fade-in">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Recent Transactions</h3>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {mockTransactions.map((transaction) => (
                      <div 
                        key={transaction.id}
                        className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            transaction.type === 'transport' ? "bg-blue-100 text-blue-600" :
                            transaction.type === 'retail' ? "bg-purple-100 text-purple-600" :
                            "bg-green-100 text-green-600"
                          )}>
                            {transaction.type === 'transport' ? (
                              <Bus className="h-5 w-5" />
                            ) : transaction.type === 'retail' ? (
                              <ShoppingBag className="h-5 w-5" />
                            ) : (
                              <RefreshCw className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.merchant}</p>
                            <p className="text-sm text-muted-foreground">
                              {transaction.date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                            </p>
                          </div>
                        </div>
                        <div className={transaction.amount > 0 ? "text-green-600 font-medium" : "font-medium"}>
                          {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="animate-fade-in">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Card Settings</h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: RefreshCw, title: 'Auto-Recharge', description: 'Set up automatic recharge when balance is low' },
                      { icon: AlertCircle, title: 'Transaction Alerts', description: 'Get notified for all card transactions' },
                      { icon: Shield, title: 'Security Settings', description: 'Manage card security preferences' },
                      { icon: NfcIcon, title: 'Contactless Payments', description: 'Configure tap-to-pay settings' },
                    ].map((setting, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <setting.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{setting.title}</p>
                            <p className="text-sm text-muted-foreground">{setting.description}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CardManager;
