import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";

import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { dispatch} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", [
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    ])
      .then((res) => {
      dispatch({type:"USER", payload:false})

        navigate("/signin", { replace: true });

        if (!res.status === 200) {
          const err = new Error(res.error);
          throw err;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <></>;
}
