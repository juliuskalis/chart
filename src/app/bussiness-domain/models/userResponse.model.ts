export interface UserResponseModel {
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
}

export interface UserResponseModelWithGroupId extends UserResponseModel { // TODO: when userBaseModel is added rename UserResponseModelWithGroupId to UserModelWithGroupId
  groupId: string;
}
