import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components"
import Useractions from "./Useractions";
import Logo from "../img/logo-no-background.png"



export default function Header() {
  const MainHeader = styled.section`
  text-decoration: none;
  background-color: #d6ebff;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
    padding: 0 4.8rem;
    height: 4rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo{
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: xx-large;
      font-family: 'Caveat', cursive;
      text-decoration: none;
      .logo-text{
        color: #106932;
      }
    }
  `;
  return (
    <MainHeader>
      <NavLink className={"nav-logo"} to={"/"}>
        <img height={"50px"} src={Logo} alt="" />
        <div className="logo-text">gocart</div>
      </NavLink>
      <Navbar />
      <Useractions />
      
    </MainHeader>
  )
}
