import Image from 'next/image';
import assets from '@/data/assets';

const AuditNeedsSection = () => {
  const auditNeeds = [
    {
      icon: assets.FreelancerFinancialAuditMalePng,
      title: "Freelancers & Micro Businesses",
      description: "In some countries, even small entities need audits. We'll guide you through what's required and match you with a cost-effective solution."
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
      description: "If you operate in Europe and need a country-specific financial audit, we'll connect you with local licensed providers."
    },
    {
      icon: assets.FinancialAuditBacklogLateFilingPng,
      title: "Backlogged or Late Filings",
      description: "Fell behind on last year's audit? We'll help you catch up quickly and professionally."
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Do You Need an Audit?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you&apos;re asking the question, we&apos;ve probably got the answer.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First 3 cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
            {auditNeeds.slice(0, 3).map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: '#E8840C' }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
          </div>

          {/* Bottom 2 cards - centered */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl">
              {auditNeeds.slice(3).map((item, index) => (
                <div 
                  key={index + 3}
                  className="bg-white rounded-3xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: '#E8840C' }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditNeedsSection;