import React, { useState } from 'react';
import FlightSearchForm from '../components/FlightSearchForm';
import FlightList from '../components/FlightList';
import { getFlights } from '../services/flightService';
import './Home.css';

const Home = () => {
  const [flights, setFlights] = useState([]);

  const searchFlights = (origin, destination, date) => {
    getFlights(origin, destination, date)
      .then((data) => setFlights(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="home">
      <h1>Welcome to Punto de Pago Air</h1>
      <FlightSearchForm onSearch={searchFlights} />
      {flights.length > 0 && <FlightList flights={flights} />}
    </div>
  );
};

export default Home;
