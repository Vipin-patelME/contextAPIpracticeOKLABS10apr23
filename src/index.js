import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const detailContext = createContext()

const details = {
  name:"Vipin",
  surName:"Patel",
  age:26,
  place:"Satna"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <detailContext.Provider value={details}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </detailContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
