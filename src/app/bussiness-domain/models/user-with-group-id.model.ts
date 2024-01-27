import {UserModel} from "./user.model";

export interface UserWithGroupIdModel extends UserModel {
  groupId: string;
}
