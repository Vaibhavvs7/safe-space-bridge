
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, add registration logic here
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
          <CardTitle className="text-2xl font-bold text-center text-gradient">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join MindBridge to start your wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  placeholder="First Name" 
                  required 
                  className="border-wellness-100 focus:border-wellness-300 focus:ring-wellness-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  placeholder="Last Name" 
                  required 
                  className="border-wellness-100 focus:border-wellness-300 focus:ring-wellness-300"
                />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a password" 
                required 
                className="border-wellness-100 focus:border-wellness-300 focus:ring-wellness-300"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <a href="#" className="text-wellness-600 hover:text-wellness-800 transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-wellness-600 hover:text-wellness-800 transition-colors">
                  Privacy Policy
                </a>
              </Label>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-wellness-600 hover:bg-wellness-700 text-white transition-all duration-300"
            >
              Create Account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a 
              onClick={() => navigate('/login')} 
              className="text-wellness-600 hover:text-wellness-800 cursor-pointer transition-colors"
            >
              Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
