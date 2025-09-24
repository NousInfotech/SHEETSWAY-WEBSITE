import Image from "next/image";
import assets from "@/data/assets";

const AuditNeedsSection = () => {
  const auditNeeds = [
    {
      icon: assets.FreelancerFinancialAuditMalePng,
      title: "Freelancers & Micro Businesses",
      description:
        "In some cases, even small entities need audits. We'll guide you throughwhat's required and match you with a cost-effective solution.",
    },
    {
      icon: assets.OnlineAuditSmallBusinessPng,
      title: "Small Businesses",
      description:
        "Need an annual financial audit for compliance? We make it easy, fast, and affordable to get started.",
    },
    {
      icon: assets.MediumLargeCompanyAuditIconPng,
      title: "Medium & Large Companies",
      description:
        "Get matched with the right auditor to meet your regulatory or board-level financial audit requirements.",
    },
    {
      icon: assets.InternationalAuditGlobeIconPng,
      title: "International Entities with Local Obligations",
      description:
        "If you operate in Europe and need a country-specific financial audit, we'll connect you with local licensed providers.",
    },
    {
      icon: assets.FinancialAuditBacklogLateFilingPng,
      title: "Backlogged or Late Filings",
      description:
        "Fell behind on last year's audit? We'll help you catch up quickly and professionally.",
    },
  ];

  return (
    <section
      className="/* Your current class already has rounded-t- which affects both sides equally */
py-0 px-3 -mt-32 bg-white relative rounded-t-[30px] md:py-9 md:px-4 md:-mt-36 md:rounded-t-[50px] lg:py-10 lg:px-6 lg:-mt-45 lg:rounded-t-[50px] xl:py-12 xl:px-8 xl:-mt-48 xl:rounded-t-[50px]"
      style={{
        zIndex: 10,
      }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 lg:mb-4 xl:mb-6 mt-10"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Do You Need an Audit?
          </h2>
          <p
            className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-4"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            If you&apos;re asking the question, we&apos;ve probably got the
            answer.
          </p>
        </div>

        {/* Mobile: Single column layout, Desktop: Grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {auditNeeds.map((item, index) => (
              <div key={index} className="text-left mb-8 lg:mb-0">
                {/* Simple line-art illustration */}
                <div className="flex justify-start mb-4 lg:mb-6 xl:mb-8">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Orange heading */}
                <h3
                  className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 lg:mb-3 xl:mb-4 leading-tight text-left"
                  style={{ color: "#E8840C", fontFamily: "Nunito, sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Grey body text */}
                <p
                  className="text-sm lg:text-sm xl:text-base 2xl:text-lg text-gray-600 leading-relaxed text-left"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
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