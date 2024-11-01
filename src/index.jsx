import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure this matches your file structure
import './index.css'; // If you have a CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure you have a div with id="root" in your index.html
);