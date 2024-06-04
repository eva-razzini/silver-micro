import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import MemberManagement from './components/Dashboard/MemberManagement';
import PartnerManagement from './components/Dashboard/PartnerManagement';
import ReservationPlanning from './components/Dashboard/Planning';
import Navbar from './components/Navbar/Navbar';
import RestaurantList from './components/Restaurant/RestaurantList';
import UserReservations from './components/UserReservations/UserReservations';
import ReservationForm from './components/Reservation/ReservationForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/membermanagement" element={<MemberManagement />} />
          <Route path="/partnermanagement" element={<PartnerManagement  />} />
          <Route path="/reservationplanning" element={<ReservationPlanning  />} />
          <Route path="/userreservations" element={<UserReservations  />} />
          <Route path="/reservationform/:restaurantId" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
