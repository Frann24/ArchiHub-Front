import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import axios from "axios";

const token = window.localStorage.getItem("token")
axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.common = {"Authorization" : `x-access-token ${token}`}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>);


