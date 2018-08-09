import React from 'react';
import styled from 'styled-components';
import HeaderBG from '../images/headerbg.jpg';

const HeroContainer = styled.div`
  background-image: url(${HeaderBG});
  display: flex;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: 140vw;
  background-position: left -15vw top -18vh;
  align-items: center;
`;

const HeadingContainer = styled.div`
  flex-basis: 35vw;
  margin-left: 10vw;
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
