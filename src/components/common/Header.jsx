import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/img_logo2xpng.png" alt="Redlight Logo" className="h-10" />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-red-500 text-lg font-normal">Home</Link>
          <span className="text-white text-lg">|</span>
          <Link to="/about" className="text-white text-lg font-normal hover:text-red-500 transition-colors">About</Link>
          <span className="text-white text-lg">|</span>
          <Link to="/services" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Services</Link>
          <span className="text-white text-lg">|</span>
          <Link to="/pricing" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Pricing</Link>
          <span className="text-white text-lg">|</span>
          <Link to="/pages" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Pages</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-normal">
            Contact Us
          </Link>
          <Link to="/cart" className="bg-gray-500 bg-opacity-50 p-3 rounded-md">
            <img src="/images/img_carticonpng.png" alt="Cart" className="h-6 w-6" />
          </Link>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-red-500 text-lg font-normal">Home</Link>
              <Link to="/about" className="text-white text-lg font-normal hover:text-red-500 transition-colors">About</Link>
              <Link to="/services" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Services</Link>
              <Link to="/pricing" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Pricing</Link>
              <Link to="/pages" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Pages</Link>
              <Link to="/contact" className="text-white text-lg font-normal hover:text-red-500 transition-colors">Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;