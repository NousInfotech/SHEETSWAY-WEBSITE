import Image from 'next/image';
import assets from '@/data/assets';

const AuditNeedsSection = () => {
  const auditNeeds = [
    {
      icon: assets.FreelancerFinancialAuditMalePng,
      title: "Freelancers & Micro Businesses",
              description: "In some countries, even small entities need audits. We&apos;ll guide you through what&apos;s required and match you with a cost-effective solution."
    },
    {
      icon: assets.OnlineAuditSmallBusinessPng,
      title: "Small Businesses",
      description: "Need an annual financial audit for compliance? We make it easy, fast, and affordable to get started."
    },
    {
      icon: assets.MediumLargeCompanyAuditIconPng,
      title: "Medium & Large Companies",
      description: "Get matched with the right auditor to meet your regulatory or investor financial audit requirements."
    },
    {
      icon: assets.InternationalAuditGlobeIconPng,
      title: "International Entities with Local Obligations",
              description: "If you operate in Europe and need a country-specific financial audit, we&apos;ll connect you with local licensed providers."
    },
    {
      icon: assets.FinancialAuditBacklogLateFilingPng,
      title: "Backlogged or Late Filings",
              description: "Fell behind on last year&apos;s audit? We&apos;ll help you catch up quickly and professionally."
    }
  ];

  return (
    <section className="py-20 px-4 -mt-35 bg-white relative rounded-t-[50px] lg:rounded-t-[150px]" style={{
      zIndex: 10,
    }}> 
    
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Do You Need an Audit?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            If you&apos;re asking the question, we&apos;ve probably got the answer.
          </p>
        </div>

        {/* Mobile: Single column layout, Desktop: Grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {auditNeeds.map((item, index) => (
              <div 
                key={index}
                className="text-left mb-8 lg:mb-0"
              >
                {/* Simple line-art illustration */}
                <div className="flex justify-start mb-4 lg:mb-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Orange heading */}
                <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 leading-tight text-left" style={{ color: '#E8840C', fontFamily: 'Nunito, sans-serif' }}>
                  {item.title}
                </h3>

                {/* Grey body text */}
                <p className="text-sm lg:text-sm text-gray-600 leading-relaxed text-left" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditNeedsSection;