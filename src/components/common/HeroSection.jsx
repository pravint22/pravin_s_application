import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  backgroundImage,
  foregroundImage
}) => {
  return (
    <section className="relative bg-gradient-to-r from-[#4a2424] to-[#202020] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{subtitle}</h3>
            <h1 className="text-5xl font-semibold text-white leading-tight mb-6">{title}</h1>
            <p className="text-xl text-white mb-8">{description}</p>
            
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && (
                <Link 
                  to={primaryButtonLink || "#"} 
                  className="bg-red-500 text-white px-8 py-4 rounded inline-block font-semibold"
                >
                  {primaryButtonText}
                </Link>
              )}
              
              {secondaryButtonText && (
                <Link 
                  to={secondaryButtonLink || "#"} 
                  className="border border-white text-white px-4 py-4 rounded inline-block"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
            
            <div className="flex items-center mt-16 space-x-4">
              <div className="w-12 h-1 bg-gray-600"></div>
              <Link to="#" className="p-2">
                <img src="/images/img_link.svg" alt="Social Link" className="w-8 h-8" />
              </Link>
              <Link to="#" className="p-2">
                <img src="/images/img_link_32x32.svg" alt="Social Link" className="w-8 h-8" />
              </Link>
              <Link to="#" className="p-2">
                <img src="/images/img_link_1.svg" alt="Social Link" className="w-8 h-8" />
              </Link>
              <Link to="#" className="p-2">
                <img src="/images/img_link_2.svg" alt="Social Link" className="w-8 h-8" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {foregroundImage && (
              <img 
                src={foregroundImage} 
                alt="Hero" className="w-full h-auto object-contain z-10 relative"
              />
            )}
          </div>
        </div>
      </div>
      
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;