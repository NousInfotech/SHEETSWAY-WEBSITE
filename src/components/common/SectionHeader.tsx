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
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <span className={subtitleClassName}>{subtitle}</span>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="h-[20px] w-[100px]"
            />
            <span className={`${subtitleClassName} sm:mt-2`}>
              Audit Automation Software
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;