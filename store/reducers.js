let initialState = { savedPals: [], allPets: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVED":
      return { ...state, savedPals: [...state.savedPals, action.payload] }

    default:
      return state;
  }
};