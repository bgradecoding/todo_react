import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import user from "./users/reducers";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    user,
  });

export { createRootReducer };
