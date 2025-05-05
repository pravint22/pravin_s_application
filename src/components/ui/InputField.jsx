import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  errorClassName = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className={`block text-gray-300 mb-2 ${labelClassName}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 bg-gray-800 text-white rounded 
          border ${error ? 'border-red-500' : 'border-gray-700'}
          focus:outline-none focus:ring-2 focus:ring-red-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${inputClassName}
        `}
        {...props}
      />
      
      {error && (
        <p className={`mt-1 text-red-500 text-sm ${errorClassName}`}>
          {error}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
};

export default InputField;