import React from 'react';
import styled from 'styled-components';
import PetCard from '../PetCard';

const Title = styled.h2`
  margin-left: 10vw;
  margin-top: 5vh;
`;

const PetItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 10vw;
  padding-right: 10vw;
`;

class LatestPets extends React.Component {
  render() {
    const pet = {
        petPhoto: '',
        petName: 'Pancho',
        petSpecies: 'Dog',
        petDescription: 'Loco'
    }
    return(
      <div>
        <Title>Latest Pets</Title>
        <PetItemContainer>
          <PetCard
            petPhoto={pet.petPhoto}
            petName={pet.petName}
            petSpecies={pet.petSpecies}
            petDescription={pet.petDescription}
          />
        </PetItemContainer>
      </div>
    )
  }
}

LatestPets.defaultProps = {};
export default LatestPets
