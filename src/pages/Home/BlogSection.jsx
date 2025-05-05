import React from 'react';

const BlogCard = ({ image, title, excerpt }) => {
  return (
    <div className="bg-gray-900 rounded-lg border-3 border-gray-900 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-400 text-center mb-4">{title}</h3>
        <p className="text-sm text-gray-400 text-center">{excerpt}</p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      image: "/images/img_figure_01300x180jpg.png",
      title: "Protect Your Workplace From Cyber Attacks",
      excerpt: "In an era where technology plays a central role in business operations, the threat of cyber attacks"
    },
    {
      image: "/images/img_figure_02300x180jpg.png",
      title: "The Security Risks Of Changing Package Owners",
      excerpt: "In the dynamic landscape of software development, collaboration and code-sharing are common practice"
    },
    {
      image: "/images/img_figure_03300x180jpg.png",
      title: "Avoid Mistakes In Social Media Posts",
      excerpt: "Social media has become an integral part of our daily lives, providing a platform for individuals an"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Latest News & Blog</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;