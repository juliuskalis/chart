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

// TODO: refactor
export interface StoreDataWithGroupIdModel {
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
  groupId: string;
}

export interface GroupWithPeopleModel {
  id: string;
  parentId: string;
  people: (StoreDataWithGroupIdModel | undefined)[];
}
