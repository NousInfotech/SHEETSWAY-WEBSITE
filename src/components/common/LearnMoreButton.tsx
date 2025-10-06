import React from 'react';

interface LearnMoreButtonProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
  color?: string;
  variant?: 'default' | 'outlined' | 'text';
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  text = "Learn More",
  icon = "→",
  onClick,
  className = "",
  color = "#E8840C",
  variant = 'outlined'
}) => {
  const getButtonClasses = () => {
    const baseClasses = "font-semibold transition-colors duration-200 flex items-center space-x-2";
    
    switch (variant) {
      case 'outlined':
        return `${baseClasses} px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-orange-300 bg-white ${className}`;
      case 'text':
        return `${baseClasses} hover:opacity-80 ${className}`;
      default:
        return `${baseClasses} px-4 py-2 rounded-lg hover:opacity-90 ${className}`;
    }
  };

  return (
    <button 
      className={getButtonClasses()}
      style={{ color }}
      onClick={onClick}
    >
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default LearnMoreButton;