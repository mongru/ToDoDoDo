import { combineReducers, createStore } from "redux";
import todoListApp from "./reducers/";

const reducers = combineReducers({
  todoListApp
});

export default createStore(
  reducers
  /* Uncomment line below to enable redux devtools */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
