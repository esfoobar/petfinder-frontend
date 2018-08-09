import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../images/pf-logo.png'

const Container = styled.div`
  background-color: white;
  display: flex;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const NavbarContainer = styled.div`
  flex: 1;
`;

const NavbarLink = styled.div`
  flex: 1;
  flex-direction: row;
`;

class Header extends React.Component {

  render() {
    return(
      <Container>
        <LogoContainer>
          <img src={ Logo } />
        </LogoContainer>
        <NavbarContainer>

          <NavbarLink>
            <Link to="/">Login</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to="/about">Register</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to="/topics">Search for pets</Link>
          </NavbarLink>

        </NavbarContainer>
      </Container>
    )
  }
}

export default Header
