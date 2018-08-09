import React from 'react';
import styled from 'styled-components';
import LatestPetItem from './LatestPetItem';

import Pet1 from '../images/pets/cat.png';
import Pet2 from '../images/pets/dog.jpg';
import Pet3 from '../images/pets/parrot.jpg';

const Title = styled.h2`
  margin-left: 10vw;
  margin-top: 5vh;
`;
const PetItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10vw;
  padding-right: 10vw;
`;

class LatestPetsComponent extends React.Component {
  render() {
    return(
      <div>
        <Title>Latest Pets</Title>
        <PetItemContainer>
          <LatestPetItem petPhoto="{Pet1}" />
          <LatestPetItem />
          <LatestPetItem />
        </PetItemContainer>
      </div>
    )
  }
}

export default LatestPetsComponent
