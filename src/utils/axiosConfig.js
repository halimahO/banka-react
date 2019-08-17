import axios from 'axios';

const instance = axios.create({
  API_URL: process.env.API_URL
});
export default instance;
