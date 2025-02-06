import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fontawesome';
import moment from "moment";
import Main1 from './views/main1';
import Login from './views/loginPage';
import ErrorPage from './views/errorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

window.moment = moment;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main1 />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)