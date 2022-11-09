import React, { useEffect, useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import logo2 from "../img/userlogo.png";
import Threadid from './Threadid';

export default function Thread() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    desc: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  
  const SubmitData = async (e) => {
    e.preventDefault();
    const { title, desc } = input;
    const res = await fetch("/thread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
      }),
    });
     await res.json();
      window.alert("Registered Successfully");
      setInput({
        title:"",
        desc:""
      })
      navigate("/thread");
  
  };
  useEffect(() => {
      SubmitData();
    });
    
  return (
    <div>
      <div className="alert"></div>
      <div className="container">
        <div className="outerdesc">
        <Link className="backward" to="/" >&#60;</Link>
          <div className="headersignup">
            <div className="discuss">
              <div className="discussion">
                  <Threadid />
              </div>
            </div>
            <h1>
              <span>Start Discussion</span>
            </h1>
            <span id="span">Make a Question to know answer</span>
          </div>
          <form method="POST" required>
            <nav className="navbar">
              <div className="icotitle">
                <img id="logo2" height="20px" width="22px" src={logo2} alt="" />
                <label htmlFor="username"></label>
                <input
                  type="text"
                  name="title"
                  id="username"
                  value={input.title}
                  onChange={handleInputs}
                  placeholder="Enter title"
                  required
                />
              </div>
              <div className="icodesc">
                <label htmlFor="email"></label>
                <textarea
                  type="text"
                  name="desc"
                  value={input.desc}
                  onChange={handleInputs}
                  placeholder="Enter your description"
                  id="desc"
                  required
                />
              </div>

              <button className="btn" type="submit" onClick={SubmitData}>
                Click
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}
