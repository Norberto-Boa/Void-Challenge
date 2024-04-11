import axios from "axios";

export const apiPost = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTcxMjg1MTQ1MywiZXhwIjoxNzEyODU4NjUzfQ.0lS9nuVSCpUygas29CbAL_zVfpZqTJJ9gD1W-wGDoP0"
  }
});