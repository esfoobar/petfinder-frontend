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

const LatestPets = props => (
  <div>
    <Title>Latest Pets</Title>
    <PetItemContainer>
      {props.pets.map(pet => (
        <PetCard
          petPhoto={pet.photo}
          petName={pet.name}
          petSpecies={pet.species}
          petDescription={pet.description}
        />
      ))
    }
    </PetItemContainer>
  </div>
)

export default LatestPets
