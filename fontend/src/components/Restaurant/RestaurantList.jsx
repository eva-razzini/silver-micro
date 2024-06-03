import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationForm from '../Reservation/ReservationForm';
import './RestaurantList.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, []);

  const handleReserve = (restaurantId) => {
    setSelectedRestaurant(restaurantId);
  };

  return (
    <div>
      <h1>Liste des Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <div>
             <img src={restaurant.imageUrl} alt={restaurant.title} /> 
            </div>
            <div class="inforesto">
            <h2>{restaurant.title}</h2>
            <p>{restaurant.description}</p>
            <button onClick={() => handleReserve(restaurant._id)}>Réserver</button>              
            </div>
          </li>
        ))}
      </ul>
      {selectedRestaurant && <ReservationForm restaurantId={selectedRestaurant} />}
    </div>
  );
};

export default RestaurantList;
