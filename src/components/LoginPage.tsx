
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, add authentication logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-wellness-gradient p-4">
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          className="text-wellness-700 hover:text-wellness-800 hover:bg-wellness-50"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </Button>
      </div>
      
      <Card className="w-full max-w-md glass-effect border-none animate-fade-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-gradient">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your MindBridge account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email address" 
                required 
                className="border-wellness-100 focus:border-wellness-300 focus:ring-wellness-300"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-sm text-wellness-600 hover:text-wellness-800 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Your password" 
                required 
                className="border-wellness-100 focus:border-wellness-300 focus:ring-wellness-300"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-wellness-600 hover:bg-wellness-700 text-white transition-all duration-300"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a 
              onClick={() => navigate('/signup')} 
              className="text-wellness-600 hover:text-wellness-800 cursor-pointer transition-colors"
            >
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
