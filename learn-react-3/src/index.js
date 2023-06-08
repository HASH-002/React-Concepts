import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /*
    First of all, because of StrictMode we can see Component mounting twice (unmounting once) with useEffect hook
    (console.log() in Text.jsx) This Happens because StrictMode will check the component once then it will mount it
    for the user
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
