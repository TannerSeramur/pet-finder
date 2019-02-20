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
      // console.log('⭐️', action.payload, '⭐️');
      return { ...state, savedPals: [...state.savedPals, action.payload] }
    case "GET_PETS":
      console.log('👻');
      // console.log('❎ seramuryet', action.payload, ' seramuryeet ✅');
      return { ...state, allPals: [...state.allPals, ...action.payload], offset: state.offset + Number(action.offset) };
    case "REMOVE_CARD":
      return { ...state, cardsLeft: state.cardsLeft - 1 }
    case 'SAVE_ZIP':
      return { ...state, zip: action.payload }
    default:
      return state;
  }
};