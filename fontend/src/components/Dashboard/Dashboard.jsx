import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/partnermanagement">Manage Restaurants</Link></li>
          <li><Link to="/membermanagement">Manage Members</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
