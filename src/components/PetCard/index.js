import React from 'react';
import styled from 'styled-components';

const PetContainer = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  margin-bottom: 21px;
  @media (max-width: 420px){

  }
`;

const PetPhotoContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 204px;
  height: 204px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border: solid 4px #e6e6e6;
  border-radius: 50%;
`;

const PetInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const PetName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: bolder;
  line-height: 1.25;
  color: #4b4b4b;
  margin-right: 10px;

  flex: 1;
`;

const PetSpecies = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
  font-style: italic;
  font-weight: lighter;
  line-height: 1;
  color: #4b4b4b;

  flex: 1;
`;

const PetDescription = styled.div`
  width: 80%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #4b4b4b;
  margin-bottom: 20px;

  flex: 1;
`;

const PetCard = props => (
  <div>
    <PetContainer>
      <PetPhotoContainer>
        <Img src={ props.petPhoto } />
      </PetPhotoContainer>
      <PetInfo>
        <PetName>{ props.petName }</PetName>
        <PetSpecies>{ props.petSpecies }</PetSpecies>
      </PetInfo>
      <PetDescription>
        <p>
          { props.petDescription }
        </p>
      </PetDescription>
      <button>Adopt</button>
    </PetContainer>
  </div>
)

export default PetCard
