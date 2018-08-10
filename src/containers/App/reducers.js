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

import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants'

const initialState = {
  articles: []
}

const rootReducer = (state = initialState, action) => state
export default rootReducer
