
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role,
  className
}) => {
  return (
    <div className={cn(
      'glass-effect p-6 flex flex-col h-full',
      className
    )}>
      <div className="mb-4 text-wellness-700">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3 5.8C9.8 6.6 8.8 8.1 8.8 10.3C8.8 10.5 8.8 10.7 8.9 11H10.6C11 11 11.3 11.3 11.3 11.7C11.3 11.9 11.2 12 11.1 12.1L7.8 16.2C7.6 16.4 7.3 16.5 7 16.5C6.9 16.5 6.8 16.4 6.7 16.4C6.3 16.3 6 15.9 6 15.5V15C6 11.1 8.2 8.1 10.8 6.5C11.2 6.3 11.7 6.4 11.9 6.8C12.1 7.2 12 7.6 11.6 7.8H11.7C11.5 7.8 11.3 7.8 11.3 5.8ZM19.3 5.8C17.8 6.6 16.8 8.1 16.8 10.3C16.8 10.5 16.8 10.7 16.9 11H18.6C19 11 19.3 11.3 19.3 11.7C19.3 11.9 19.2 12 19.1 12.1L15.8 16.2C15.6 16.4 15.3 16.5 15 16.5C14.9 16.5 14.8 16.4 14.7 16.4C14.3 16.3 14 15.9 14 15.5V15C14 11.1 16.2 8.1 18.8 6.5C19.2 6.3 19.7 6.4 19.9 6.8C20.1 7.2 20 7.6 19.6 7.8H19.7C19.5 7.8 19.3 7.8 19.3 5.8Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="italic text-gray-700 mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
