import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Logo from './images/pf-logo.png'
import CollapsedMenu from './images/hamburger-menu.png'

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
  justify-content: flex-end;
  flex: 1;
  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`;

const Header = props => (
  <Container>
    <LogoContainer>
      <img src={ Logo } width="130vw" />
    </LogoContainer>
    <NavbarContainer>
      <NavbarLink to="/">
        Search
      </NavbarLink>
      <NavbarLink to="/">
        Login
      </NavbarLink>
      <NavbarLink to="/">
        Register
      </NavbarLink>
    </NavbarContainer>
    <CollapsedMenuContainer>
      <img src={ CollapsedMenu } />
    </CollapsedMenuContainer>
  </Container>
)

export default Header
