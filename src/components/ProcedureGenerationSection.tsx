import Image from 'next/image';
import assets from '@/data/assets';
import { FeatureTags, LearnMoreButton } from './common';

const ProcedureGenerationSection = () => {
  // Content data for Procedure Generation
  const featureTags = ['Customized', 'Structured', 'Industry Based'];

  return (
         <section className="py-20 px-4 relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <Image
           src={assets.At4x1MarketplacePng}
           alt="Background Pattern"
           fill
           className="object-cover opacity-10"
           priority
         />
       </div>
       
       <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-gray-300"></div>
            
            <div className="pl-8 space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold" style={{ color: '#E8840C' }}>
                  Procedure Generation
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  Give your audit a head start with AI-crafted procedures tailored to your client&apos;s field. Simply press generate, and let our AI unify your current context with best practices to produce a polished, spot-on response every time.
                </p>
                
                {/* Feature Tags */}
                <div className="pt-4">
                  <FeatureTags tags={featureTags} />
                </div>
              </div>
              
              {/* Inactive Features */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-400">
                  Direct Client Sync
                </h3>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-400">
                  AI Chat Bot <span className="text-sm font-normal">[under development]</span>
                </h3>
              </div>
              
              {/* Learn More Button */}
              <div className="pt-4">
                <LearnMoreButton 
                  text="Learn More"
                  icon="→"
                  variant="outlined"
                  color="#E8840C"
                />
              </div>
            </div>
          </div>

          {/* Right Content - AI Interface Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-2xl mx-auto">
                             {/* Image Container */}
               <div className="relative p-5">
                 {/* AI Interface Image */}
                 <div className="relative z-10">
                   <Image
                     src={assets.NineAt4xMarketplacePng}
                     alt="AI Procedure Generation Interface"
                     width={600}
                     height={400}
                     className="w-full h-auto drop-shadow-2xl rounded-2xl"
                   />
                   
                   {/* Border Overlay */}
                   <Image
                     src={assets.BorderMarketplacePng}
                     alt="Border Overlay"
                     width={600}
                     height={600}
                     className="absolute inset-0 w-full h-full object-contain z-20"
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

export default ProcedureGenerationSection; 