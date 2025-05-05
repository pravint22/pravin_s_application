import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  onClose,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded';
  
  const variants = {
    default: 'bg-gray-800 text-white',
    primary: 'bg-red-500 text-white',
    secondary: 'bg-gray-700 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    danger: 'bg-red-600 text-white',
    outline: 'bg-transparent border border-gray-600 text-gray-300',
  };
  
  const sizes = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  };
  
  const tagClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;
  
  return (
    <span className={tagClasses} {...props}>
      {children}
      
      {onClose && (
        <button
          type="button" className="ml-2 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"
          >
            <path
              fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'outline',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Tag;