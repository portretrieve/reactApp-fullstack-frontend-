import React from "react";

import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";

function NewPlace() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder={`Enter the Title`}
      />
      <Input
        type="text"
        label="Description"
        rows={10}
        placeholder="Enter the description"
      />
    </form>
  );
}

export default NewPlace;