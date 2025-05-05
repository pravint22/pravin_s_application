import React from 'react';


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-[#4a2424] to-transparent pt-24 pb-8">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/images/img_image_1044x1920.png" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-tr from-[#2e1c1c] to-[#191919] rounded-lg p-16 mb-16">
          <h2 className="text-4xl font-semibold text-white text-center mb-4">Subscribe Our Newsletter</h2>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
          
          <div className="flex flex-col md:flex-row max-w-2xl mx-auto bg-white rounded-lg overflow-hidden">
            <input 
              type="email" placeholder="Enter your email address" className="flex-grow p-5 outline-none text-gray-600"
            />
            <button className="bg-red-500 text-white px-8 py-4 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/images/img_logo2xpng.png" alt="Redlight Logo" className="h-10 mb-6" />
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elitsed do eiusmod tempororem ipsum dolor sit am
              econsect ametconsectetetur adipiscing.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/images/img_vector.svg" alt="Social" className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/images/img_vector_13x13.svg" alt="Social" className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/images/img_vector_1.svg" alt="Social" className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/images/img_vector_2.svg" alt="Social" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Security Training</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Cloud Security</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Secure Managed IT</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Data Privacy</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Industry Certified</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Threat Intelligence</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-6">Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Support</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Knowledge Base</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
              <li className="flex items-center">
                <img src="/images/img_svg_16x16.svg" alt="Arrow" className="mr-2" />
                <a href="#" className="text-gray-400 hover:text-white">Partnerships</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-400 mb-6">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="text-red-500 font-semibold">Email: info@redlight.com</li>
              <li className="text-red-500 font-semibold">Phone: +1 234 567 89 0 0</li>
              <li className="text-red-500 font-semibold">Fax: +1 ( 987 ) 654 321 9 9</li>
              <li className="text-red-500 font-semibold">
                Address: King Street Melbourne,<br />
                3000, Australia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-400">
          <p>Copyright © Redlight 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;