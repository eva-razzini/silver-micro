import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation programmable
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  useEffect(() => {
    axios.get('http://localhost:3000/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des restaurants !', error);
      });
  }, []);

  const handleReserve = (restaurantId) => {
    navigate(`/reservationform/${restaurantId}`); // Naviguer vers le formulaire de réservation avec l'ID du restaurant
  };

  return (
    <div className="listerestaurant">
      <h1>Liste des Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <div>
              <img src={restaurant.imageUrl} alt={restaurant.title} />
            </div>
            <div className="inforesto">
              <h2>{restaurant.title}</h2>
              <p>{restaurant.description}</p>
              <button onClick={() => handleReserve(restaurant._id)}>Réserver</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
