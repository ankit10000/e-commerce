import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Useractions = () => {
    const Nav = styled.nav`
    .nav-list{
      display: flex;
      gap: 4.8rem;

      li{
        list-style: none;
        border: 2px solid black;
        padding: 8px 0px;
        border-radius: 5px;
        .nav-link{
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          color: #646464;
          font-weight: 700;
          padding: 8px 30px;
          font-size: larger;
          
          &:hover{
            color: #ffffff;
            background-color: #106932;
          }
        }
      }
    }
  `;
  return (
    <Nav>
        <div className="manuIcon">
            <ul className="nav-list">
              <li>
                <NavLink to={"/login"} className={"nav-link"}>Login</NavLink>
              </li> 
              <li>
              <NavLink to={"/register"} className={"nav-link"}>Register</NavLink>
              </li> 
              {/* <li>
              <NavLink to={"/contact"} className={"nav-link"}>Contact</NavLink>
              </li> 
              <li>
              <NavLink to={"/services"} className={"nav-link"}>Services</NavLink>
              </li>  */}
            </ul>
        </div>
    </Nav>
  )
}

export default Useractions