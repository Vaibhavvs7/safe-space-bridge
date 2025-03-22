
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroIconProps {
  children: React.ReactNode;
  className?: string;
}

const HeroIcon: React.FC<HeroIconProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'w-12 h-12 flex items-center justify-center rounded-full bg-wellness-50 text-wellness-700',
      className
    )}>
      {children}
    </div>
  );
};

export default HeroIcon;
