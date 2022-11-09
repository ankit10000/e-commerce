import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import logo1 from "../img/passlogo.png";
import logo2 from "../img/userlogo.png";

export default function Handlesignup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    contactnumber: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    const { username, email, contactnumber, password, confirmPassword } = input;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        contactnumber: contactnumber,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });
    const data = await res.json();
    console.log(data)

    if (res.status === 421 || !data) {
      window.alert("Please fill the blank input");
    }
    if (res.status === 422 || !data) {
      window.alert("Email Alerady Exist");
    } else if (res.status === 423 || !data) {
      window.alert("Username Alerady Exist");
    } else if (res.status === 424 || !data) {
      window.alert("Contact number Alerady Exist");
    } else if (res.status === 425 || !data) {
      window.alert("Password is not match");
    } else if (res.status === 201 || !data) {
      window.alert("Registered Successfully");

      navigate("/");
    }
  };

  return (
    <div>
      <div className="alert"></div>
      <div className="container">
        <div className="outer1">
          <div className="headersignup">
            <h1>
              <span>SignUp</span>
            </h1>
            <span id="span">Signup to create a account</span>
          </div>
          <form method="POST" required>
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
                  value={input.username}
                  onChange={handleInputs}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="icoemail">
                <img id="logo" height="20px" width="22px" src={logo} alt="" />
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  maxLength="40"
                  value={input.email}
                  onChange={handleInputs}
                  placeholder="Enter your email"
                  id="email"
                  required
                />
              </div>
              <div className="iconumber">
                <span id="cn">+91</span>
                <label htmlFor="number"></label>
                <input
                  type="tel"
                  pattern="[6-9]{1}[0-9]{8,9}"
                  name="contactnumber"
                  onChange={handleInputs}
                  value={input.contactnumber}
                  id="number"
                  maxLength="10"
                  placeholder="Enter contact number"
                  required
                />
              </div>
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="password"></label>
                <input
                  pattern="[A-Za-z0-9!@#$%^&*-]{6,}"
                  name="password"
                  maxLength="10"
                  autoComplete="on"
                  onChange={handleInputs}
                  value={input.password}
                  placeholder="Enter your password"
                  type="password"
                  id="pass"
                  required
                />
              </div>
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="confirmepassword"></label>
                <input
                  name="confirmPassword"
                  maxLength="10"
                  autoComplete="on"
                  onChange={handleInputs}
                  value={input.confirmPassword}
                  placeholder="Confirm your password"
                  type="password"
                  id="pass2"
                  required
                />
              </div>
              <button className="btn" type="submit" onClick={SubmitData}>
                Submit
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}
