import http from "./httpService";
import apiConfig from "../config.json";

const apiEndPoint = `${apiConfig.apiUrl}api/users/login`;

export function login(username, password) {
  return http.post(apiEndPoint, { userName: username, password: password });
}
export default {
  login,
};
