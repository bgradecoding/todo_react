import * as ActionTypes from "../../data/rootActionType";
import apis from "../../services/apis/user";
import { LoginForm, LoginResult } from "type/user/user";
import * as Util from "../../util/Util";
import * as actions from "../rootActions";
import { setToken } from "../../services/apis/client";

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

      const response: LoginResult = await apis.login(loginParam);

      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { ...response, isLogined: true },
      });
      setToken(response.accesToken);
      //login success 이후 토큰을 localStorage에 저장한다.
      Util.setLocalStorage("token", response.accesToken);

      await dispatch({ type: ActionTypes.LOADING_END });
      await dispatch(actions.todo.getTodo);
      await callback("/todo");
    } catch (error: any) {
      dispatch({ type: ActionTypes.LOADING_END, payload: error });
    }
  };
