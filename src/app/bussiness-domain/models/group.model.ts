import {UserResponseModelWithGroupId} from "./userResponse.model";

export interface GroupModel {
  id: string;
  parentId: string;
  people: (UserResponseModelWithGroupId | undefined)[]; // TODO: refactor to UserResponseModel and remove undefined
}
