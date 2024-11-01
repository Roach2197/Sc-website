import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App'; // Ensure the path and filename are correct
import './index.css'; // Optional, if you have a CSS file

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);