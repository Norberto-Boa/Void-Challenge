import axios from "axios";

export const apiPost = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});