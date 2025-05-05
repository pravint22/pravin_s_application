import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ 
  icon, 
  title, 
  description, 
  linkText = "Learn More", 
  linkUrl = "#",
  className = "",
  iconBgColor = "bg-gray-800",
  titleColor = "text-gray-400",
  descriptionColor = "text-gray-400",
  linkColor = "text-gray-400",
  bgColor = "bg-gray-900"
}) => {
  return (
    <div className={`${bgColor} rounded-md p-8 ${className}`}>
      {icon && (
        <div className={`${iconBgColor} rounded-lg p-4 inline-flex items-center justify-center mb-6`}>
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        </div>
      )}
      
      {title && <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{title}</h3>}
      
      {description && <p className={`${descriptionColor} mb-6 leading-relaxed`}>{description}</p>}
      
      {linkText && (
        <Link to={linkUrl} className={`${linkColor} inline-flex items-center`}>
          {linkText} 
          {linkText.includes("Learn More") && (
            <img src="/images/img_symbol.svg" alt="Arrow" className="ml-2" />
          )}
        </Link>
      )}
    </div>
  );
};

export default Card;