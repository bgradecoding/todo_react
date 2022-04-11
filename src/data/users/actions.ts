import * as ActionTypes from "../../data/rootActionType";
import apis from "../../services/apis/user";
import { LoginForm } from "type/user/user";

export const signup = (formData: any) => async (dispatch: any) => {
  dispatch({ type: ActionTypes.SIGNUP_REQUEST });
  try {
    const response = await apis.signup(formData);
    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: ActionTypes.SIGNUP_FAILURE, payload: error });
  }
};

export async function logout(dispatch: any) {
  dispatch({ type: ActionTypes.RESET_AUTH });
}

export const login =
  (loginParam: LoginForm, callback: Function) => async (dispatch: any) => {
    try {
      dispatch({ type: ActionTypes.LOADING_START });

      const response = await apis.login(loginParam);

      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { ...response, isLogined: true },
      });

      await dispatch({ type: ActionTypes.LOADING_END });
      await callback("/todo");
    } catch (error: any) {
      dispatch({ type: ActionTypes.LOADING_END, payload: error });
    }
  };
