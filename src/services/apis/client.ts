import axios from "axios";

const SOCIAL_SERVER_URL = "https://todo-pre.herokuapp.com";

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
});

export { socialApiClient };
