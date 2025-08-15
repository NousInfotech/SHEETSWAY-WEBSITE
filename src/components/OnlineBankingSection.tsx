import Image from 'next/image';
import assets from '@/data/assets';

const OnlineBankingSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Image - Left Top Corner */}
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={assets.TwoAt4xPng}
          alt=""
          width={400}
          height={400}
          className="opacity-80"
          priority
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-20">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                We can also connect directly to your{' '}
                <span style={{ color: '#E8840C' }}>Online Banking</span>
              </h2>
              
              {/* Powered by Saltedge */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Powered by</span>
                <Image
                  src={assets.SaltedgePng}
                  alt="Saltedge"
                  width={120}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>

              {/* CTA Button */}
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#E8840C' }}
              >
                No Chasing Documents. No Uploads. Just One Login.
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src={assets.Mess1Png}
                    alt="No more digging through PDFs"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    No more digging through PDFs
                  </h3>
                  <p className="text-gray-600">
                    We can grab your statements for you.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src={assets.Upload3Png}
                    alt="Upload nothing, explain nothing"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Upload nothing, explain nothing
                  </h3>
                  <p className="text-gray-600">
                    Your transactions speak for themselves.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src={assets.User4Png}
                    alt="Bank-Level Security, Built In"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Bank-Level Security, Built In
                  </h3>
                  <p className="text-gray-600">
                    Trusted APIs used by top fintech companies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            {/* Phone Mockup */}
            <div className="max-w-6xl mx-auto lg:-ml-60">
              <Image
                src={assets.ImagePng}
                alt="Banking Interface Mockup"
                width={2400}
                height={4320}
                className="w-full h-auto drop-shadow-2xl mt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineBankingSection;