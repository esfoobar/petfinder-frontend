import React from 'react';
import styled from 'styled-components';

const PetContainer = styled.div`
  display: flex;
  width: 320px;
  height: auto;
  border: solid 1px lightgray;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5vh 0 0 0;
  margin-bottom: 10vh;
  @media (max-width: 420px){
    align-items: stretch;
  }
`;

const PetPhoto = styled.div`
  flex-basis: 200px;
  justify-content: center;
`;

const PetInfo = styled.div`
  flex: 1;
  padding: 2vh 5vw 2vh 5vw;
`;

const PetButton = styled.button`
  width: 200px;
  flex-basis: 50px;
  justify-content: flex-end;
  background-color: #6099cc;
  font-size: 1em;
  color: white;
  margin-bottom: 40px;
  @media (max-width: 420px){
    width: auto;
    margin-bottom: 0;
  }
`;

class PetCard extends React.Component {
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

PetCard.defaultProps = {};
export default PetCard
