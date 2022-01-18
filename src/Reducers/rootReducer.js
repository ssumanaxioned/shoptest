import { combineReducers } from "redux";
import apiReducer from "./apiReducer.js";
import workReducer from "./workReducer.js";

const rootReducer = combineReducers({
  apiReducer,
  workReducer
})

export default rootReducer;