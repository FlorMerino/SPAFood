import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_API_URL } = process.env;



///para deploy
axios.defaults.baseURL= REACT_APP_API_URL || "http://localhost:3001"; //react para detectar q sea variable de entorno necesita empezar con REACT_APP
/////////////////////////////////////////////////////////////////////////////


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store= {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
