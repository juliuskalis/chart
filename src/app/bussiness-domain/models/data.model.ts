import {StoreDataWithGroupIdModel} from "./storeData.model";

export interface DataModel {
  id: string;
  title: string;
  displayName: string;
  firstAndLastLetter: string;
  parentId: string;
  firstname: string;
  lastname: string;
  department: string;
  mail: string;
  tel: string;
  displayChildren?: boolean;
  children?: (DataModel | DataGroupModel)[];
  childrenLength?: number;
}


export interface DataGroupModel {
  id: string;
  parentId: string;
  people: (StoreDataWithGroupIdModel | undefined)[];
  displayChildren?: boolean;
  children?: (DataModel | DataGroupModel)[];
  childrenLength?: number;
}
