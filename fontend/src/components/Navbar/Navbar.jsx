import React, { useState, useEffect } from "react";
import './Navbar.css';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Vérifie si un jeton est présent
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    window.location.reload(); // Recharger la page pour mettre à jour l'état
  };

  return (
    <div className="navbar">
      <div className="name">
        <h1>Reserv'Eat</h1>
      </div>
      {isAuthenticated ? (
        <div className="nav">
          <a href="/restaurants">Restaurant</a>
          <a href="/userreservations">Reservation</a>
          <a href="/" onClick={handleLogout}>Deconnexion</a>
        </div>
      ) : (
        <div className="nav">
          <a href="/login">Connexion</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
