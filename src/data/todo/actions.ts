import * as ActionTypes from "../rootActionType";
import apis from "../../services/apis/todo";
import { TodoResult } from "type/todo";

export const getTodo = () => async (dispatch: any) => {
  await dispatch({ type: ActionTypes.LOADING_START });
  try {
    const response: Array<TodoResult> = await apis.getTodos();
    await dispatch({ type: ActionTypes.GET_TODO_SUCCESS, payload: response });
    await dispatch({ type: ActionTypes.LOADING_END });
  } catch (error: any) {
    dispatch({ type: ActionTypes.GET_TODO_FAILURE, payload: error });
  }
};

export const updateTodo =
  (id: number, todoStatus: string) => async (dispatch: any) => {
    await dispatch({ type: ActionTypes.LOADING_START });
    try {
      const response: string = await apis.updateTodo({
        id: id,
        todostatus: todoStatus,
      });
      await dispatch({ type: ActionTypes.UPDATE_TODO_SUCCESS });
      await dispatch({ type: ActionTypes.LOADING_END });
      await dispatch(getTodo());
    } catch (error: any) {
      dispatch({ type: ActionTypes.UPDATE_TODO_FAILURE, payload: error });
    }
  };

export const addTodo = (todoName: string) => async (dispatch: any) => {
  await dispatch({ type: ActionTypes.LOADING_START });
  try {
    const response: string = await apis.addTodo(todoName);
    await dispatch({ type: ActionTypes.ADD_TODO_SUCCESS });
    await dispatch({ type: ActionTypes.LOADING_END });
    await dispatch(getTodo());
  } catch (error: any) {
    dispatch({ type: ActionTypes.ADD_TODO_FAILURE, payload: error });
  }
};

export const deleteTodo = (id: number) => async (dispatch: any) => {
  await dispatch({ type: ActionTypes.LOADING_START });
  try {
    const response: string = await apis.deleteTodo(id);
    await dispatch({ type: ActionTypes.DELETE_TODO_SUCCESS });
    await dispatch({ type: ActionTypes.LOADING_END });
    await dispatch(getTodo());
  } catch (error: any) {
    dispatch({ type: ActionTypes.DELETE_TODO_FAILURE, payload: error });
  }
};
