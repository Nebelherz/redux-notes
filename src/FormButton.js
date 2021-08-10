import React from "react";
import './button.scss'

const FormButton = (props) => {
  return (
      <svg 
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-plus-lg btn-round"
        viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
      </svg>
  );
};

export default FormButton;
