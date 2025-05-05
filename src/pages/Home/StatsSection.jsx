import React from 'react';

const StatCard = ({ icon, count, suffix, label }) => {
  return (
    <div className="bg-gray-900 rounded-md p-8">
      <div className="bg-gray-800 rounded-md p-4 inline-flex items-center justify-center mb-6">
        <img src={icon} alt={label} className="w-12 h-12 object-contain" />
      </div>
      
      <div className="flex items-center mb-2">
        <h3 className="text-4xl font-bold text-white">{count}</h3>
        {suffix && <span className="text-xl font-bold text-white ml-1">{suffix}</span>}
      </div>
      
      <p className="text-xl font-semibold text-gray-500">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: "/images/img_cybersectionicon1png.png",
      count: "3,325",
      suffix: "+",
      label: "Global Projects"
    },
    {
      icon: "/images/img_cybersectionicon2png.png",
      count: "4,579",
      suffix: "+",
      label: "Clients Protect"
    },
    {
      icon: "/images/img_cybersectionicon3png.png",
      count: "100",
      suffix: "%",
      label: "Service\nGuarantee"
    },
    {
      icon: "/images/img_cybersectionicon4png.png",
      count: "7845",
      suffix: "+",
      label: "Experts Team"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={stat.count}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;