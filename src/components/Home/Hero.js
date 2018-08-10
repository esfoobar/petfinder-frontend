import React from 'react';
import styled from 'styled-components';
import HeaderBG from './images/headerbg.jpg';

const HeroContainer = styled.div`
  background-image: url(${HeaderBG});
  display: flex;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: 130vw;
  background-position: left -15vw top -18vh;
  align-items: center;
  @media (max-width:500px) {
    background-size: auto;
    background-position: 0;
    height: auto;
  }
`;

const HeadingContainer = styled.div`
  flex-basis: 35vw;
  margin-left: 10vw;
  @media (max-width:500px) {
    text-align: center;
    flex: 1;
    margin: auto;
    padding: 30px;
  }
`;

class Hero extends React.Component {
  render() {
    return(
      <HeroContainer>
        <HeadingContainer>
          <div className="heading">
            <h1>Give Them a Nice Home.</h1>
          </div>
          <div className="subheading">
            <p>
              Petfinder is an online, searchable database of animals who need homes.
              It is also a directory of nearly 11,000 animal shelters and adoption
              organizations across the U.S.
            </p>
          </div>
        </HeadingContainer>
      </HeroContainer>
    )
  }
}

export default Hero
