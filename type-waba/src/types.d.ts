import { useParams } from "react-router-dom";
interface IWineProps {
  wine_id: number;
  kname: string;
  pk: number;
}

export interface IWineDetail {
  wine_id: number;
  wine_picture: string;
  kname: string;
  ename: string;
  winery: string;
  winetype: string;
  kr_country: string;
  kr_region: string;
  kr_grape_list: [];
  sweet: number;
  acidic: number;
  body: number;
  tannic: number;
  notes_list: [];
  food_list: [];
}

export interface IWine {
  wine_detail: IWineDetail;
}

export interface ICellarList {
  pk: number;
  wine_id: number;
  wine_picture: string;
}

export interface ICellar {
  wine_cellar: ICellarList;
}

export interface IReivewWine {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  ename: string;
  winery: string;
  kr_country: string;
  kr_region: string;
}

export interface IReivewReview {
  user: number;
  wine_id: number;
  assessment: string;
  hashtag: [];
}

export interface IReview {
  wine_review: IReivewReview;
  wine: IReivewWine;
}