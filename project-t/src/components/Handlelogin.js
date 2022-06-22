import React from 'react'
import logo from "../img/logo.png"
import logo1 from "../img/passlogo.png"

export default function Handlelogin() {
  return (
    <><div className="container">
        <div className="outer">
            <h1><span>Sign in</span></h1>
            <span id='span'>Login to manage your account</span>
            <form action="sada.com" method="post">
            <nav className="navbar">
                <div className="icoemail">
                  <img id='logo' height="20px" width="22px" src={logo} alt="" />
                  <label htmlFor='email'></label>
                  <input type="text" maxLength="40" placeholder='Enter your email' id='email' />
                </div>
                <div className="passico">
                  <img id='logo1' height="20px" width="22px" src={logo1} alt="" />
                  <label htmlFor='password'></label>
                  <input minLength="6" maxLength="10" type="password" id='pass' />
                </div>
                <button type="submit">Submit</button>
            </nav>
            </form>
        </div>
    </div>
    </>
  )
}
