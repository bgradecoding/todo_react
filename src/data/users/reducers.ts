import * as ActionTypes from "../../data/rootActionType";
import { UserInfo } from "type/user/user";

const initialState: UserInfo = {
  userData: {
    email: "",
    password: "",
    nickname: "",
    accesToken: "",
    refreshToken: "",
    isLogined: false,
  },
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return action.user;
    case ActionTypes.LOGIN_SUCCESS:
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
