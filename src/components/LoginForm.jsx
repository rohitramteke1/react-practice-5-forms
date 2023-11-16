import React, {useState} from "react";

const LoginForm = () => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: 0,
  });

  // we can create another React Hook to store and 
  // we can store it into database
  const [userData, setUserData] = useState(user) ;

  const submitForm = (event)  => {
    event.preventDefault(); // prevent the page from refreshing itself
    setUserData(user); // storing the user info info into the userData hook
    console.log(userData); // for checking purpose only
  }

  // TRICK FOR WRITING THIS
  // const updateUser = (event) => {
  //   // console.log(event.target);
  //   // console.log(event.target.name);
  //   // console.log(event.target.value);

  //   const name = event.target.name;
  //   const value = event.target.value;

  //   if ( name === 'fname' ) {
  //     setUser( (prevValue) => {
  //       return {
  //         fname: value,
  //         lname: prevValue.lname, 
  //         email: prevValue.email,
  //         phone: prevValue.phone,
  //       }
  //     });
  //   } 
  //   else if ( name === 'lname' ) {
  //     setUser( (prevValue) => {
  //       return {
  //         fname: prevValue.fname,
  //         lname: value, 
  //         email: prevValue.email,
  //         phone: prevValue.phone,
  //       }
  //     });
  //   }
  //   else if ( name === 'email' ) {
  //     setUser( (prevValue) => {
  //       return {
  //         fname: prevValue.fname,
  //         lname: prevValue.lname, 
  //         email: value,
  //         phone: prevValue.phone,
  //       }
  //     });
  //   }
  //   else {
  //     setUser( (prevValue) => {
  //       return {
  //         fname: prevValue.fname,
  //         lname: prevValue.lname, 
  //         email: prevValue.email,
  //         phone: value,
  //       }
  //     });
  //   }
  // }

  const updateUser = (event) => {
    const { name, value } = event.target;
    setUser( (prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    });
  }

  const styles = {width: '100%', padding: '2px 10px', margin: '2px', fontWeight: 100, fontSize: '15px' };

  return (
    <>
      <div className="container">
        <form className="input-form" onSubmit = {submitForm}>
          <h1 style = { styles } > Name : {user.fname} {user.lname} </h1>
          <h3 style = { styles } > Email : {user.email} </h3>
          <h3 style = { styles } > Mobile : {user.phone} </h3>

          <input type="text" placeholder="your name here" name="fname" value = {user.fname} onChange={updateUser} />
          <input type="text" placeholder="your surname here" name="lname" value={user.lname} onChange={updateUser} />
          <input type="email" placeholder="example@email.com" name="email" value = {user.email} onChange={updateUser} />
          <input type="number" placeholder="+91-XXXXXXXXXX" name="phone" value={user.phone} onChange={updateUser} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
