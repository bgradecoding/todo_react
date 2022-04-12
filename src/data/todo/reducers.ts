import * as ActionTypes from "../rootActionType";
import { TodoState } from "type/todo/";

const initialState: TodoState = {
  todo: [],
};

export default function todo(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_TODO_SUCCESS:
      return { todo: action.payload };
    case ActionTypes.GET_TODO_FAILURE:
      return { ...state, userData: action.payload };
    case ActionTypes.LOGIN_FAILURE:
      return action.user;
    case ActionTypes.SIGNUP_SUCCESS:
      return action.user;
    case ActionTypes.RESET_AUTH:
      return {};
    case ActionTypes.SIGNUP_SUCCESS:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
