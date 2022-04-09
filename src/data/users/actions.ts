import * as ActionTypes from "../../data/rootActionType";
import apis from "../../services/apis/user";
import { LoginForm } from "type/user/user";

export const signup = (formData: any) => async (dispatch: any) => {
  dispatch({ type: ActionTypes.SIGNUP_REQUEST });
  try {
    const response = await apis.signup(formData);
    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: ActionTypes.SIGNUP_FAILURE, payload: error });
  }
};

export async function logout(dispatch: any) {
  dispatch({ type: ActionTypes.RESET_AUTH });
}

export const login = (loginParam: LoginForm) => async (dispatch: any) => {
  try {
    const response = await apis.login(loginParam);
    await dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: { ...response, isLogined: true },
    });
  } catch (error: any) {
    alert(error.message);
  }
};
