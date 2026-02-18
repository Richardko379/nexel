import React from 'react';

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-8", 
  showIcon = true, 
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showIcon && (
        <img
          src="https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404884/ChatGPT_Image_6._2._2026_18_14_34_g8spha.png"
          alt="Nexel Icon"
          className="h-full w-auto object-contain"
        />
      )}
      
      {showText && (
        <span className="font-medium text-2xl tracking-[0.2em] text-white uppercase font-sans">
          NEXEL
        </span>
      )}
    </div>
  );
};