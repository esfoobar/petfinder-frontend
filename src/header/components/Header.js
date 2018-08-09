import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../images/pf-logo.png'

const Container = styled.div`
  background-color: white;
  display: flex;
  padding: 20px 30px 20px 30px;
`;

const LogoContainer = styled.div`
  flex: 2;
`;

const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavbarLink = styled(NavLink)`
  flex: 1fr;
  text-align: center;
  font-family: sans-serif;
  font-size: 1em;
  color: gray;
  text-decoration: none;
  margin-left: 20px;
`;

class Header extends React.Component {
  render() {
    return(
      <Container>
        <LogoContainer>
          <img src={ Logo } />
        </LogoContainer>
        <NavbarContainer>
          <NavbarLink to="/">
            Login
          </NavbarLink>
          <NavbarLink to="/">
            Register
          </NavbarLink>
          <NavbarLink to="/">
            Search for Pets
          </NavbarLink>
        </NavbarContainer>
      </Container>
    )
  }
}

export default Header
