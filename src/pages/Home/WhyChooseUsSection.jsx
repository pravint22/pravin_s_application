import React from 'react';
import Card from '../../components/common/Card';

const WhyChooseUsSection = () => {
  const services = [
    {
      icon: "/images/img_figure_aboutroundicon1png.png",
      title: "Security Services",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutroundicon2png.png",
      title: "Data Privacy",
      description: "Lorem ipsum dolor sit ametconsectetuer dipiscing elitaenean commodo ligula eget dolor aenean massa"
    },
    {
      icon: "/images/img_figure_aboutroundicon3png.png",
      title: "Industry Certified",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/images/img_image.png" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor="bg-gray-800" bgColor="bg-gray-900"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;