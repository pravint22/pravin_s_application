import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white text-center mb-12">
          Trusted Over 2300+ Companies in the World
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-16">
          <img src="/images/img_companiesicon1png.png" alt="Company Logo" className="h-10 object-contain" />
          <img src="/images/img_companiesicon2png.png" alt="Company Logo" className="h-10 object-contain" />
          <img src="/images/img_companiesicon3png.png" alt="Company Logo" className="h-12 object-contain" />
          <img src="/images/img_companiesicon4png.png" alt="Company Logo" className="h-10 object-contain" />
          <img src="/images/img_companiesicon5png.png" alt="Company Logo" className="h-6 object-contain" />
          <img src="/images/img_companiesicon6png.png" alt="Company Logo" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;