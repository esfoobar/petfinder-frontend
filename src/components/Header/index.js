import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Logo from './images/pf-logo.png'
import HamburgerIcon from './images/hamburger-menu.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 114px;
  background-color: white;
  padding: 0px 60px 0px 60px;
  flex: 1;
  @media (max-width:420px) {

  }
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const NavbarLink = styled(NavLink)`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  text-align: center;
  color: #4a4a4a;
  text-decoration: none;
  margin-left: 73px;
  @media (max-width:420px) {

  }
  &:hover {
    color: #4a90e2;
  }
`;

const CollapsedMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`;

const ClearButton = styled.button`
    background: none;
    width: auto;
    height: auto;
`;

const CollapsedMenuIcon = styled.img`
  width: 18px;
  height: 13px;
`;

const CollapsedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  position: absolute;
  width: auto;
  height: auto;
  margin-right: 0px;
  top: 80px;
  padding: 30px 70px 30px 70px;
  border: 1px solid lightgray;
  z-index: 1;
`;

const CollapsedNavbarLink = styled(NavLink)`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  text-align: center;
  color: #4a4a4a;
  text-decoration: none;

  flex: 1;

  &:hover {
    color: #4a90e2;
  }
`;

const onClick = () => {
  alert("hello")
}

const Header = props => (
  <div>
    <Container>
      <LogoContainer>
        <img src={ Logo } width="130vw" />
      </LogoContainer>
      <NavbarContainer>
        <NavbarLink to="/">Search</NavbarLink>
        <NavbarLink to="/">Login</NavbarLink>
        <NavbarLink to="/">Register</NavbarLink>
      </NavbarContainer>
      <CollapsedMenuContainer>
        <CollapsedMenuIcon src={ HamburgerIcon } onClick={onClick} href="#" />
        <CollapsedMenu>
          <CollapsedNavbarLink to="/">Search</CollapsedNavbarLink>
          <hr></hr>
          <CollapsedNavbarLink to="/">Login</CollapsedNavbarLink>
          <hr></hr>
          <CollapsedNavbarLink to="/">Register</CollapsedNavbarLink>
        </CollapsedMenu>
      </CollapsedMenuContainer>
    </Container>
  </div>
)

export default Header
