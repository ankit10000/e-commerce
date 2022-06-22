import React from 'react'
import logo from "../img/logo.png"

export default function Handlelogin(props) {
  return (
    <><div className="container">
        <div className="outer">
            <h1><span>Sign in</span></h1>
            <span id='span'>Login to manage your account</span>
            <nav className="navbar">
                <div className="icoemail">
                  <img id='logo' height="20px" width="22px" src={logo} alt="" />
                  <label htmlFor='email'></label>
                  <input type="text" maxLength="40" placeholder='Enter your email' id='email' />
                </div>
                <label htmlFor='password'></label>
                <input type="password" id='pass' />
            </nav>
        </div>
    </div>
    </>
  )
}
