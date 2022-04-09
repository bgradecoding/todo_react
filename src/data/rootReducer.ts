import { combineReducers } from "redux";
import user from "./users/reducers";

const createRootReducer = (history: any) =>
  combineReducers({
    user,
  });

export { createRootReducer };
