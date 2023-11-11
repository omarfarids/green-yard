import React from "react";

const TextInput = ({ label, placeholder, className = "" }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label?.toLowerCase()} className="font-bold">
        {label}
      </label>
      <input
        type="text"
        id={label?.toLowerCase()}
        name={label?.toLowerCase()}
        placeholder={placeholder}
        className={`w-full p-2 border rounded-lg border-gray ${className}`}
      />
    </div>
  );
};

export default TextInput;
