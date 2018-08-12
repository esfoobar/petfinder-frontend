const pets = [
  {
    photo: "pet1",
    name: "Pepe",
    species: "Cat",
    description: "Peter is very kind, and it loves to jump over the fences and get stuck."
  },
  {
    photo: "pet2",
    name: "Neymar",
    species: "Dog",
    description: "Neymar is very kind, and it loves to throw its own fleas to people passing by."
  },
  {
    photo: "pet3",
    name: "Daniella",
    species: "Parrot",
    description: "Daniella is very kind, and it loves to sing politically-wrong songs."
  }
]

import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

const initialState = {
  pets: pets
};

const rootReducer = (state = initialState, action) => state;
export default rootReducer;
