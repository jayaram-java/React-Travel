import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Travel/LoginPage';
import DashboardPage from './components/Travel/DashboardPage';
import TravelDetailsPage from './components/Travel/TravelDetailsPage';
import MenuBar from './components/Menu/MenuBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (uname: string) => {
    setIsLoggedIn(true);
    setUsername(uname);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      {isLoggedIn && <MenuBar username={username} onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />
          }
        />
        <Route
          path="/traveldetails"
          element={
            isLoggedIn ? <TravelDetailsPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <DashboardPage /> : <Navigate to="/" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
