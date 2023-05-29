import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components"

export default function Navbar() {
  const WRAPPER = styled.section`
    .nav-list{
      display: flex;
      gap: 4.8rem;

      li{
        list-style: none;

        .nav-link{
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          color: #646464;
          font-weight: 700;
          font-size: larger;
          
          &:hover{
            color: #106932;
          }
        }
      }
    }
  `;
  return (
    <WRAPPER>
        <div className="manuIcon">
            <ul className="nav-list">
              <li>
                <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
              </li> 
              <li>
              <NavLink to={"/about"} className={"nav-link"}>About</NavLink>
              </li> 
              <li>
              <NavLink to={"/contact"} className={"nav-link"}>Contact</NavLink>
              </li> 
              <li>
              <NavLink to={"/services"} className={"nav-link"}>Services</NavLink>
              </li> 
            </ul>
        </div>
    </WRAPPER>
  )
}
