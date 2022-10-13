import React from "react";
// import { useNavigate } from "react-router-dom";

export default function Resetpassword() {



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
          <form method="POST" required>
            <nav className="navbar">
              <div className="passico">
                <label htmlFor="password"></label>
                <input
                  pattern="[A-Za-z0-9!@#$%^&*-]{6,}"
                  name="password"
                  maxLength="10"
                  autoComplete="on"
                  // onChange={handleInputs}
                  // value={input.password}
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
                  // onChange={handleInputs}
                  // value={input.confirmPassword}
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
