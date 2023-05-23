import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components"

const Header = () => {
  return (
    <MainHeader>
      <NavLink className={"nav-logo"} to={"/"}>
        <img height={"50px"} src="./src/img/logo-no-background.png" alt="" />
        <div className="logo-text">gocart</div>
      </NavLink>
      <Navbar />
      
    </MainHeader>
  )
};

  const MainHeader = styled.header`
  text-decoration: none;
  background-color: #d6ebff;
  border-radius: 10px;
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

export default Header