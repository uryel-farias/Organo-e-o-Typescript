import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // a esclamaçã garante que o getElementeById vai retornar alguma coisa.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);