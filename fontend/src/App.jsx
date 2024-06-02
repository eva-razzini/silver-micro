import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';
import RestaurantList from './components/Restaurant/RestaurantList';
import Dashboard from './components/Dashboard/Dashboard';
import MemberManagement from './components/Dashboard/MemberManagement';
import PartnerManagement from './components/Dashboard/PartnerManagement';
import ReservationPlanning from './components/Dashboard/Planning';
import UserReservations from './components/Reservation/ReservationForm';
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
          <Route path="/userreservations" element={<UserReservations  />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;