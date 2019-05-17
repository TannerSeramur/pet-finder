
import superagent from 'superagent';

export const savedPal = card => {
  return {
    type: 'SAVED',
    payload: card
  }
};


export const getPets = () => async (dispatch, getState) => {
  const { pets: { offset, zip } } = getState();
  const PFT = 'https://api.petfinder.com/v2/oauth2/token';
  const PFURL =  `https://api.petfinder.com/v2/animals?type=dog&location=${zip}&distance=25&status=adoptable&limit=100`;

  return superagent.post(PFT)
  .type('form')
  .send({
    grant_type: "client_credentials",
    client_id: "rNlTTAp5PATN74wcfiYW1s5uxF0j3HYjRX3jdM1hX514PJIikO",
    client_secret: "ZDoximU9qEVXFArevQFTKyAqDF7ahhOX9ZkwF4Qr"
  })
  .then( response => {
    let access_token = response.body.access_token;
    return access_token;
  })
  .then(token => {

    return superagent.get(PFURL)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        dispatch({
          type: 'GET_PETS',
          payload: response.body.animals,
        })
      })

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

