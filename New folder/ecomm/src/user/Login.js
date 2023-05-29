import React from 'react'
import "../css/Login.css";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import ImgLogin from "../img/logo-no-background.png"


export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
      })
      let name, value;
    
      const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        setUser({ ...user, [name]: value });
      }

  return (
    <form method="post">
        <h2>Login</h2>
        <div className="imgcontainer">
          <img
            src={ImgLogin}
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={handleInputs}
          value={user.email}
          required
        />

        <label htmlFor="passwprd">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleInputs}
          value={user.password}
          required
        />

          <button type="submit">Login</button>
        </div>

        <div className="container">
          <span className="psw">
            Forgot <NavLink href="#">password?</NavLink>
          </span>
        </div>
      </form>
  )
}
