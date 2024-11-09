import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: Add your global styles here
import Counter from './components/Counter';  // Import the Counter component

// Render the Counter component inside the root div of index.html
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
