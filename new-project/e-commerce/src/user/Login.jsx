import "../css/Login.css";

const Login = () => {
   
  return (
    <>

            <form action="/">
        <h2>Login</h2>
                <div className="imgcontainer">
                    <img src="../src/img/logo-no-background.png" alt="Avatar" className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>

                <div className="container" >
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
    </>
  )
}

export default Login