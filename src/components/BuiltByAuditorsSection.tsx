import Image from 'next/image';
import assets from '@/data/assets';
import { SectionDivider, SectionHeader, VerticalTimeline, FeatureTags, LearnMoreButton } from './common';

const BuiltByAuditorsSection = () => {
  // Timeline data
  const timelineItems = [
    {
      id: 'industry-expert-ai',
      title: 'Industry Expert AI',
      isActive: true,
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-gray-700 max-w-lg">
            <p className="font-semibold text-lg">
              Audit planning fully tailored to any industry.
            </p>
            <p className="text-sm leading-relaxed">
              Sheetsway automatically classifies accounts, creates the right fieldwork, and prepares formal conclusions using every piece of data in the software.
            </p>
          </div>
          <FeatureTags tags={['One Click', 'Structured', 'Export AI']} />
        </div>
      )
    },
    {
      id: 'automatic-fs-mapping',
      title: 'Automatic FS Mapping',
      isActive: false
    },
    {
      id: 'ai-driven-answers',
      title: 'AI Driven Answers',
      isActive: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <SectionDivider 
        imageSrc={assets.Rectangle2MarketplacePng}
        position="top"
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <SectionHeader 
              title="Built by Auditors,"
              subtitle="Backed by"
              logoSrc={assets.LogoPng}
              logoAlt="SheetSway"
            />

            <div className="relative">
              <VerticalTimeline 
                items={timelineItems}
                activeColor="#E8840C"
                inactiveColor="#d1d5db"
                activeLineHeight="13rem"
              />
              
              {/* Learn More Button */}
              <div className="pl-8 pt-4">
                <LearnMoreButton 
                  text="Learn More"
                  icon="→"
                  variant="outlined"
                  color="#E8840C"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-2xl mx-auto">
              {/* Image Container */}
              <div className="relative p-5">
                {/* Image */}
                <div className="relative z-10">
                  <Image
                    src={assets.NineAt4xMarketplacePng}
                    alt="Built by Auditors Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl rounded-2xl"
                  />
                </div>
                
                {/* Border Overlay */}
                <div className="absolute inset-0 z-20">
                  <Image
                    src="/Marketplace auditor page/PNG/border.png"
                    alt="Border Overlay"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltByAuditorsSection;