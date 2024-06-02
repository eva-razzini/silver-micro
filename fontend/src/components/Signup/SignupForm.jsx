import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="container" id="main">
      <div class="sign-up">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div class="overlay-container">
         <div class="overlay">
           <div class="overlay-right">
             <h3>Bonjour, Nouvelle Amie</h3>
             <p>Entre tes informations personnelles et commence ton voyage avec nous</p>
             <button class="ghost" id="signUp" onClick={handleLoginClick}>
              Se Connecter ?
            </button>
           </div>
         </div>
        </div>
    </div>
    </div>
  );
};

export default SignupForm;
