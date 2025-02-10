import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./context/AppProvider";
import routes from "./routes/Router";
import moment from "moment";
import "./index.css";
import "./fontawesome";

window.moment = moment;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  </React.StrictMode>,
);
