import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/backend-university-entrance";
<<<<<<< HEAD
const SERVER = "http://localhost:8088";
=======
const SERVER = "http://localhost:8080";
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19

export const endpoints = {
  departments: `${SERVER_CONTEXT}/api/departments`,
  users: `${SERVER_CONTEXT}/api/users`,
  banners: `${SERVER_CONTEXT}/api/banners`,
  news: `${SERVER_CONTEXT}/api/news`,
<<<<<<< HEAD
  "login": `${SERVER_CONTEXT}/api/login/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,

=======
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
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19
};


//api có chứng thực
export const authApi = () => {
  return axios.create({
    baseURL: SERVER,
    headers: {
      "Authorization": cookie.load("token")
    }
  })
}

export default axios.create({
<<<<<<< HEAD
  baseURL: SERVER
=======
  baseURL: SERVER,
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19
});
