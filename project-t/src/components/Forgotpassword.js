import { useNavigate } from "react-router-dom";
import React, {  useState} from "react";

export default function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("palrawatajay@gmail.com");
//   const [userData, setuserData] = useState("");

const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch("/forgot", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
      }) 
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalide credentials")
      console.log("No email found")
    }
    else{
      console.log("login Successfully")

      navigate("/reset")
    }

  }

  return (
    <>
    
      <div className="container">
        <div className="outer">
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
              <button className="btn" type="submit" onClick={loginUser}>
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
