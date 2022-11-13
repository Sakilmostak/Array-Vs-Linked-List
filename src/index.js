import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // accessing the dom to render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
