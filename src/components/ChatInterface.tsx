
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your mental wellness companion. How are you feeling today? Share your thoughts, and I\'ll provide personalized guidance based on your needs.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message to the chat
    const newUserMessage: Message = {
      role: 'user',
      content: inputMessage
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would call the Gemini API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prevMessages => [...prevMessages, {
        role: 'assistant',
        content: aiResponse
      }]);
      setIsLoading(false);
    }, 1500);
  };

  // This function simulates an AI response - would be replaced with actual Gemini API
  const generateAIResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('stress') || lowercaseMessage.includes('anxious') || lowercaseMessage.includes('anxiety')) {
      return "I've noticed you're mentioning stress or anxiety. It's common among students. Try these techniques:\n\n" +
        "1. Practice deep breathing for 5 minutes\n" +
        "2. Take short breaks between study sessions\n" +
        "3. Consider scheduling a session with a counselor if these feelings persist for more than two weeks";
    } else if (lowercaseMessage.includes('sad') || lowercaseMessage.includes('depress') || lowercaseMessage.includes('down')) {
      return "I understand you're feeling down. This is something many students experience. Based on what you've shared:\n\n" +
        "1. Try to maintain social connections, even briefly\n" +
        "2. Physical activity, even a short walk, can help improve mood\n" +
        "3. If these feelings persist or worsen, please consider reaching out to the campus counseling center";
    } else if (lowercaseMessage.includes('sleep') || lowercaseMessage.includes('tired') || lowercaseMessage.includes('insomnia')) {
      return "Sleep issues can significantly impact your mental wellness. Here are some evidence-based recommendations:\n\n" +
        "1. Maintain a consistent sleep schedule\n" +
        "2. Reduce screen time 1 hour before bed\n" +
        "3. Try a relaxation technique like progressive muscle relaxation\n\n" +
        "Your sleep patterns suggest you might benefit from a brief consultation with a sleep specialist.";
    } else {
      return "Thank you for sharing. Based on my analysis of what you've mentioned, here are some personalized recommendations:\n\n" +
        "1. Consider starting a gratitude journal to document positive experiences\n" +
        "2. Schedule short mindfulness sessions between classes\n" +
        "3. Your patterns suggest you're managing well, but remember our campus resources are available if needed";
    }
  };

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">AI Mental Wellness Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-4">
        <div className="flex-grow overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-wellness-600 text-white' 
                    : 'bg-wellness-50 text-wellness-900 border border-wellness-100'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-wellness-50 text-wellness-900 border border-wellness-100 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-wellness-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-wellness-400 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-wellness-400 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex space-x-2">
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <Button 
            onClick={sendMessage} 
            disabled={isLoading || inputMessage.trim() === ''}
            className="bg-wellness-600 hover:bg-wellness-700"
          >
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
