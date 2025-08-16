'use client';

import React from 'react';
import { CTAItem } from '@/components/common';

const MarketplaceCTASection = () => {
  return (
    <section className="relative py-50 px-4 bg-gradient-to-r from-[#1E84B2] to-[#004666] -mt-40" style={{
      zIndex: -1
    }} >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* First CTA - Sign Up */}
        <CTAItem
          title="Providing you with a one stop shop for financial audits"
          description={[
            "Have your business audited the way you like it,",
            "with many options and from home."
          ]}
          buttonText="Sign Up"
          buttonColor="orange"
          onButtonClick={() => {
            // Handle sign up action
            console.log('Sign Up clicked');
          }}
        />

        {/* Second CTA - Learn More */}
        <CTAItem
          title="Know someone else that needs a financial audit?"
          description={[
            "Refer him with your personal link and get paid",
            "for his first complete audit."
          ]}
          buttonText="Learn More"
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

export default MarketplaceCTASection; 