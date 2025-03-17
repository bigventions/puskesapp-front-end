import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./context/AppProvider.jsx";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/Router.jsx";
import store from "./stores/Store.js";
import "./index.css";
import "./fontawesome.js";

window.moment = moment;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
);
