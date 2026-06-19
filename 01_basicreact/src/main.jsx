import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App';

console.log('main.jsx loaded, mounting app...');
const root = ReactDom.createRoot(document.getElementById('root'));
console.log('Root element found, rendering App...');
root.render(
  
    <App />

);
console.log('App rendered successfully!');
