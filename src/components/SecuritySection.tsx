import Image from 'next/image';
import assets from '@/data/assets';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: assets.Spy15449010Png,
      title: "Anonymous Audit Listings by Default",
    },
    {
      icon: assets.Padlock3055777Png,
      title: "GDPR-Compliant File Storage & Control",
    },
    {
      icon: assets.Lock12606778Png,
      title: "End-to-End Encryption on all data",
    },
    {
      icon: assets.LegalSystem11421946Png,
      title: "Keep Track of Every File Change",
    },
  ];

  return (
    <section 
      className="relative w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-50 2xl:-mt-50 mb-15 lg:mb-10 xl:mb-20 2xl:mb-20 pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36 lg:py-20 xl:py-28 2xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-center overflow-hidden security-section-bg min-h-[700px] sm:min-h-[800px] md:min-h-[850px] lg:min-h-[auto]"
      style={{
        backgroundImage: `url(${assets.CtaBg1Png})`,
        backgroundColor: '#0370A0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 w-full">
          {/* Left Content with Logo */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start flex-1 lg:max-w-lg xl:max-w-xl">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 2xl:mb-10">
              <Image
                src={assets.SheetSwayFinalLogoWhite2Png}
                alt="SheetSway Logo"
                width={214}
                height={50}
                className="h-6 w-auto sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-10 object-contain"
              />
              <div className="text-white flex items-end" style={{marginTop: '1.5rem'}}>
                <span className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-medium -ml-1">Audit Place</span>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-6 2xl:mb-8">
                <span className="text-orange-400">Your Security,</span>
                <br />
                <span className="text-white">Taken Seriously</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-gray-200 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-8 xl:mb-10 2xl:mb-12 mx-auto lg:mx-0">
                We protect your audit data like it&apos;s our own,<br className="hidden sm:block"/>
                from your first upload to final report.
              </p>
            </div>
            
            <button className="bg-white text-orange-500 px-6 sm:px-8 md:px-10 lg:px-10 xl:px-12 2xl:px-14 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-5 2xl:py-6 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 w-fit">
              Learn More
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Security Features Card */}
          <div className="relative flex justify-center w-full lg:flex-1">
            {/* Orange Border Container */}
             <div 
              className="rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl border-2 border-orange-400
                p-1 xs:p-1 sm:p-1.5 md:p-2 lg:p-1.5 xl:p-2 2xl:p-2.5 
                w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[550px]">
              {/* Inner Card */}
              <div 
                className="rounded-xl sm:rounded-2xl w-full px-4 sm:px-6 md:px-8 lg:px-6 xl:px-8 2xl:px-10 py-6 sm:py-7 md:py-4 lg:py-4 xl:py- 2xl:py-10"
                style={{
                  backgroundColor: '#0370A0',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-7">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={28}
                          height={28}
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain"
                        />
                      </div>
                      <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-medium leading-tight flex-1">
                        {feature.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;