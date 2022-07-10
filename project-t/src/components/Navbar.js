import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
        <div className="container1">
            <div className="nav">
                <ul><li><Link className="a1" to="/">{props.title}</Link></li></ul>
                {/* <li><a className="a1" href="/">{props.title}</a></li> */}
            </div>
            <div className="nav">
                <ul><li><Link className="a1" to="/">Home</Link></li></ul>
                {/* <li><a className="a1" href="/">{props.title}</a></li> */}
            </div>
            <div className="nav3">
                {/* <li><a className="a1" href="/">Login</a></li> */}
            <ul><li><Link className="a1" aria-current="page" to="/profile">Profile</Link></li></ul>
            </div>
            <div className="nav1">
                {/* <li><a className="a1" href="/">Login</a></li> */}
            <ul><li><Link className="a1" aria-current="page" to="/signin">Login</Link></li></ul>
            </div>
            <div className="nav2">
            <ul><li><Link className="a1" to="/signup">Sign Up</Link></li></ul>
            {/* <li><a className="a1" href="/handlesignup">Sign Up</a></li> */}
            </div>
        </div>
        
    </>
  )
}
