import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [userData, setuserData] = useState("");

  const navigate = useNavigate();

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", [{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }]);

      const data = await res.json();
      // console.log(data);
      setuserData(data);

      if (!res.status === 200) {
        const err = new Error(res.error);
        throw err;
      }
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callProfilePage();
  });

  return (
    <>
      <div>
        <form method="GET">
          <div className="container">
            <div className="profilecontainer">
              <div className="innerbox">
                <div className="getinput">
                  <label htmlFor="username">Username :</label>
                  <div>{userData.username}</div>
                </div>
                <div className="getinput">
                  <label htmlFor="email">email :</label>
                  <div>{userData.email}</div>
                </div>
                <div className="getinput">
                  <label htmlFor="contactnumber">contactnumber :</label>
                  <div> {userData.contactnumber}</div>
                </div>
                {/* <div className="getinput">
                  <label htmlFor="password">password :</label>
                  <div>{userData.password}</div>
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
