import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import AppProvider from './context/AppProvider';
import './index.css';
import './fontawesome';
import routes from './routes/Router';
import moment from "moment"; 
window.moment = moment;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes}/>
      </AppProvider>
  </React.StrictMode>,
)