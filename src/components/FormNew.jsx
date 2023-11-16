import React, { useState } from "react";

const FormNew = () => {
  // or we can also pass the object inside the useState( { key: value })
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    gmail: "",
    phone: 0,
  });

  const updateName = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(event.target.placeholder);

    // const value = event.target.value;
    // const name = event.target.name;
    console.log();

    const { name, value } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue, // fullName : // spread operator, copying the object into fullName
        // both will do the same work,
        [name]: value,
      };

      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: prevValue.lname,
      //     gmail: prevValue.gmail,
      //     phone: prevValue.phone,
      //   };
      // }
      // else if (name === "lName") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: value,
      //     gmail: prevValue.gmail,
      //     phone: prevValue.phone,
      //   };
      // }
      // else if (name === "gmail") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     gmail: value,
      //     phone: prevValue.phone,
      //   };
      // }
      // else {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     gmail: prevValue.gmail,
      //     phone: value.slice(0, 10),
      //   };
      // }
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form className="input-form" onSubmit={submitForm}>
          <h1>
            Name: {fullName.fname} {fullName.lname}
          </h1>
          <h1>Gmail : {fullName.gmail} </h1>
          <h1>phone : {fullName.phone} </h1>
          <input
            type="text"
            placeholder="your first name"
            name="fname"
            value={fullName.fname}
            onChange={updateName}
          />
          <input
            type="text"
            placeholder="your last name"
            name="lname"
            value={fullName.lname}
            onChange={updateName}
          />
          <input
            type="email"
            placeholder="your gmail"
            name="gmail"
            value={fullName.gmail}
            onChange={updateName}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="your phone no."
            name="phone"
            value={fullName.phone}
            onChange={updateName}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default FormNew;
