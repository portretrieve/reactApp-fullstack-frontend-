import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const InputContent = ({
  elementName,
  elementId,
  elementType,
  elementPlaceholder,
  textareaRows
}) => {
  return elementName === "input" ? (
    <input id={elementId} type={elementType} placeholder={elementPlaceholder} />
  ) : (
    <textarea id={elementId} rows={textareaRows || 3} />
  );
};

function Input(props) {
  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      <InputContent
        elementName={props.element}
        elementId={props.id}
        elementType={props.type}
        elementPlaceholder={props.placeholder}
        textareaRows={props.rows}
      />
    </div>
  );
}

export default Input;
