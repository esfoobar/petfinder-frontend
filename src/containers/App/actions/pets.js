import { GET_LATEST_PETS,
  GET_LATEST_PETS_SUCCESS,
  GET_LATEST_PETS_ERROR } from './constants';

export function getLatestPets() {
  return {
    type: GET_LATEST_PETS
  };
}

export function getLatestPetsSuccess(pets) {
  return {
    type: GET_LATEST_PETS_SUCCESS,
    pets
  };
}

export function getLatestPetsError(error) {
  return {
    type: GET_LATEST_PETS_ERROR,
    error
  };
}
