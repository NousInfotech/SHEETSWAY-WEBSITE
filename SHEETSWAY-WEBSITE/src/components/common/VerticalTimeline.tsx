import React from 'react';

interface TimelineItem {
  id: string;
  title: string;
  content?: React.ReactNode;
  isActive: boolean;
  color?: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
  activeColor?: string;
  inactiveColor?: string;
  activeLineHeight?: string;
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  items,
  activeColor = '#E8840C',
  inactiveColor = '#d1d5db',
  activeLineHeight = '12rem'
}) => {
  return (
    <div className="relative space-y-8">
      {/* Vertical Line Container */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col">
        {/* Active (Orange) Line */}
        <div 
          className="w-1" 
          style={{ 
            backgroundColor: activeColor,
            height: activeLineHeight
          }}
        ></div>
        {/* Inactive (Gray) Line */}
        <div 
          className="w-1 flex-1" 
          style={{ backgroundColor: inactiveColor }}
        ></div>
      </div>

      {/* Timeline Items */}
      {items.map((item) => (
        <div key={item.id} className="pl-8">
          {item.isActive ? (
            <div className="space-y-4">
              <h3 
                className="text-2xl font-bold" 
                style={{ color: item.color || activeColor }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          ) : (
            <h3 className="text-2xl font-semibold text-gray-400">
              {item.title}
            </h3>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;