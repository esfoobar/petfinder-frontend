import React from 'react';
import styled from 'styled-components';

const PetContainer = styled.div`
  display: flex;
  width: 25vw;
  height: 30vh;
  background-color: lightgray;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

class LatestPetItem extends React.Component {
  render() {
    return(
      <div>
        <PetContainer>
          <div className="photo">

          </div>
          <div className="petName">Peter</div>
          <div className="petSpecies">Snake</div>
          <div className="description">
            <p>
              Peter is very kind, and it loves to jump over the fences and get stuck.
            </p>
          </div>
          <button>Adopt</button>
        </PetContainer>
      </div>
    )
  }
}

export default LatestPetItem
