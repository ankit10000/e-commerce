import React, { useContext, useState } from "react";
import { useNavigate,Link  } from "react-router-dom";
import logo from "../img/logo.png";
import logo1 from "../img/passlogo.png";
import { UserContext } from "../App";

export default function Handlelogin() {

  const { dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch("/signin", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }) 
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalide credentials")
    }
    else{
      dispatch({type:"USER", payload:true})
      window.alert("login Successfully")

      navigate("/")
    }

  }

  return (
    <>
    
      <div className="container">
        <div className="outer">
          <h1>
            <span>Sign in</span>
          </h1>
          <span id="span">Login to manage your account</span>
          <form method="POST">
            <nav className="navbar">
              <div className="icoemail">
                <img id="logo" height="20px" width="22px" src={logo} alt="" />
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
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="password"></label>
                <input
                  minLength="4"
                  name="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  autoComplete="off"
                  maxLength="10"
                  placeholder="Enter you password"
                  type="password"
                  id="pass"
                  required
                />
              </div>
              <Link className="a2" aria-current="page" to="/forgot">forgot password</Link>
              <button className="btn" type="submit"onClick={loginUser}>
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