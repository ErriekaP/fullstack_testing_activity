import React from 'react';

const TextInput = ({ value, onChange, placeholder,type}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="border rounded p-2 m-2"
    />
  );
};

export default TextInput;