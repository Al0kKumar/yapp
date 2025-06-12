
import React from 'react';

interface YappLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const YappLogo: React.FC<YappLogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg`}>
        <span className={`${textSizes[size]} font-bold text-white`}>Y</span>
      </div>
    </div>
  );
};

export default YappLogo;
