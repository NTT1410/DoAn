import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/backend-university-entrance";
const SERVER = "http://localhost:8080";

export const endpoints = {
  departments: `${SERVER_CONTEXT}/api/departments`,
  users: `${SERVER_CONTEXT}/api/users`,
  banners: `${SERVER_CONTEXT}/api/banners`,
  news: `${SERVER_CONTEXT}/api/news`,
  login: `${SERVER_CONTEXT}/api/login/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,
  "user-register": `${SERVER_CONTEXT}/api/user-register/`,
};

//api có chứng thực
export const authApi = () => {
  return axios.create({
    baseURL: SERVER,
    headers: {
      Authorization: cookie.load("token"),
    },
  });
};

export default axios.create({
  baseURL: SERVER,
});
