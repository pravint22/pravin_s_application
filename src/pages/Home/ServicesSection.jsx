import React from 'react';
import Card from '../../components/common/Card';

const ServicesSection = () => {
  const services = [
    {
      icon: "/images/img_figure_aboutsection2icon1png.png",
      title: "Threat Intelligence",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutsection2icon2png.png",
      title: "Security Assessment",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutsection2icon3png.png",
      title: "Compromise Assessment",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutsection2icon4png.png",
      title: "Incident Response",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutsection2icon6png.png",
      title: "CLoud Security",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    },
    {
      icon: "/images/img_figure_aboutroundicon1png.png",
      title: "Security Training",
      description: "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/images/img_image_967x1920.png" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">What We Offer</h2>
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

export default ServicesSection;