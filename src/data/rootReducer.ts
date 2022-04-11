import { combineReducers } from "redux";
import user from "./users/reducers";
import common from "./common/reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    common,
  });

export { createRootReducer };
