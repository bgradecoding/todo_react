import { socialApiClient } from "../client";
import { LoginForm } from "type/user/user";

const api = {
  async login(loginParam: LoginForm) {
    try {
      const res = await socialApiClient.post("/login", loginParam);
      console.log(res.data);
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },
  async signup(loginParam: LoginForm) {
    try {
      const res = await socialApiClient.post("/signup", loginParam);
      console.log(res.data);
      return res.data;
    } catch (e: any) {
      throw Error(e.message);
    }
  },
};

export default api;
