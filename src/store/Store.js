import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./";

const store = configureStore({
  reducer: {
    login: authReducer,
  },
});

store.subscribe();

export default store;
