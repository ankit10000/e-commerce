import React, { useState } from "react";
import logo from "../img/logo.png";
import logo1 from "../img/passlogo.png";
import logo2 from "../img/userlogo.png";

export default function Handlesignup() {
  const regex = /[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]/;
  const regexnumber = /[6-9]{1}[0-9]{8}/;
  // const regexpass = /[A-Za-z0-9!@#$%^&*-]{5,}/;

  const [email, setEmail] = useState("");
  const [cnumber, setCnumber] = useState("");
  // const [pass, setPass] = useState("");
  // const [cpass, setCpass] = useState("");

  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  const [error3, setError3] = useState(null);
  const [error4, setError4] = useState(null);
  const [error2, setError2] = useState(null);
  // const [error5, setError5] = useState(null);
  //set password confirmation
  
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });
 
  const [error5, setError5] = useState({
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError5(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error5.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }



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
  const checkCnumber = (e) => {
    setCnumber(e.target.value);
    if (regexnumber.test(cnumber) === false) {
      setTimeout(() => {
        setError3(null);
      }, 500);
      setError3("Please enter valide Number");
    } else if (regexnumber.test(cnumber) === true) {
      // setTimeout(() => {
      //   setError4("Valide email")
      // }, 1000);

      setTimeout(() => {
        setError4(null);
      }, 1500);
      setError4("Valide Number");
    } else {
      setError(" ");
    }
  };

  const onSubmit = () => {
    if (email !== "") {
      if (regex.test(email) === false) {
        setTimeout(() => {
          setError(null);
        }, 500);
        setError("Please enter valide email");
      } else {
        alert("Successfully submitted your data! ");
        alert("Please login to the page")
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
        <div className="outer1">
          <div className="headersignup">
          <h1>
            <span>SignUp</span>
          </h1>
          <span id="span">Signup to create a account</span>
          </div>
          <form onSubmit={onSubmit}>
            <nav className="navbar">
              <div className="iconumber">
                <img id="logo2" height="20px" width="22px" src={logo2} alt="" />
                <label htmlFor="username"></label>
                <input
                  type="varchar"
                  pattern="[A-Za-z0-9]{7,}"
                  name="username"
                  id="username"
                  maxLength="20"
                  placeholder="Enter username"
                  // required
                />
              </div>
              <div className="icoemail">
                <img id="logo" height="20px" width="22px" src={logo} alt="" />
                <label htmlFor="email"></label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  maxLength="40"
                  onChange={checkEmail}
                  placeholder="Enter your email"
                  id="email"
                  required
                />
              </div>
              <span id="error">{error}</span>
              <span id="error1">{error1}</span>
              <span id="error2">{error2}</span>
              <div className="iconumber">
                <span id="cn">+91</span>
                <label htmlFor="number"></label>
                <input
                  type="tel"
                  name="contactnumber"
                  onChange={checkCnumber}
                  id="number"
                  maxLength="10"
                  placeholder="Enter contact number"
                />
              </div>
              {/* <span id='error'>{error}</span> */}
              <span id="error3">{error3}</span>
              <span id="error4">{error4}</span>
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="password"></label>
                <input
                  minLength="4"
                  name="password"
                  maxLength="10"
                  // onChange={confirmPass}
                  value={input.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  placeholder="Enter your password"
                  type="password"
                  id="pass"
                  required
                />
              </div>
              {error5.password && <span className='err'>{error5.password}</span>}
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="confirmepassword"></label>
                <input
                  minLength="4"
                  name="confirmPassword"
                  maxLength="10"
                  // onChange={confirmPass}
                  value={input.confirmPassword}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  placeholder="Confirm your password"
                  type="password"
                  id="pass2"
                  required
                />
              </div>
              {/* <span id="error3">{error5}</span> */}
              {error5.confirmPassword && <span className='err'>{error5.confirmPassword}</span>}
              <button className="btn" type="submit">
                Submit
              </button>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
}