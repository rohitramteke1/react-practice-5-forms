import React, {useState} from "react";

const FormUser = () => {

    const [firstName, setFirstName] = useState('');
    const [name, setName] = useState('');

    const [lastName, setLastName] = useState('');
    const [lname, setLName] = useState('');

    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateLastName = (event) => {
        setLastName(event.target.value);
    }
    
    const submitForm = (event) => {
        event.preventDefault();
        setName(firstName);
        setLName(lastName);
        setFirstName('');
        setLastName('');
    }

  return (
    <>
      <div className="container">
        <form className="input-form" onSubmit={ submitForm }>
          <h1 >Name: {name} {lname} </h1>
          <input type="text" placeholder="your name here" value={firstName} onChange={updateFirstName} />
          <input tpye="text" placeholder="your surname here" value={lastName} onChange={updateLastName}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormUser;
