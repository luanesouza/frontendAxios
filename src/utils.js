// const axios = require('axios');
import axios from 'axios';
const url = 'http://localhost:3000/people'



const getPeopleFetch = () => {
  return fetch(url)
  .then( response => response.json())
  .then(data => data)
}

const getPeopleAxios = async () => {
  const response = await axios(url)

  return response.data
}

const postPersonAxios = (data) => {
  const response = axios.post(url, data)
  console.log(response);
}

const deletePersonAxios = async () => {
  const response = await axios.delete(`${url}/10`)
  console.log(response);
}

const updatePersonAxios = async (newData) => {
  try {
    const response = await axios.put(`${url}/11`, newData)
    console.log(response);
  } catch(error){
    console.error(error);
  }
}

// let newData = {
//   image_url: 'https://upload.wikimedia.org/wikipedia/en/c/cc/James_Reeb.jpg'
// }
//
// updatePersonAxios(newData)

// deletePersonAxios()

// UPDATE: Reeb (picture)
// DELETE: Harriet


// let data = {
//
//   name: 'Tatyana Fazlalizadeh',
//
//   bio: 'is an American artist, activist, and freelance illustrator. She is best known as the creator of the campaign and art exhibition Stop Telling Women to Smile',
//
//   image_url: 'https://images.squarespace-cdn.com/content/v1/566ca3e51115e0874922e571/1527697769922-9IYXS5CLRRRSNFQI2LPD/ke17ZwdGBToddI8pDm48kBXfl9523PPCMjiJNCtOhKtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx099H1iDMs77VbX2wfrKeigECPMbG3kEu0b-ipHJs1wyNrL1545Wed7woU4xgzO5Q/static1.squarespace.jpg',
//
//   dob: 'October 12, 1985'
// }
//
// postPersonAxios(data)


export { getPeopleFetch, getPeopleAxios }
