import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Showcomments from './Showcomments';

export default function Comment() {
    const navigate = useNavigate();
  const [input, setInput] = useState({
    comment: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  
  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      const { comment } = input;
    const res = await fetch("/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment
      }),
    });
     await res.json();
     
        window.alert("Registered Successfully");
       setInput({
         comment:"",
        })
        navigate("/comment");
      
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
      SubmitData();
    });
  return (
    <div>
      <div className="alert"></div>
      <div className="container">
        <div className="outerdesc">
          <div className="headersignup">
            <div className="discuss">
              <div className="discussion">
                  <Showcomments />
              </div>
            </div>
            <h1>
              <span>Start Comments</span>
            </h1>
            <span id="span">Make a Question to know answer</span>
          </div>
          <form method="POST" required>
            <nav className="navbar">
              <div className="icodesc">
                <label htmlFor="email"></label>
                <textarea
                  type="text"
                  name="comment"
                  value={input.comment}
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
  )
}
