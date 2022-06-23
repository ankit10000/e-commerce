// import React from 'react'

import React, {useState} from 'react'
import logo from "../img/logo.png"
import logo1 from "../img/passlogo.png"

export default function Handlelogin() {
  const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const [email, setEmail] = useState(''); 

  const [error, setError] = useState(null);
  // const [error1, setError1] = useState(null);
  const [error2, setError2] = useState('');




  const checkEmail=(e)=>{
    setEmail(e.target.value);
    if(regex.test(email)===false){
      setTimeout(() => {
        setError(null)
      }, 1500);
      setError('Please enter valide email')
    }
    else{
        setError('');
      }
  }


  const onSubmit=()=>{   
    if(email!==""){
      alert("Thankyou Mr/Miss " + email)
    }
    else{
      
      setError2("Email can't blank");
    }
  }
 
  return (
    <><div className="container">
        <div className="outer">
            <h1><span>Sign in</span></h1>
            <span id='span'>Login to manage your account</span>
            {/* <form> */}
            <nav className="navbar">
                <div className="icoemail">
                  <img id='logo' height="20px" width="22px" src={logo} alt="" />
                  <label htmlFor='email'></label>
                  <input type="text" maxLength="40" placeholder='Enter your email' id='email' onChange={checkEmail} required/>
                </div>
                  <span id='error'>{error}</span>
                  {/* <span id='error1'>{error1}</span> */}
                  <span id='error2'>{error2}</span>
                <div className="passico">
                  <img id='logo1' height="20px" width="22px" src={logo1} alt="" />
                  <label htmlFor='password'></label>
                  <input minLength="6" maxLength="10" placeholder='Enter you password' type="password" id='pass' required/>
                </div>
                <button className='btn' type="submit" onClick={onSubmit}>Submit</button>
            </nav>
            {/* </form> */}
        </div>
    </div>
    </>
  )
}
