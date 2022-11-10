import React, { useState} from "react";
import { useNavigate,Link } from "react-router-dom";
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
     
        // window.alert("Registered Successfully");
       setInput({
         comment:"",
        })
        navigate("/comment");
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <div className="alert"></div>
      <div className="container">
        <div className="outerdesc">
              <Link className="backward" to="/thread" >&#60;</Link>
          <div className="headersignup">
            <div className="discuss">
              <div className="discussion">
                  <Showcomments />
              </div>
            </div>
            <h1>
              <span>Start to post comments</span>
            </h1>
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
                  placeholder="Post your comment"
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
