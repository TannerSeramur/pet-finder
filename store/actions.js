export const savedPal = card => {
  console.log(card, ' ✅⭐️');
  return {
    type: 'SAVED',
    payload: card
  }
};


export const getPets = zip => async dispatch => {
  console.log('hit 🔥', zip);





  const data = await fetch(`http://api.petfinder.com/pet.find?key=${process.env.REACT_APP_API_KEY}&location=${zip}&format=json&output=full`)

  console.log(data, ' 😎')

  dispatch({
    type: 'GET_PETS',
    payload: data.data
  })
}