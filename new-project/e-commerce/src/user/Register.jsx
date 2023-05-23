
const Register = () => {
  return (
    <>
        <form action="/" >
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>
            </div>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="phone"><b>Moblie</b></label>
            <input type="text" placeholder="Enter Moblie Number" name="mobile" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

            <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </form>
    </>
  )
}

export default Register