import axios from 'axios';

export default axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '388b10ed28msh2b3154859102086p1c9a2fjsn4d57e652d87e'
  }
});
