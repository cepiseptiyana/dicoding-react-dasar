import React from "react";

function Button(props) {
  const { text, className, type, onClick, ...rest } = props;

  return (
    <button onClick={onClick} type={type} className={className} {...rest}>
      {text}
    </button>
  );
}

export default Button;
