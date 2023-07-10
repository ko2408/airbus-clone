import React from 'react';

const FlightDetails = ({ flight }) => {
  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Destination: {flight.destination}</p>
    </div>
  );
};

export default FlightDetails;