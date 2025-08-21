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
      className="relative min-h-screen w-full -mt-20 sm:-mt-25 md:-mt-20 lg:-mt-70 xl:-mt-70 2xl:-mt-70 mb-15 lg:mb-10 xl:mb-10 2xl:mb-0 py-16 sm:py-20 md:py-24 lg:py-20 xl:py-30 2xl:py-40 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-center overflow-hidden security-section-bg"
      style={{
        backgroundImage: `url(${assets.CtaBg1Png})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 mb-12 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20">
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-8 2xl:space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-6 2xl:mb-8">
                <span className="text-orange-400">Your Security,</span>
                <br />
                <span className="text-white">Taken Seriously</span>
              </h2>
              <p className="text-sm sm:text-base md:text-sm lg:text-md xl:text-xl 2xl:text-xl text-gray-200 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                We protect your audit data like it&apos;s our own, <br/>
                from your first upload to final report.
              </p>
            </div>
            
            <button className="bg-white text-orange-500 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-fit">
              Learn More
              <svg 
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" 
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

          {/* Right Content - Security Features */}
          <div className="relative mt-6 sm:mt-8 md:mt-8 lg:mt-0 mb-10 sm:mb-12 md:mb-16 lg:mb-0">
            {/* Orange Border Container with padding to separate from card */}
            <div 
              className="rounded-2xl sm:rounded-3xl border-2 border-orange-400 w-full p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 2xl:p-6"
              style={{
                maxWidth: '520px',
                borderRadius: '50px',
              }}
            >
              {/* Inner Card with space from border */}
              <div 
                className="rounded-xl sm:rounded-2xl w-full px-4 sm:px-5 md:px-6 lg:px-5 xl:px-6 2xl:px-8 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-5 2xl:py-6"
                style={{
                  backgroundColor: '#0370A0',
                  borderRadius: '40px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-8">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={24}
                          height={24}
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 object-contain"
                        />
                      </div>
                      <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg font-medium leading-tight">
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