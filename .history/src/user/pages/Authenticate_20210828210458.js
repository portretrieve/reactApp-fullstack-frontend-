import React from "react";

function Authenticate() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted...");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <p>We will authenticate you here</p>
        <label htmlFor="email">Enter Your email</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Enter Your Password</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">SUBMIT</button>
        <button to="/">CANCEL</button>
      </form>
    </div>
  );
}

export default Authenticate;
