import React, { useState } from "react";
import logo from "../img/logo.png";
import logo1 from "../img/passlogo.png";

export default function Handlelogin() {
  const regex = /[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]/;
  // const regexpass = /[A-Za-z0-9!@#$%^&*-]{5,}/;

  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  // const [error3, setError3] = useState(null);
  const [error2, setError2] = useState(null);
  // const [data, setData] = useState({
  //   email: "",
  //   password:"",
  // });

  // const { email , password } = data;

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setTimeout(() => {
        setError(null);
      }, 500);
      setError("Please enter valide email");
    } else if (regex.test(email) === true) {
      setTimeout(() => {
        setError1("Valide email");
      }, 1000);

      setTimeout(() => {
        setError1(null);
      }, 1500);
      setError1("Valide email");
    } else {
      setError(" ");
    }
  };
  // const checkPassword=(event)=>{
  //   setPassword(event.target.value);
  //   if(regexpass.test(password)===false){
  //     setTimeout(() => {
  //     setError(null)
  //     }, 800);
  //     setError3('Please enter valide password')
  //   }

  //   else{
  //       setError('');
  //       setTimeout(() => {
  //         setError3(null)
  //       }, 1000);
  //       // setError3("valid")
  //     }
  // }

  const onSubmit = () => {
    if (email !== "") {
      if (regex.test(email) === false) {
        setTimeout(() => {
          setError(null);
        }, 500);
        setError("Please enter valide email");
      } else {
        alert("Thankyou Mr/Miss " + email);
      }
    } else {
      setTimeout(() => {
        setError2(null);
      }, 1000);
      setError2("Email can't blank");
    }
  };

  return (
    <>
      <div className="container">
        <div className="outer">
          <h1>
            <span>Sign in</span>
          </h1>
          <span id="span">Login to manage your account</span>
          <form onSubmit={onSubmit}>
            <nav className="navbar">
              <div className="icoemail">
                <img id="logo" height="20px" width="22px" src={logo} alt="" />
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  maxLength="40"
                  placeholder="Enter your email"
                  id="email"
                  onChange={checkEmail}
                  required
                />
              </div>
              <span id="error">{error}</span>
              <span id="error1">{error1}</span>
              <span id="error2">{error2}</span>
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="password"></label>
                {/* <input minLength="4" name='password' maxLength="10" placeholder='Enter you password'onChange={checkPassword} type="password" id='pass' required/> */}
                <input
                  minLength="4"
                  name="password"
                  maxLength="10"
                  placeholder="Enter you password"
                  type="password"
                  id="pass"
                  required
                />
              </div>
              {/* <span id="error3">{error3}</span> */}
              <button className="btn" type="submit">
                Submit
              </button>
            </nav>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}
