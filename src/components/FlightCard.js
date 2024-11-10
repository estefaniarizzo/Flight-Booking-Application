import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <h2>{flight.origin} - {flight.destination}</h2>
      <p>Date: {flight.date}</p>
      <p>Duration: {flight.duration}</p>
      <p>Price: ${flight.price}</p>
    </div>
  );
};

export default FlightCard;
