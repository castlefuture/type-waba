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
