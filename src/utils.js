// const axios = require('axios');
import axios from 'axios';
const url = 'http://localhost:3000/people'



const getPeopleFetch = () => {
  return fetch(url)
  .then( response => response.json())
  .then( data => {return data})
}

const getPeopleAxios = async () => {
  let response = await axios(url);
  return response.data;
}
getPeopleFetch()
export { getPeopleFetch, getPeopleAxios }
