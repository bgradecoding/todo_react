import { combineReducers } from "redux";
import user from "./users/reducers";
import common from "./common/reducers";
import todo from "./todo/reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    common,
    todo,
  });

export { createRootReducer };
