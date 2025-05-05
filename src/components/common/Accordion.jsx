import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <div 
        className="bg-gray-900 rounded-lg p-5 flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold text-gray-400">{title}</h3>
        <img 
          src="/images/img_svg.svg" alt={isOpen ?"Collapse" : "Expand"} 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      
      {isOpen && (
        <div className="bg-gray-900 rounded-b-lg p-5 mt-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;