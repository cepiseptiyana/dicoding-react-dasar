import React from "react";

function Textarea(props) {
  const { text, className, placeholder, name, onChange } = props;

  return (
    <textarea
      onChange={onChange}
      name={name}
      className={className}
      placeholder={placeholder}
    >
      {text}
    </textarea>
  );
}

export default Textarea;
