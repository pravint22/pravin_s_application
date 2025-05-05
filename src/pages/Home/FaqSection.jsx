import React from 'react';
import Accordion from '../../components/common/Accordion';

const FaqSection = () => {
  const faqItems = [
    {
      title: "How Can I Safely Browse The Internet?",
      content: (
        <p className="text-gray-400">
          To browse the internet safely, use updated browsers, enable automatic updates, 
          use strong passwords, be cautious with downloads, avoid suspicious links, 
          and consider using a VPN for additional security.
        </p>
      )
    },
    {
      title: "How Does Secuvant\'s Co-managed Security Model Work?",
      content: (
        <p className="text-gray-400">
          Our co-managed security model combines your internal IT resources with our 
          specialized security expertise. We work alongside your team, providing 24/7 
          monitoring, threat detection, and response capabilities while you maintain 
          control of your systems.
        </p>
      )
    },
    {
      title: "What Type Frequency Of Alerts And Notifications Will Receive?",
      content: (
        <p className="text-gray-400">
          You'll receive real-time critical alerts for immediate threats, daily summaries 
          of security events, weekly trend reports, and monthly comprehensive security 
          assessments. Alert frequency can be customized based on your preferences.
        </p>
      )
    },
    {
      title: "How Is Our Data Stored And Protected And For How Long?",
      content: (
        <p className="text-gray-400">
          Your data is stored in encrypted, SOC 2 compliant facilities with multi-factor 
          authentication. We implement data minimization principles, retaining information 
          only as long as necessary per compliance requirements and your data retention policies.
        </p>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/img_accordianleftimgpng.png" alt="FAQ" className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-semibold text-white leading-tight mb-8">
              General Questions<br />
              Frequently Asked<br />
              Questions?
            </h2>
            
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;