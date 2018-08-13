import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Logo from './images/pf-logo.png'

const Container = styled.div`
  background-color: white;
  display: flex;
  padding: 20px 30px 20px 30px;
  justify-content: center;
  @media (max-width:420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  width:150px;
`;

const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 420px) {
    width:420px;
    flex-direction: column;
    align-items: center;
  }
`;

const NavbarLink = styled(NavLink)`
  flex-basis: auto;
  text-align: center;
  font-family: sans-serif;
  font-size: 1em;
  color: gray;
  text-decoration: none;
  margin-left: 20px;
  @media (max-width:420px) {
    display: block;
    width: 100%;
    padding: 20px;
    margin: 5px;
    background-color: #f8f8f8;
  }
  &:hover {
    color: #6099cc;
  }
`;

const Header = props => (
  <Container>
    <LogoContainer>
      <img src={ Logo } width="130vw" />
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

export default Header
