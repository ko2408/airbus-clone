import React from 'react';

const FlightList = ({ onFlightSelect }) => {
  const flights = [
    { id: 1, flightNumber: 'AB123', destination: 'New York' },
    { id: 2, flightNumber: 'CD456', destination: 'London' },
    { id: 3, flightNumber: 'EF789', destination: 'Tokyo' },
  ];

  return (
    <div className="flight-list">
      <h2>Flight List</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id} onClick={() => onFlightSelect(flight)}>
            {flight.flightNumber} - {flight.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;