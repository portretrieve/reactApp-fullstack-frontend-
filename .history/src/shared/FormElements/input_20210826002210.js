import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true
      };

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
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  return;
  <>
    elementName === "input" ? (
    <input
      id={elementId}
      type={elementType}
      placeholder={elementPlaceholder}
      onChange={changeHandler}
      value={inputState.value}
    />
    ) : (
    <textarea
      id={elementId}
      rows={textareaRows || 3}
      onChange={changeHandler}
      value={inputState.value}
    />
    )<>{!inputState.isValid && <p></p>}</>
  </>;
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
