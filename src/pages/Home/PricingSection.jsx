import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ icon, title, price, period, features, buttonText }) => {
  return (
    <div className="bg-gray-900 rounded-md p-12">
      <div className="bg-gray-800 rounded-md p-6 inline-flex items-center justify-center mb-8">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-400 mb-4">{title}</h3>
      
      <div className="flex items-end mb-8">
        <span className="text-4xl font-semibold text-red-500">{price}</span>
        <span className="text-xl font-semibold text-white ml-2">{period}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-lg text-gray-400">{feature}</li>
        ))}
      </ul>
      
      <Link 
        to="#" className="inline-block bg-gray-900 text-white border border-gray-600 px-8 py-3 rounded font-semibold w-full text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: "/images/img_pricingplanicon1png.png",
      title: "Beginner",
      price: "Free",
      period: "/Month",
      features: [
        "30 Days Product Testing",
        "Upgrade Anytime Protection",
        "500 Malware Removal",
        "24/7 Live Assistance",
        "Scan Every 12 Hrs",
        "Configure Software One-time"
      ],
      buttonText: "Order Now"
    },
    {
      icon: "/images/img_plan2iconpng.png",
      title: "Business",
      price: "$39.99",
      period: "/Month",
      features: [
        "40 Days Product Testing",
        "Upgrade Anytime Protection",
        "1000 Malware Removal",
        "24/7 Live Assistance",
        "Scan Every 13 Hrs",
        "Configure Software One-time"
      ],
      buttonText: "Order Now"
    },
    {
      icon: "/images/img_pricingplanicon3png.png",
      title: "Exclusive",
      price: "$47.85",
      period: "/Month",
      features: [
        "50 Days Product Testing",
        "Upgrade Anytime Protection",
        "Unlimited Malware Removal",
        "24/7 Live Assistance",
        "Scan Every 14 Hrs",
        "Configure Software One-time"
      ],
      buttonText: "Order Now"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Your Pricing Plan</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              icon={plan.icon}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;