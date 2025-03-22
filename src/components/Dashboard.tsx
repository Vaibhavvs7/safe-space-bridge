
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatInterface from './ChatInterface';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-wellness-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gradient">MindBridge</span>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-wellness-700 hover:bg-wellness-50"
          >
            Sign Out
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>
        
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Dashboard Overview</TabsTrigger>
            <TabsTrigger value="ai-chat">AI Wellness Assistant</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mental Wellness Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-wellness-700">85%</div>
                  <p className="text-sm text-muted-foreground mt-1">Up 5% from last week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Stress Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-wellness-700">Low</div>
                  <p className="text-sm text-muted-foreground mt-1">Improved since yesterday</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Journal Entries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-wellness-700">12</div>
                  <p className="text-sm text-muted-foreground mt-1">This month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Your AI Recommendations</h2>
              <p className="text-muted-foreground mb-6">
                Based on your recent activities and journal entries, here are some personalized recommendations:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-wellness-100 text-wellness-700 p-1 rounded-full mr-2">✓</span>
                  <span>Try a 10-minute mindfulness meditation session this evening</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-wellness-100 text-wellness-700 p-1 rounded-full mr-2">✓</span>
                  <span>Schedule a short walk between your afternoon classes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-wellness-100 text-wellness-700 p-1 rounded-full mr-2">✓</span>
                  <span>Consider journaling about your academic achievements this week</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">You have no upcoming sessions scheduled.</p>
                  <Button className="bg-wellness-600 hover:bg-wellness-700">Schedule Session</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resource Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Access evidence-based mental wellness resources.</p>
                  <Button variant="outline" className="border-wellness-600 text-wellness-700">Browse Resources</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-chat" className="h-[calc(100vh-250px)]">
            <ChatInterface />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
