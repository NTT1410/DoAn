import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/backend-university-entrance";
const SERVER = "http://localhost:8080";
// const SERVER = "http://localhost:8088";

export const endpoints = {
  departments: `${SERVER_CONTEXT}/api/departments`,
  users: `${SERVER_CONTEXT}/api/users`,
  "count-users": `${SERVER_CONTEXT}/api/countusers`,
  "count-comments": `${SERVER_CONTEXT}/api/countcomments`,
  banners: `${SERVER_CONTEXT}/api/banners`,
  "banners-full": `${SERVER_CONTEXT}/api/bannersFull`,
  news: `${SERVER_CONTEXT}/api/news`,
  "count-news": `${SERVER_CONTEXT}/api/countnews`,
  login: `${SERVER_CONTEXT}/api/login/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,
  "user-register": `${SERVER_CONTEXT}/api/user-register/`,
  recruiments: `${SERVER_CONTEXT}/api/recruiments/`,
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
