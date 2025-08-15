import React from 'react';

interface FeatureTagsProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
}

const FeatureTags: React.FC<FeatureTagsProps> = ({ 
  tags, 
  className = "",
  tagClassName = "bg-white px-3 py-2 rounded text-gray-600 border border-gray-200"
}) => {
  return (
    <div className={`flex items-center space-x-3 text-xs ${className}`}>
      {tags.map((tag, index) => (
        <span key={index} className={tagClassName}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default FeatureTags;