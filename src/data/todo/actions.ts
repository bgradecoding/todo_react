import * as ActionTypes from "../rootActionType";
import apis from "../../services/apis/todo";
import { TodoResult } from "type/todo";

export const getTodo = () => async (dispatch: any) => {
  dispatch({ type: ActionTypes.LOADING_START });
  try {
    const response: Array<TodoResult> = await apis.getTodos();
    await dispatch({ type: ActionTypes.GET_TODO_SUCCESS, payload: response });
    await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error: any) {
    dispatch({ type: ActionTypes.GET_TODO_FAILURE, payload: error });
  }
};
