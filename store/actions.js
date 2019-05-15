
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
  const PFURL =  `https://api.petfinder.com/v2/animals?type=dog&location=${zip}&limit=100`;
  console.log('offset ',offset);

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
    console.log('line 33')
    return superagent.get(PFURL)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {

        console.log(response.body.animals[0]);
        dispatch({
          type: 'GET_PETS',
          payload: response.body.animals,
        })
      })

  })
}
        
      // .then(response => {

      

      //   response.body.animals.forEach(animal => {
      //     console.log(animal.photos[0].full);
      //   })
      //   .catch(error => console.error(error));

      // })

  // let url = ``;
  // const data = await superagent.get(url)
  // dispatch({
  //   type: 'GET_PETS',
  //   payload: data.body.petfinder.pets.pet,
  //   offset: data.body.petfinder.lastOffset.$t
  // })



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


/*
curl -d "grant_type=client_credentials&client_id=rNlTTAp5PATN74wcfiYW1s5uxF0j3HYjRX3jdM1hX514PJIikO&client_secret=ZDoximU9qEVXFArevQFTKyAqDF7ahhOX9ZkwF4Qr" https://api.petfinder.com/v2/oauth2/token


curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4YjA5N2VlNjA4OGY2MzFlZmUwOWM5OWU0YTRmMzI2YWI0NTM4N2U3ZTdlNmVkY2VkMjM1NjhiMjI0MzJkOTdjZTZiMTk3NzJlYjYzZTY3In0.eyJhdWQiOiJyTmxUVEFwNVBBVE43NHdjZmlZVzFzNXV4RjBqM0hZalJYM2pkTTFoWDUxNFBKSWlrTyIsImp0aSI6IjI4YjA5N2VlNjA4OGY2MzFlZmUwOWM5OWU0YTRmMzI2YWI0NTM4N2U3ZTdlNmVkY2VkMjM1NjhiMjI0MzJkOTdjZTZiMTk3NzJlYjYzZTY3IiwiaWF0IjoxNTU3ODcxMzY1LCJuYmYiOjE1NTc4NzEzNjUsImV4cCI6MTU1Nzg3NDk2NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.S0qGeOLNlMjx4h0EuQBYvenvgsqGUYD8MfUFakIIY34E-DcwjZvLvXlXOmI5jKyFp_0ZUrYNl9q4n5FTpbl1VNOYavv0Gd_Lpi6_skBUSG8vtZXALc96q1LfSz5BVCIPkvbffdUqkqppzIt5o3fjrPU0LJUDuK1jc5jier_JZGAPC-69vINSu_MAem4p9kxu5KWtY18mnJqqyr7PSxqkGoFEZM-WhXGqelapU82Wc2CQmbXMVv3XyV1iQUl6pbgnGx_756b4AMUAfVItdh6eEqIm2KYheTCTxyJ0lfiLfDRgFr7lWCiBXx4VkNNwFVQqCUPTUCvJkwwR2Kt7lb4YPA" GET https://api.petfinder.com/v2/animal?type=dog&location=98103"

*/