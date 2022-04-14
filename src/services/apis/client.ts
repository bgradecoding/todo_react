import axios from "axios";
import * as Util from "../../util/Util";

const SOCIAL_SERVER_URL = "https://todo-pre.herokuapp.com";

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
});

export let token: string | null = "";

export const setToken = (newToken: string) => {
  token = newToken;
};

export const authHeader = () => {
  if (token === "" || token === undefined || token === null) {
    token = Util.getLocalStorage("token");
  }
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export { socialApiClient };
