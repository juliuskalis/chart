export interface GroupsResponseModel {
  groups: GroupsResponseModelGroup[];
  userInGroup: GroupsResponseModelUser[];
}

export interface GroupsResponseModelGroup {
  groupId: string;
  parentId: string;
}

export interface GroupsResponseModelUser {
  userId: string;
  groupId: string;
}
