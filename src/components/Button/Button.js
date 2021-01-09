import React from "react";

import "./Button.css";

const Button = ({
  children,
  inverse,
  onClick,
  danger,
  dangerInverse,
  warning,
  warningInverse,
  shadow,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
      button 
      ${inverse && "button--inverse"}
      ${warning && "button--warning"}
      ${warningInverse && "button--warning-inverse"}
      ${danger && "button--danger"}
      ${dangerInverse && "button--danger-inverse"}
      ${shadow && "shadow"} 
      `}
    >
      {children}
    </button>
  );
};

export default Button;
