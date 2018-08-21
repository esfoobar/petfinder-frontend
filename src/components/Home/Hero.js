import React from 'react';
import styled from 'styled-components';
import HeaderBG from './images/headerbg.png';

const HeroContainer = styled.div`
  height: 60vh;
  background-image: url(${HeaderBG});
  background-position: 100% top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  flex: 1;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    background-position: 50% top;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    background-image: none;
    background-color: #edede7;
    height: 30vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    background-image: none;
    background-color: #edede7;
    height: 30vh;
  }
`;

const HeadingContainer = styled.div`
  padding: 10vw;
  flex: 1;
  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
  }
`;

const Hero = props => (
  <HeroContainer>
    <HeadingContainer>
      <h1>Give them a nice home.</h1>
      <h3>
        <span>Petfinder is an online, searchable database of animals who need homes.</span>
        <span className="extendedContent">
          It is also a directory of nearly 11,000 animal shelters and adoption
          organizations across the U.S.
        </span>
      </h3>
    </HeadingContainer>
    <div className="box"></div>
  </HeroContainer>
)

export default Hero
