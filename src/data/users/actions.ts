import * as ActionTypes from "../../data/rootActionType";
import apis from "../../services/apis/user";
import * as actions from "../rootActions";
import { LoginForm } from "type/user/user";

export const login = (loginParam: LoginForm) => async (dispatch: any) => {
  try {
    const response = await apis.login(loginParam);
    await dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: { ...response, isLogined: true },
    });
    await dispatch(actions.router.push("/todo"));
  } catch (error: any) {
    alert(error.message);
  }
};
