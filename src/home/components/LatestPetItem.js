import React from 'react';
import styled from 'styled-components';

const PetContainer = styled.div`
  display: flex;
  width: 25vw;
  height: auto;
  border: solid 1px lightgray;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5vh 0 5vh 0;
  margin-bottom: 10vh;
  flex: 1;
`;

const PetPhoto = styled.div`
  flex-basis: 1;
  align-items: center;
`;

const PetInfo = styled.div`
  flex: 1;
  padding: 2vh 5vw 2vh 5vw;
`;

const PetButton = styled.button`
  background-color: #6099cc;
  width: 15vw;
  height: 5vh;
  font-size: 1em;
  color: white;
`;

class LatestPetItem extends React.Component {
  render() {
    return(
      <div>
        <PetContainer>
          <PetPhoto>
            <img src={ this.props.petPhoto } />
          </PetPhoto>
          <PetInfo>
            <h2>{ this.props.petName } / { this.props.petSpecies }</h2>
            <p>
              { this.props.petDescription }
            </p>
          </PetInfo>
          <PetButton>Adopt</PetButton>
        </PetContainer>
      </div>
    )
  }
}

LatestPetItem.defaultProps = {};
export default LatestPetItem
