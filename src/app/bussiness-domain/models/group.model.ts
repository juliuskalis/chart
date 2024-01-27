import {UserWithGroupIdModel} from "./user-with-group-id.model";

export interface GroupModel {
  id: string;
  parentId: string;
  people: UserWithGroupIdModel[];
}
