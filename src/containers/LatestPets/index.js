import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import PetCard from '../../components/PetCard';
import { getLatestPets } from './actions'
import { GET_LATEST_PETS } from './constants'

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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('getting pets')
    this.props.getLatestPets()
  }

  render () {
    console.log('rendering pet item container')
    return (
      <div>
        <Title>Latest Pets</Title>
        <PetItemContainer>
          { this.props.pets.map(pet => (
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
  }
}

const mapStateToProps = state => {
  return {
    pets: state.latestPetsReducer.pets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLatestPets: () => dispatch({ type: GET_LATEST_PETS })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPets)
