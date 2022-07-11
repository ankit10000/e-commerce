import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from "../App";



export default function Navbar(props) {
  const {state} = useContext(UserContext);

    const RenderMenu =()=>{
        
        if(state){
                return(
                <>
            <div className="nav">
                <ul><li><Link className="a1" to="/">{props.title}</Link></li></ul>
                </div>
                <div className="nav">
                <ul><li><Link className="a1" to="/">Home</Link></li></ul>
            </div>
            <div className="nav1">
            <ul><li><Link className="a1" aria-current="page" to="/profile">Profile</Link></li></ul>
            </div>
            <div className="nav2">
            <ul><li><Link className="a1" to="/logout">Logout</Link></li></ul>
            </div>
            </>
            )
        }else{
            return(
                <>
            <div className="nav">
            <ul><li><Link className="a1" to="/">{props.title}</Link></li></ul>
            </div>
            <div className="nav">
            <ul><li><Link className="a1" to="/">Home</Link></li></ul>
            </div>
            <div className="nav1">
            <ul><li><Link className="a1" aria-current="page" to="/signin">Login</Link></li></ul>
            </div>
            <div className="nav2">
            <ul><li><Link className="a1" to="/signup">Sign Up</Link></li></ul>
            </div>
            </>
                )
        }
    }

  return (
    <>
        <div className="container1">
            <RenderMenu />            
        </div>
        
    </>
  )
}
