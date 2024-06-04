import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ReservationForm.css';

const ReservationForm = () => {
  const { restaurantId } = useParams(); // Récupérer l'ID du restaurant à partir des paramètres de l'URL

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfGuests: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!userId || !token) {
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/reservations', {
        ...formData,
        userId, // Inclure l'ID de l'utilisateur connecté
        restaurantId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert('Réservation réussie !');
      setFormData({
        date: '',
        time: '',
        numberOfGuests: '',
        phone: ''
      });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la réservation !', error);
      alert('Échec de la réservation.');
    }
  };

  return (
    <div className="reservation-form">
      <h2>Effectuer une réservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Heure :</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfGuests">Nombre de convives :</label>
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Téléphone :</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default ReservationForm;
