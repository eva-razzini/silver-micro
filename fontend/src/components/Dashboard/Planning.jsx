import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationPlanning = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/reservations', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error('Error fetching reservations', error);
      });
  }, []);

  return (
    <div>
      <h1>Reservation Planning</h1>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Restaurant</th>
            <th>Date</th>
            <th>Time</th>
            <th>Number of Guests</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation.userId.name}</td>
              <td>{reservation.restaurantId.title}</td>
              <td>{new Date(reservation.date).toLocaleDateString()}</td>
              <td>{reservation.time}</td>
              <td>{reservation.numberOfGuests}</td>
              <td>{reservation.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationPlanning;
