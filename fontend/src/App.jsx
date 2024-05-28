import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/signup/SignupForm';
import RestaurantList from './components/Restaurant/Restaurant';
import Dashboard from './components/Dashboard/Dashboard';
import MemberManagement from './components/Dashboard/MemberManagement';
import PartnerManagement from './components/Dashboard/PartnerManagement';
import ReservationPlanning from './components/Dashboard/Planning';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/membermanagement" element={<MemberManagement />} />
          <Route path="/partnermanagement" element={<PartnerManagement  />} />
          <Route path="/reservationplanning" element={<ReservationPlanning  />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;