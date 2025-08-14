import Image from 'next/image';
import assets from '@/data/assets';

const RetailHospitalitySection = () => {
  return (
    <section className="py-20 px-4 flex items-center justify-center min-h-[400px]">
      <div className="container mx-auto flex items-center justify-center">
        {/* Background Container with specified dimensions and radius */}
        <div 
          style={{ backgroundColor: '#E8840C' }} 
          className="max-w-[1440px] h-[271px] mx-auto rounded-lg px-12 flex items-center justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-3xl lg:text-3xl font-bold mb-4 leading-tight">
                Retail, Hospitality & Service Companies
              </h2>
              <p className="text-base mb-6 leading-relaxed opacity-90">
                From restaurants to salons to multi-location shops, online, 
                retail and any business or service, we connect you with 
                auditors who understand seasonal sales, staff turnover, and 
                inventory-heavy operations. Your business isn&apos;t standard, 
                and your audit shouldn&apos;t be either.
              </p>
              <button 
                className="inline-flex items-center gap-3 bg-white font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 w-fit"
                style={{ color: '#E8840C' }}
              >
                Learn More
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#E8840C" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative flex items-center justify-center">
                <Image
                  src={assets.EcommerceHospitalityAuditImagePng}
                  alt="Retail, Hospitality & Service Companies Audit"
                  width={400}
                  height={250}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailHospitalitySection;