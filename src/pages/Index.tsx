
import React from 'react';
import NavBar from '@/components/NavBar';
import { Button } from "@/components/ui/button";
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import HeroIcon from '@/components/HeroIcon';
import { 
  Brain, 
  Shield, 
  LineChart, 
  Users, 
  Sparkles,
  Lightbulb,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-wellness-gradient overflow-hidden">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-no-repeat bg-cover opacity-5"></div>
        <div className="container mx-auto text-center relative">
          <div className="inline-block bg-wellness-50 text-wellness-700 px-4 py-1 rounded-full text-sm font-medium mb-6 animate-fade-in">
            AI-Powered Student Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-in">
            Your Personal Mental Wellness <span className="text-gradient">Companion</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-100">
            Proactive mental wellness support for students, powered by AI. Get personalized guidance, connect with resources, and track your mental well-being journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-200">
            <Button 
              size="lg" 
              className="bg-wellness-600 hover:bg-wellness-700 text-white flex items-center gap-2 text-lg px-6 py-6"
              onClick={() => window.location.href = '/signup'}
            >
              Get Started <ChevronRight size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-wellness-600 text-wellness-700 hover:bg-wellness-50 flex items-center gap-2 text-lg px-6 py-6"
              onClick={() => window.location.href = '#how-it-works'}
            >
              Learn More
            </Button>
          </div>
          
          <div className="glass-effect p-8 max-w-5xl mx-auto relative animate-fade-in animate-delay-300">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-wellness-100 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-wellness-200 rounded-full opacity-60 animate-float animate-delay-500"></div>
            
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Student using MindBridge" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">AI That Understands You</h3>
                <p className="text-muted-foreground mb-6">
                  Our advanced AI analyzes your inputs to provide personalized mental wellness strategies tailored specifically to your needs as a student.
                </p>
                <ul className="space-y-3">
                  {[
                    'Personalized mental wellness recommendations',
                    'Evidence-based coping strategies',
                    'Secure and private journaling',
                    'Connection to professional support when needed'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-wellness-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MindBridge offers a comprehensive suite of tools designed to support your mental wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<HeroIcon><Brain size={24} /></HeroIcon>}
              title="AI-Powered Analysis"
              description="Our AI analyzes your journaling and self-assessments to provide personalized mental wellness strategies."
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<HeroIcon><Lightbulb size={24} /></HeroIcon>}
              title="Evidence-Based Resources"
              description="Access a curated library of scientifically-validated mental wellness information and techniques."
              className="animate-slide-up animate-delay-100"
            />
            <FeatureCard
              icon={<HeroIcon><Users size={24} /></HeroIcon>}
              title="Support Connection"
              description="Easily connect with on-campus counselors and mental health professionals when needed."
              className="animate-slide-up animate-delay-200"
            />
            <FeatureCard
              icon={<HeroIcon><Shield size={24} /></HeroIcon>}
              title="Privacy-Focused"
              description="Your data is encrypted and secure. We prioritize your privacy and confidentiality at every step."
              className="animate-slide-up animate-delay-300"
            />
            <FeatureCard
              icon={<HeroIcon><LineChart size={24} /></HeroIcon>}
              title="Progress Tracking"
              description="Monitor your mental wellness journey with intuitive visualizations and progress indicators."
              className="animate-slide-up animate-delay-400"
            />
            <FeatureCard
              icon={<HeroIcon><Sparkles size={24} /></HeroIcon>}
              title="Real-time Recommendations"
              description="Receive immediate suggestions for coping strategies based on your current mental state."
              className="animate-slide-up animate-delay-500"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-wellness-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MindBridge Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple and effective process to support your mental wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Personal Assessment',
                description: 'Complete a secure, confidential assessment to help our AI understand your mental wellness needs.'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our algorithm processes your inputs to generate personalized strategies and recommendations.'
              },
              {
                step: '03',
                title: 'Ongoing Support',
                description: 'Receive continuous guidance, track your progress, and connect with resources as needed.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-wellness-100 rounded-full flex items-center justify-center text-wellness-700 text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who have improved their mental wellness with MindBridge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MindBridge helped me recognize my stress triggers and develop effective coping strategies. It's like having a personal mental wellness coach."
              author="Alex Johnson"
              role="Psychology Major, Junior"
            />
            <TestimonialCard
              quote="The AI recommendations are surprisingly insightful. MindBridge suggested techniques that really helped me manage my exam anxiety."
              author="Samantha Lee"
              role="Computer Science Major, Senior"
            />
            <TestimonialCard
              quote="I appreciate how MindBridge connected me with campus resources I didn't know existed. It's made a huge difference in my well-being."
              author="Michael Chen"
              role="Engineering Major, Sophomore"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-wellness-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of students who are proactively managing their mental wellness with MindBridge.
          </p>
          <Button 
            size="lg" 
            className="bg-wellness-600 hover:bg-wellness-700 text-white flex items-center gap-2 text-lg px-6 py-6 mx-auto"
            onClick={() => window.location.href = '/signup'}
          >
            Sign Up for Free <ChevronRight size={18} />
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">MindBridge</h3>
              <p className="text-muted-foreground">
                AI-powered mental wellness companion for students.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-wellness-700 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-muted-foreground hover:text-wellness-700 transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-wellness-700 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-wellness-700 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MindBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
