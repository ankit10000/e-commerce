import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Resetpassword() {

    const navigate = useNavigate();
    const [input, setInput] = useState({
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
      const {password, confirmPassword } = input;
  
      const res = await fetch("/reset", {
        required: true,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      const data = await res.json();
  
      if (data.status === 200 || !data) {
        window.alert("Invalide credentials");
      } else {
        window.alert("Reset Password Successfully");
  
        navigate("/signin");
      }
    };


  return (
    <div>
      <div className="alert"></div>
      <div className="container">
        <div className="outer1">
          <div className="headersignup">
            <h1>
              <span>Reset your password</span>
            </h1>
          </div>
          <form method="POST"onSubmit={SubmitData} required>
            <nav className="navbar">
              <div className="passico">
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
              <button className="btn" type="submit">
                Submit
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>
  )
}
