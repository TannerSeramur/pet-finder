
let initialState = {
  savedPals: [],
  allPals: [],
  cards: [],
  offset: 0,
  cardsLeft: 25,
  zip: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "SAVED":
      return { ...state, savedPals: [...state.savedPals, action.payload] }

    case "GET_PETS":
    for(let i = 0; i < action.payload.length; i++){
     action.payload[i].photos.length > 0 ? 
     state = { ...state, allPals: [...state.allPals, action.payload[i]] } : 
     state =  { ...state }
    }
    return state;


    case "REMOVE_CARD":
      return { ...state, cardsLeft: state.cardsLeft - 1 }

    case 'SAVE_ZIP':
      return { ...state, zip: action.payload }

    default:
      return state;
  }
};