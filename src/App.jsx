import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing the Home component (main user table page)
import Home from './pages/Home';

// Importing the UserPage component (detailed view for individual user)
import UserPage from './pages/UserDetails';

export default function App() {
  return (
    // Define application routes using React Router
    <Routes>
      {/* Route for the home page that displays the user table */}
      <Route path="/" element={<Home />} />

      {/* Route for user details page, dynamically receives user ID from URL */}
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  );
}
