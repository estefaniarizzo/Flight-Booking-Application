import React, { useState, useEffect } from 'react';
import FlightList from '../components/FlightList';
import { getAllFlights } from '../services/flightService';
import './Flights.css';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Obtener todos los vuelos al cargar el componente
    getAllFlights()
      .then((data) => setFlights(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const sortFlights = (option) => {
    const sortedFlights = [...flights];
    if (option === 'price-asc') {
      sortedFlights.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sortedFlights.sort((a, b) => b.price - a.price);
    }
    setFlights(sortedFlights);
  };

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);
    sortFlights(option);
  };

  return (
    <div className="flights">
      <h1>All Flights</h1>
      <div className="sort-options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      {flights.length > 0 ? (
        <FlightList flights={flights} />
      ) : (
        <p>No flights available at the moment.</p>
      )}
    </div>
  );
};

export default Flights;
