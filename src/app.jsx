
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Catalog from './components/Catalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;