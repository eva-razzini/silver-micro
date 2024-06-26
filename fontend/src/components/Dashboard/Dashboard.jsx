import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul class="dashliste">
          <li ><Link to="/partnermanagement">Manage Restaurants</Link></li>
          <li ><Link to="/membermanagement">Manage Members</Link></li>
          <li ><Link to="/reservationplanning">Reservation Planning</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
