import "../css/Login.css";
import { useState } from "react"

const Login = () => {
   
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
    <>
      <form method="post">
        <h2>Login</h2>
        <div className="imgcontainer">
          <img
            src="../src/img/logo-no-background.png"
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
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label> */}
        </div>

        <div className="container">
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login