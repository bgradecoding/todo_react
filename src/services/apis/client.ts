import axios from "axios";
import * as Util from "../../util/Util";

const SOCIAL_SERVER_URL = "https://todo-pre.herokuapp.com";

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
});

const token: string | null = Util.getLocalStorage("token");

export const authHeader = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export { socialApiClient };
