import {UserResponseModelWithGroupId} from "./userResponse.model";

export interface DataModel { // TODO: define a "userBaseModel" from which every other extends
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
  people: (UserResponseModelWithGroupId | undefined)[];
  displayChildren?: boolean;
  children?: (DataModel | DataGroupModel)[];
  childrenLength?: number;
}
