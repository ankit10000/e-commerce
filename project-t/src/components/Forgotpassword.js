import { useNavigate } from "react-router-dom";
import React, {  useState} from "react";

export default function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [input, setInput] = useState({
    otpcode:"",
    password: "",
    confirmPassword:""
  });
//   const [userData, setuserData] = useState("");

const sendOtp = async (e) =>{
    e.preventDefault();

    const res = await fetch("/sendotp", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email
      }) 
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Please enter valide email")
    }
    else{
      window.alert("OTP send on email successfully")
    }
  }
  const inputHandler = (e) =>{
    setInput({...input , [e.target.name]:[e.target.value]})

  }

  const verifyotp = async (e) =>{
    e.preventDefault();
    const { otpcode, password, confirmPassword } = input;
    const res = await fetch("/change-password", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({
        code:otpcode,
        password:password,
        confirmPassword:confirmPassword
      }) 
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials")
    }
    else if (res.status === 401 || !data) {
      window.alert("Wrong OTP")
    }
    else if (res.status === 402 || !data) {
      window.alert("Password is not match")
    }
    else if (res.status === 403 || !data) {
      window.alert("Password is not change")
    }
    else if (res.status === 404 || !data) {
      window.alert("Please enter valide email")
    }
    else if (res.status === 405 || !data) {
      window.alert("Please enter valide email")
    }
    else{
      window.alert("Otp is verify and reset your password")
      navigate("/signin")
    }
  }

  return (
    <>
    
      <div className="container">
        <div className="outer3">
          <h1>
            <span>Forgot Password</span>
          </h1>
          <form method="POST" >
            <nav className="navbar">
              <div className="icoemail">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  autoComplete="off"
                  maxLength="40"
                  placeholder="Enter your email"
                  id="email"
                  required
                />
              </div>
              <button className="btn1" type="submit" onClick={sendOtp} >
                Send OTP
              </button>
              <div className="icoemail">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="otpcode"
                  value={input.otpcode}
                  onChange={inputHandler}
                  autoComplete="off"
                  maxLength="4"
                  placeholder="Enter your code"
                  id="otp"
                />
              </div>
              <div className="passico">
                <label htmlFor="password"></label>
                <input
                  pattern="[A-Za-z0-9!@#$%^&*-]{6,}"
                  name="password"
                  maxLength="10"
                  autoComplete="off"
                  value={input.password}
                  onChange={inputHandler}
                  placeholder="Enter your password"
                  type="password"
                  id="pass"
                  required
                />
              </div>
              <div className="passico">
                <label htmlFor="confirmpassword"></label>
                <input
                  name="confirmPassword"
                  maxLength="10"
                  autoComplete="off"
                  value={input.confirmPassword}
                  onChange={inputHandler}
                  placeholder="Confirm your password"
                  type="password"
                  id="pass2"
                  required
                />
              </div>
              <button className="btn" type="submit" onClick={verifyotp}>
                Submit
              </button>
            </nav>
          </form>
          <div></div>
        </div>
      </div>
    </>
  )
}
