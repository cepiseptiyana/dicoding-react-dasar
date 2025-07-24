import React from "react";

function Input(props) {
  const { type, text, placeholder, className, name, id, onChange } = props;

  return (
    <input
      onChange={onChange}
      id={id}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
    >
      {text}
    </input>
  );
}

export default Input;
