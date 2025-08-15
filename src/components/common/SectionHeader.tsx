import Image from 'next/image';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  logoSrc,
  logoAlt = "Logo",
  logoWidth = 140,
  logoHeight = 35,
  titleClassName = "text-4xl lg:text-5xl font-bold text-gray-800 leading-tight",
  subtitleClassName = "text-gray-600 text-lg",
  containerClassName = "space-y-6"
}) => {
  return (
    <div className={containerClassName}>
      <h2 className={titleClassName}>
        {title}
      </h2>
      
      {subtitle && logoSrc && (
        <div className="flex items-center space-x-3">
          <span className={subtitleClassName}>{subtitle}</span>
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="h-8 w-auto"
          />
          <span className={`${subtitleClassName} mt-2`} style={{ display: 'block' }}>
            Audit Automation Software
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;