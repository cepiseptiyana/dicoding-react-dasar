import React from "react";

function Button(props) {
  const { text, className, type, onClick } = props;

  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
}

export default Button;
