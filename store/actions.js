
import superagent from 'superagent';

export const savedPal = card => {
  // console.log(card, ' ✅⭐️');
  return {
    type: 'SAVED',
    payload: card
  }
};


export const getPets = () => async (dispatch, getState) => {
  const { pets: { offset, zip } } = getState();
  console.log(offset, zip, ' 🈯️');


  // let count
  const data = await superagent.get(`http://api.petfinder.com/pet.find?key=NOKEY!!!!&format=json&location=${zip}&output=full&animal=dog&count=50`)
  console.log('😎 start', zip, ' 😎 😎 😎 😎 😎 😎 😎 😎 😎')
  dispatch({
    type: 'GET_PETS',
    payload: data.body.petfinder.pets.pet,
    offset: data.body.petfinder.lastOffset.$t
  })
}


export const removeCard = () => (dispatch, getState) => {
  // issue with api offset functionality :(
  // const { pets: { cardsLeft } } = getState()
  // console.log('in remvoedcard', cardsLeft);
  // if (cardsLeft <= 23) {
  //   console.log('fetching new data');
  //   dispatch(getPets());
  // }

  // dispatch({
  //   type: 'REMOVE_CARD',
  // })

}

export const saveZip = zip => {
  return {
    type: "SAVE_ZIP",
    payload: zip
  }
}
