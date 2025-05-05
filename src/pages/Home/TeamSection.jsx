import React from 'react';

const TeamMember = ({ image, name, position, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto rounded-lg mb-6"
      />
      
      <h3 className="text-2xl font-semibold text-gray-400 mb-1">{name}</h3>
      <p className="text-base text-gray-400 mb-4">{position}</p>
      
      <p className="text-base text-gray-400 text-center mb-6">{description}</p>
      
      <div className="flex space-x-4">
        <a href="#" className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
          <img src="/images/img_vector.svg" alt="Social" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
          <img src="/images/img_vector_13x13.svg" alt="Social" className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
          <img src="/images/img_vector_1.svg" alt="Social" className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      image: "/images/img_aboutteamimg1jpg.png",
      name: "Eric T. Parker",
      position: "Network Security",
      description: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu."
    },
    {
      image: "/images/img_aboutteamimg2jpg.png",
      name: "Shira Rubinoff",
      position: "Security Executive",
      description: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu."
    },
    {
      image: "/images/img_aboutteamimg3jpg.png",
      name: "Steve Morgan",
      position: "Security Technologist",
      description: "Lonec pede justo, fringilla vel, aliquet nec vulputate eget arcu."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/images/img_image_899x1920.png" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Our Professional Team</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;