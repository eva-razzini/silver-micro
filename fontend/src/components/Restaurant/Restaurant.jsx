import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);

    // Méthode pour récupérer la liste des restaurants depuis le backend
    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('/api/restaurants');
            setRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div>
            <h2>Liste des Restaurants</h2>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant._id}>
                        <h3>{restaurant.title}</h3>
                        <p>{restaurant.description}</p>
                        <img src={restaurant.imageUrl} alt={restaurant.title} />
                        {/* Ajoutez ici un bouton pour réserver le restaurant */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;
