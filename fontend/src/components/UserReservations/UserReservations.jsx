import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [numberpes, setNumberpes] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:3000/api/reservations/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reservations!', error);
      });
    }
  }, []);
  

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/reservations/${selectedReservation}`, {
      numberpes: numberpes,
      phone: phone,
      datetime: datetime
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        alert('Réservation mise à jour avec succès !');
        setReservations(reservations.map(reservation => 
          reservation._id === selectedReservation ? response.data.reservation : reservation
        ));
        setSelectedReservation(null);
      })
      .catch(error => {
        console.error('There was an error updating the reservation!', error);
      });
  };

  const handleDelete = (reservationId) => {
    axios.delete(`http://localhost:3000/api/reservations/${reservationId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        alert('Réservation supprimée avec succès !');
        setReservations(reservations.filter(reservation => reservation._id !== reservationId));
      })
      .catch(error => {
        console.error('There was an error deleting the reservation!', error);
      });
  };

  return (
    <div>
      <h1>Mes Réservations</h1>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation._id}>
            <p>Nombre de personnes: {reservation.numberpes}</p>
            <p>Téléphone: {reservation.phone}</p>
            <p>Date et heure: {new Date(reservation.datetime).toLocaleString()}</p>
            <button onClick={() => {
              setSelectedReservation(reservation._id);
              setNumberpes(reservation.numberpes);
              setPhone(reservation.phone);
              setDatetime(new Date(reservation.datetime).toISOString().slice(0, 16));
            }}>Modifier</button>
            <button onClick={() => handleDelete(reservation._id)}>Annuler</button>
          </li>
        ))}
      </ul>
      {selectedReservation && (
        <form onSubmit={handleUpdate}>
          <h2>Modifier Réservation</h2>
          <div>
            <label>Nombre de personnes:</label>
            <input type="number" value={numberpes} onChange={(e) => setNumberpes(e.target.value)} required />
          </div>
          <div>
            <label>Téléphone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <label>Date et heure:</label>
            <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} required />
          </div>
          <button type="submit">Enregistrer</button>
          <button onClick={() => setSelectedReservation(null)}>Annuler</button>
        </form>
      )}
    </div>
  );
};

export default UserReservations;