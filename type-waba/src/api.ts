import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.38.2.131:8000/api/v1/",
});

export const getSearchs = ({ queryKey }: QueryFunctionContext) => {
  const [, wineName] = queryKey;
  return instance
    .get(`winesearch/?search=${wineName}`)
    .then((response) => response.data);
};

export const postDetail = () =>
  instance.post("winesearch/detail/11").then((response) => response.data);

export const getDetail = () =>
  instance.get(`winesearch/detail/11`).then((response) => response.data);
