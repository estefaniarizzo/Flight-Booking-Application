import React from 'react';
import FlightCard from './FlightCard';
import './FlightList.css';

const FlightList = ({ flights }) => {
  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
