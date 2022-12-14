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

export const postDetail = ({ queryKey }: QueryFunctionContext) => {
  const [, winePk] = queryKey;
  return instance
    .post(`winesearch/detail/${winePk}`, {
      user_id: 3,
    })
    .then((response) => response.data);
};

export const postReview = ({ queryKey }: QueryFunctionContext) => {
  const [, wine_id] = queryKey;
  return instance
    .post(`wineceller/detail/${wine_id}`, { user_id: 3 })
    .then((response) => response.data);
};

export const postRecentSearch = ({ queryKey }: QueryFunctionContext) => {
  const [, winePk] = queryKey;
  return instance
    .post(`wineceller/recentWines`, {
      user_id: 3,
    })
    .then((response) => response.data);
};
