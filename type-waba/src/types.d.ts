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
  date: string;
}

export interface IReview {
  wine_review: IReivewReview;
  wine: IReivewWine;
}

export interface IRecentCellar {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  ename: string;
}

export interface ISimilarCeller {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  winery: string;
}

export interface ISimilarSearch {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  winery: string;
}

export interface ITrend {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  ename: string;
}

export interface IRecommand {
  wine_id: number;
  wine_picture: string;
  winetype: string;
  kname: string;
  winery: string;
}

export interface IRecommandTagList {
  [wine: number]: IRecommand;
}

export interface IRecommandTagWine {
  wine_list: IRecommandTagList;
}

export interface IRecommandTag {
  script: string;
  wine_list: Array;
}

export interface IRecommandFood {
  foodscript1?: string;
  foodscript2?: string;
  foodscript3?: string;
  foodscript4?: string;
  wine_list1?: Array;
  wine_list2?: Array;
  wine_list3?: Array;
  wine_list4?: Array;
}
