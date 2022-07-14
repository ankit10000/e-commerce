import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { dispatch } = useContext(UserContext);
  const [userData, setuserData] = useState("");

  const navigate = useNavigate();

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profile", [
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      ]);

      const data = await res.json();
      // console.log(data);
      setuserData(data);
      dispatch({ type: "USER", payload: true });

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
            <div className="profilecontainerh1">
                <h1>Profile Page</h1>
                      </div>
              <div className="profileinnercontainer">
                <table>
                  <tbody>
                    <tr>
                      <td className="tdu r">Username</td>
                      <td className="td r">{userData.username}</td>
                    </tr>
                    <tr>
                      <td className="tdu r1">E-mail</td>
                      <td className="td r1">{userData.email}</td>
                    </tr>
                    <tr>
                      <td className="tdu r2">Contact Number</td>
                      <td className="td r2">{userData.contactnumber}</td>
                    </tr>
                  </tbody>
                </table>
                {/* <div className="innerbox2">
                    <div>{userData.username}</div>
                    <div>{userData.email}</div>
                    <div> {userData.contactnumber}</div>
                  </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
