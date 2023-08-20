export interface GroupsModel {
  groups: GroupModel[];
  userInGroup: UserInGroupModel[];
}

export interface GroupModel {
  groupId: string;
  parentId: string;

}

export interface UserInGroupModel {
  userId: string;
  groupId: string;
}
