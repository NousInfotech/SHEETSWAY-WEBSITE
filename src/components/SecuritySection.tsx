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
      className="relative min-h-screen -mt-40 py-20 px-4 flex items-center justify-center overflow-hidden security-section-bg pt-50 pb-50 lg:pt-20 lg:pb-20"
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
        <div className="flex items-center gap-3 mb-16">
          <Image
            src={assets.SheetSwayFinalLogoWhite2Png}
            alt="SheetSway Logo"
            width={214}
            height={50}
            className="h-8 sm:h-12 w-auto object-contain"
          />
          <div className="text-white flex items-end" style={{marginTop: '1.5rem'}}>
            <span className="text-base sm:text-lg font-medium -ml-1">Audit Place</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-400">Your Security,</span>
                <br />
                <span className="text-white">Taken Seriously</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-lg">
                We protect your audit data like it&apos;s our own, 
                from your first upload to final report.
              </p>
            </div>
            
            <button className="bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-fit">
              Learn More
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
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
          <div className="relative mt-8 lg:mt-0">
            <div 
              className="rounded-3xl border-2 border-orange-400 w-full px-5 sm:px-6 py-4"
              style={{
                backgroundColor: '#0370A0',
                maxWidth: '494px',
                borderRadius: '30px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="flex flex-col gap-3 sm:gap-2.5">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    <h3 className="text-white text-base sm:text-lg font-medium leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;