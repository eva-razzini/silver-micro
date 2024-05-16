import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';
import RestaurantList from './components/Restaurant/Restaurant';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
