import { createStore, combineReducers, applyMiddleware } from "redux";
import AuthReducer from "./reducer/AuthReducer";
import { thunk } from "redux-thunk";

const RootReducer = combineReducers({
  Auth: AuthReducer,
});
const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
