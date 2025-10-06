'use client';

import { CTAItem } from '@/components/common';

const CTASection = () => {
  return (
    <section className="relative pt-8 md:pt-10 lg:pt-20 pb-10 px-4 bg-gradient-to-r from-[#1E84B2] to-[#004666]" style={{
      zIndex: -1
    }}>
      <div className="max-w-7xl mx-auto space-y-12 w-full flex flex-col justify-center min-h-[200px]">
        {/* First CTA - Sign Up */}
        <CTAItem
          title=" Earn with Every Referral"
          description={[
            "Share your unique link, refer businesses needing audits, ",
            "and earn commission once their first audit is",
            "completed."
          ]}
          buttonText="Join now"
          buttonColor="orange"
          onButtonClick={() => {
            // Handle sign up action
            console.log('Sign Up clicked');
          }}
        />
        
        {/* Second CTA - Learn More */}
        <CTAItem
          title=" Already Know Firms or Businesses?"
          description={[
            "Turn your network into income by connecting them to Sheetway.",
            "No audit work required, just referrals."
          ]}
          buttonText="How It Works"
          buttonColor="purple"
          onButtonClick={() => {
            // Handle learn more action
            console.log('Learn More clicked');
          }}
        />
      </div>
    </section>
  );
};

export default CTASection;