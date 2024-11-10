import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL del backend
});

export const searchFlights = (origin, destination, date) => {
  return api.get('/flights/search', {
    params: { origin, destination, date },
  });
};
