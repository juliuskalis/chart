import {GroupsResponseModel, GroupsResponseModelUser} from "../../models/groupsResponse.model";
import {UserResponseModel, StoreDataWithGroupIdModel} from "../../models/userResponse.model";

export function getUserInGroupRule(usersState: UserResponseModel[], groupsState: GroupsResponseModel): StoreDataWithGroupIdModel[] {
  const x = groupsState.userInGroup.map((userInGroup: GroupsResponseModelUser): StoreDataWithGroupIdModel | undefined => {
    const user: UserResponseModel | undefined = usersState.find((user: UserResponseModel): boolean => user.id === userInGroup.userId);
    if (user) {
      return {
        ...user,
        groupId: userInGroup.groupId
      }
    } else {
      return undefined;
    }
  })

  // const a: StoreDataWithGroupIdModel[] = x.filter((group: StoreDataWithGroupIdModel | undefined): boolean => group !== undefined);

  const y: StoreDataWithGroupIdModel[] = [];
  x.forEach((group: StoreDataWithGroupIdModel | undefined) => {
    if (group) {
      y.push(group);
    }
  });
  return y;
}
