import React from "react";

function Paragraph(props) {
  const { text, className, count } = props;

  return (
    <p className={className}>
      {text}
      {count}
    </p>
  );
}

export default Paragraph;
