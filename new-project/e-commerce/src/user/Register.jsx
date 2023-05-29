import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    cpassword: ""
  })
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const sendData = async (e) =>{
    e.preventDefault();
    const { fullname, username, email, mobile, gender, password, cpassword } = user;
    
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          email,
          mobile,
          gender,
          password,
          cpassword
        }),
      });
      const data = await res.json();
      console.log(data)
  
   

    
    if (res.status === 421 || !data) {
      window.alert("Please fill the blank input");
    }
    if (res.status === 422 || !data) {
      window.alert("Email Alerady Exist");
    } else if (res.status === 423 || !data) {
      window.alert("Username Alerady Exist");
    } else if (res.status === 424 || !data) {
      window.alert("Contact number Alerady Exist");
    } else if (res.status === 425 || !data) {
      window.alert("Password is not match");
    } else if (res.status === 201 || !data) {
      window.alert("Registered Successfully");

      navigate("/");
    }
  }

  return (
    <>
      <form method="POST">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
        </div>
        <label htmlFor="fullname">
          <b>Full Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          name="fullname"
          id="fullname"
          onChange={handleInputs}
          value={user.fullname}
          required
        />
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={handleInputs}
          value={user.username}
          required
        />
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
        <label htmlFor="phone">
          <b>Moblie</b>
        </label>
        <input
          type="text"
          placeholder="Enter Moblie Number"
          name="mobile"
          onChange={handleInputs}
          value={user.mobile}
          required
        />
        <label htmlFor="gender">
          <b>Please select your Gender:</b>
        </label>
        <br />
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          onChange={handleInputs}
          value="Male"
        />
        &nbsp;
        <label htmlFor="male">Male</label>&nbsp; &nbsp;
        <input
          type="radio"
          id="female"
          name="gender"
          onChange={handleInputs}
          value="Female"
        />
        &nbsp;
        <label label htmlFor="female">
          Female
        </label>
        <br />
        <br />
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
        <label htmlFor="cpassword">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="cpassword"
          onChange={handleInputs}
          value={user.cpassword}
          required
        />
        {/* <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label> */}
        
        
        <div className="clearfix">
          <button type="submit" onClick={sendData} className="signupbtn">
            Sign Up
          </button>
        </div>
        </form>
    </>
  );
}

export default Register;