import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#4a2424] to-[#202020] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Cyber Security Solutions for</h3>
            <h1 className="text-5xl font-semibold text-white leading-tight mb-6">
              Organizations with<br />Critical Infrastructure
            </h1>
            <p className="text-xl text-white mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="#" className="bg-red-500 text-white px-8 py-4 rounded inline-block font-semibold"
              >
                Discover More
              </Link>
              
              <Link 
                to="#" className="border border-white text-white px-4 py-4 rounded inline-block"
              >
                <img src="/images/img_container.png" alt="Play" className="w-5 h-5" />
              </Link>
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
            <img 
              src="/images/img_bannerimgpng.png" alt="Cyber Security" className="w-full h-auto object-contain z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;