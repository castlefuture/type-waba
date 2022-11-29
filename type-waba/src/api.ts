import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.38.2.131:8000/api/v1/",
});

export const getSearchs = () =>
  instance.get("winesearch/?search=몬테스").then((response) => response.data);

export const postDetail = () =>
  instance.post("winesearch/detail/11").then((response) => response.data);
