import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, for global styles (if any)
import App from './App'; // Import the App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing

// The root element where React will render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside Router
root.render(
  <Router>
    <App /> {/* The main app component */}
  </Router>
);

