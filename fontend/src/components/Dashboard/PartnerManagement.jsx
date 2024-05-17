import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartnerManagement = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });
  const [editRestaurant, setEditRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants', error);
    }
  };

  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const handleAddRestaurant = async () => {
    try {
      await axios.post('http://localhost:3000/api/restaurants', newRestaurant, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchRestaurants();
      setNewRestaurant({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding restaurant', error);
    }
  };

  const handleEditChange = (e) => {
    setEditRestaurant({ ...editRestaurant, [e.target.name]: e.target.value });
  };

  const handleUpdateRestaurant = async () => {
    try {
      await axios.put(`http://localhost:3000/api/restaurants/${editRestaurant._id}`, editRestaurant, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchRestaurants();
      setEditRestaurant(null);
    } catch (error) {
      console.error('Error updating restaurant', error);
    }
  };

  const handleDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/restaurants/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchRestaurants();
    } catch (error) {
      console.error('Error deleting restaurant', error);
    }
  };

  return (
    <div>
      <h2>Manage Restaurants</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newRestaurant.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newRestaurant.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newRestaurant.imageUrl}
          onChange={handleChange}
        />
        <button onClick={handleAddRestaurant}>Add Restaurant</button>
      </div>
      {editRestaurant && (
        <div>
          <h3>Edit Restaurant</h3>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editRestaurant.title}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={editRestaurant.description}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={editRestaurant.imageUrl}
            onChange={handleEditChange}
          />
          <button onClick={handleUpdateRestaurant}>Update Restaurant</button>
          <button onClick={() => setEditRestaurant(null)}>Cancel</button>
        </div>
      )}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <h3>{restaurant.title}</h3>
            <p>{restaurant.description}</p>
            <img src={restaurant.imageUrl} alt={restaurant.title} />
            <button onClick={() => setEditRestaurant(restaurant)}>Edit</button>
            <button onClick={() => handleDeleteRestaurant(restaurant._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerManagement;
