import React from 'react';
import styled from 'styled-components';
import LatestPetItem from './LatestPetItem';

import Pet1 from '../images/pets/cat.png';
import Pet2 from '../images/pets/dog.jpg';
import Pet3 from '../images/pets/parrot.jpg';

let Pet1Object = {
  petPhoto: Pet1,
  petName: 'Pepe',
  petSpecies: 'Cat',
  petDescription: 'Peter is very kind, and it loves to jump over the fences and get stuck.'
};

let Pet2Object = {
  petPhoto: Pet2,
  petName: 'Neymar',
  petSpecies: 'Dog',
  petDescription: 'Neymar is very kind, and it loves to throw its own fleas to people passing by.'
};

let Pet3Object = {
  petPhoto: Pet3,
  petName: 'Daniella',
  petSpecies: 'Parrot',
  petDescription: 'Daniella is very kind, and it loves to sing politically-wrong songs.'
};

const Title = styled.h2`
  margin-left: 10vw;
  margin-top: 5vh;
`;
const PetItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
          <LatestPetItem
            petPhoto={Pet1Object.petPhoto}
            petName={Pet1Object.petName}
            petSpecies={Pet1Object.petSpecies}
            petDescription={Pet1Object.petDescription}
          />
          <LatestPetItem
            petPhoto={Pet2Object.petPhoto}
            petName={Pet2Object.petName}
            petSpecies={Pet2Object.petSpecies}
            petDescription={Pet2Object.petDescription}
          />
          <LatestPetItem
            petPhoto={Pet3Object.petPhoto}
            petName={Pet3Object.petName}
            petSpecies={Pet3Object.petSpecies}
            petDescription={Pet3Object.petDescription}
          />
        </PetItemContainer>
      </div>
    )
  }
}

LatestPetsComponent.defaultProps = {};
export default LatestPetsComponent
