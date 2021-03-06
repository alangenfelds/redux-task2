import * as actionTypes from './actions';

const initialState = {
  persons: []
};

// REDUCER
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_PERSON:
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
    }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        };

    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter( (item) => item.id !== action.id)
      return {
        ...state,
        persons: updatedArray
    };

    default:
      return state;
  }
  
};

export default reducer;
