import * as ActionTypes from "../rootActionType";
import { TodoState, TodoResult } from "type/todo/";

const initialState: TodoState = {
  todo: new Array(),
};

export default function todo(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_TODO_SUCCESS:
      return { todo: action.payload };
    case ActionTypes.GET_TODO_FAILURE:
      return { ...state, userData: action.payload };
    case ActionTypes.UPDATE_TODO_SUCCESS:
      return { ...state };
    case ActionTypes.UPDATE_TODO_FAILURE:
      return { ...state };
    case ActionTypes.ADD_TODO_SUCCESS:
      return { ...state };
    case ActionTypes.ADD_TODO_FAILURE:
      return { ...state };
    case ActionTypes.RESET_AUTH:
      return {};
    case ActionTypes.SIGNUP_SUCCESS:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
