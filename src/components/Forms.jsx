import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setFullName(event.target.value);
  };

  const submitForm = (event) => {
    // console.log(fullName);
    setName(fullName);
    setFullName(""); // to clear the input field
  };

  return (
    <>
      <div className="container">
        <div className="input-form">
          <h1> Name: {name} </h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={fullName}
          />
          <button onClick={submitForm}>Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Forms;
