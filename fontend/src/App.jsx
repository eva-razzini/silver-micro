import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignupForm />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
