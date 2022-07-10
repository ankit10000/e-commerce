import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const callProfilePage = async () =>{
    try {
      const res = await fetch('/profile', {
        method:'GET',
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json"
        },
        credentials:"include"

      })

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    } catch (err) {
      console.log(err)
      navigate("/signin")
    }
  }

  useEffect(() => {
    callProfilePage()
    });
  
  

  return (
    <>
      <div>
        <form method='GET' >
          <div className="container">
            <div className="profilecontainer">
              <div className="innerbox">
                <div className="getinput">
                  <label htmlFor="username">Username :</label>
                  <div>w</div>
                </div>
                <div className="getinput">
                  <label htmlFor="email">email :</label>
                  <div>w</div>
                </div>
                <div className="getinput">
                  <label htmlFor="contactnumber">contactnumber :</label>
                  <div> w</div>
                </div>
                <div className="getinput">
                  <label htmlFor="password">password :</label>
                  <div>w</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
