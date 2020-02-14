import React from "react";

import "./App.css";

const Box = ({ className, style, onClick, text, disabled }) => (
  <button
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled}
  >
    <p className="button-value">{text}</p>
  </button>
);

export default Box;
