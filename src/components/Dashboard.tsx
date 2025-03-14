
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { 
  CreditCard, 
  TrendingUp, 
  Bus, 
  ShoppingBag, 
  MapPin, 
  BarChart3,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for charts
const spendingData = [
  { name: 'May', Transport: 1200, Retail: 800, Food: 600, Utility: 400 },
  { name: 'Jun', Transport: 1400, Retail: 1100, Food: 500, Utility: 450 },
  { name: 'Jul', Transport: 1300, Retail: 950, Food: 700, Utility: 400 },
  { name: 'Aug', Transport: 1500, Retail: 1200, Food: 800, Utility: 500 },
  { name: 'Sep', Transport: 1800, Retail: 1300, Food: 900, Utility: 550 },
  { name: 'Oct', Transport: 1600, Retail: 1500, Food: 1000, Utility: 480 },
];

const categoryData = [
  { name: 'Transport', value: 40 },
  { name: 'Retail', value: 30 },
  { name: 'Food', value: 20 },
  { name: 'Utility', value: 10 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316'];

const recentActivities = [
  {
    id: 'a1',
    type: 'transport',
    title: 'Metro Rail Trip',
    description: 'Delhi Metro Blue Line',
    amount: -120,
    time: '2 hours ago'
  },
  {
    id: 'a2',
    type: 'retail',
    title: 'SuperMart Purchase',
    description: 'Grocery shopping',
    amount: -450.25,
    time: '5 hours ago'
  },
  {
    id: 'a3',
    type: 'recharge',
    title: 'Card Recharge',
    description: 'Via UPI',
    amount: 1000,
    time: '1 day ago'
  },
  {
    id: 'a4',
    type: 'transport',
    title: 'City Bus Trip',
    description: 'Route 42B',
    amount: -40,
    time: '1 day ago'
  },
];

const Dashboard = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="flex flex-col gap-8">
        {/* Dashboard header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Your travel and payment insights at a glance.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <span>Feb 2025</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button>
              <span>Download Report</span>
            </Button>
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Total Balance', 
              value: '₹7,831.25', 
              change: '+12.3%', 
              changeType: 'positive',
              icon: CreditCard,
              color: 'bg-blue-50 text-blue-600'
            },
            { 
              title: 'Monthly Spending', 
              value: '₹5,240.50', 
              change: '-5.4%', 
              changeType: 'negative',
              icon: TrendingUp,
              color: 'bg-purple-50 text-purple-600'
            },
            { 
              title: 'Transport Expenses', 
              value: '₹1,840.00', 
              change: '+8.1%', 
              changeType: 'positive',
              icon: Bus,
              color: 'bg-indigo-50 text-indigo-600'
            },
            { 
              title: 'Retail Spending', 
              value: '₹1,650.75', 
              change: '+2.5%', 
              changeType: 'positive',
              icon: ShoppingBag,
              color: 'bg-pink-50 text-pink-600'
            },
          ].map((stat, index) => (
            <Card key={index} className="border-0 shadow-card hover-lift">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <div className={cn(
                      "text-xs font-medium mt-1",
                      stat.changeType === 'positive' ? "text-green-600" : "text-red-600"
                    )}>
                      {stat.change} from last month
                    </div>
                  </div>
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", stat.color)}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Spending Overview</CardTitle>
                <Button variant="ghost" size="sm" className="gap-1">
                  <span>View details</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={spendingData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      {[
                        { id: 'colorTransport', color: '#3b82f6' },
                        { id: 'colorRetail', color: '#8b5cf6' },
                        { id: 'colorFood', color: '#ec4899' },
                        { id: 'colorUtility', color: '#f97316' },
                      ].map((item) => (
                        <linearGradient key={item.id} id={item.id} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={item.color} stopOpacity={0.8}/>
                          <stop offset="95%" stopColor={item.color} stopOpacity={0.1}/>
                        </linearGradient>
                      ))}
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value}`} />
                    <Tooltip formatter={(value) => [`₹${value}`, '']} />
                    <Area type="monotone" dataKey="Transport" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTransport)" />
                    <Area type="monotone" dataKey="Retail" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRetail)" />
                    <Area type="monotone" dataKey="Food" stroke="#ec4899" fillOpacity={1} fill="url(#colorFood)" />
                    <Area type="monotone" dataKey="Utility" stroke="#f97316" fillOpacity={1} fill="url(#colorUtility)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={4}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, '']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent activity and nearby locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        activity.type === 'transport' ? "bg-blue-100 text-blue-600" :
                        activity.type === 'retail' ? "bg-purple-100 text-purple-600" :
                        "bg-green-100 text-green-600"
                      )}>
                        {activity.type === 'transport' ? (
                          <Bus className="h-5 w-5" />
                        ) : activity.type === 'retail' ? (
                          <ShoppingBag className="h-5 w-5" />
                        ) : (
                          <CreditCard className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <div className="flex items-center gap-1">
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <span className="text-xs text-muted-foreground">•</span>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className={activity.amount > 0 ? "text-green-600 font-medium" : "font-medium"}>
                      {activity.amount > 0 ? '+' : ''}₹{Math.abs(activity.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Nearby Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Central Metro Station', distance: '0.5 km', type: 'transport' },
                  { name: 'City Bus Terminal', distance: '1.2 km', type: 'transport' },
                  { name: 'SuperMart', distance: '0.8 km', type: 'retail' },
                  { name: 'Central Park', distance: '1.5 km', type: 'location' },
                ].map((location, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        location.type === 'transport' ? "bg-blue-100 text-blue-600" :
                        location.type === 'retail' ? "bg-purple-100 text-purple-600" :
                        "bg-green-100 text-green-600"
                      )}>
                        {location.type === 'transport' ? (
                          <Bus className="h-5 w-5" />
                        ) : location.type === 'retail' ? (
                          <ShoppingBag className="h-5 w-5" />
                        ) : (
                          <MapPin className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-muted-foreground">{location.distance}</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <MapPin className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
