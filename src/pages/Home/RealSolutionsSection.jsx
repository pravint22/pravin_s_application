import React from 'react';
import { Link } from 'react-router-dom';

const RealSolutionsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-white leading-tight mb-6">
              Providing Best Cyber<br />Security Solutions
            </h2>
            
            <p className="text-lg text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo
              doligula eget dolorenean massa.In enim justo, rhoncus ut, imperdiet
              avene natis vitae justo nullam dictum felis eu pede mollis pretium Inte
              ger tincid unt cras dapibus
            </p>
            
            <p className="text-lg text-gray-400 mb-8">
              Vamus elementum semper nisi aenean vulputate eleife nd tellus onsec
              tet ueradip.
            </p>
            
            <Link 
              to="/contact" className="inline-block bg-gray-800 text-white border border-gray-600 px-10 py-3 rounded font-semibold"
            >
              Contact Us
            </Link>
          </div>
          
          <div>
            <img 
              src="/images/img_cybersecurityrightimgpng.png" alt="Cyber Security" className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealSolutionsSection;