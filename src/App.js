import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Home from './pages/Home';
import Flights from './pages/Flights';

const App = () => {
  const [flights, setFlights] = useState([]);

  const searchFlights = (origin, destination, date) => {
    // Llamar al backend para obtener los vuelos
    fetch(`http://localhost:3000/flights/search?origin=${origin}&destination=${destination}&date=${date}`)
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home searchFlights={searchFlights} />} />
        <Route path="/flights" element={<Flights flights={flights} />} />
      </Routes>
    </Router>
  );
};

export default App;

