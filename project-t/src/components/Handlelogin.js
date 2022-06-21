import React from 'react'

export default function Handlelogin() {
  return (
    <><div className="container">
        <div className="outer">
            <h1><span>Sign in</span></h1>
            <span id='span'>Login to manage your account</span>
            <nav className="navbar">
                <div className="icoemail">
                <img height="150px" width="150px" src="email-13762.png" alt="" />
                <label htmlFor='email'></label>
                <input type="text" placeholder='Enter your email' id='email' />
                </div>
                <label htmlFor='password'></label>
                <input type="password" id='pass' />
            </nav>
        </div>
    </div>
    </>
  )
}
