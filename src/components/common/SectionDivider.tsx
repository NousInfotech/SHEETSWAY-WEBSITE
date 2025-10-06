import Image from 'next/image';

interface SectionDividerProps {
  imageSrc: string;
  alt?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  imageSrc, 
  alt = "", 
  position = 'top',
  className = "" 
}) => {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';
  
  return (
    <div className={`absolute ${positionClass} left-0 w-full z-0 ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={1920}
        height={100}
        className="w-full h-auto"
      />
    </div>
  );
};

export default SectionDivider;