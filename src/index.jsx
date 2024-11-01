import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Make sure this matches your file structure

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure you have a div with id="root" in your index.html
);