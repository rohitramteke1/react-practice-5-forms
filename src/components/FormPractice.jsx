import React, { useState } from "react";

const FormPractice = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();

  const updateName = (event) => {
    setFullName(event.target.value);
  };

  const subbmitForm = (event) => {
    event.preventDefault();
    setName(fullName);
    // clear the input field
    setFullName("");
  };

  return (
    <>
      <div className="container">
        <form className="input-form" onSubmit={subbmitForm}>
          <h1>Name: {name} </h1>
          <input
            type="text"
            placeholder="your name here"
            value={fullName}
            onChange={updateName}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default FormPractice;

// import React, { useState } from "react";

// const FormPractice = () => {
//     const [name, setName] = useState('');
//     const [fullName, setFullName] = useState('');

//     const getName = (event) => {
//       setFullName(event.target.value);
//     }

//     const updateName = () => {
//       setName( fullName );
//       setFullName('');
//     }

//   return (
//     <>
//       <div className="container">
//         <div className="input-form">
//           <h1> Name: { name } </h1>
//           <input type="text" placeholder="Enter your name" value={ fullName } onChange ={ getName } />
//           <button onClick={ updateName } >Click Me</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormPractice;
