import {GroupsResponseModel, GroupsResponseModelUser} from "../../models/groupsResponse.model";
import {UserResponseModel, UserResponseModelWithGroupId} from "../../models/userResponse.model";

export function getUserInGroupRule(usersState: UserResponseModel[], groupsState: GroupsResponseModel): UserResponseModelWithGroupId[] {
  const x = groupsState.userInGroup.map((userInGroup: GroupsResponseModelUser): UserResponseModelWithGroupId | undefined => {
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

  const y: UserResponseModelWithGroupId[] = [];
  x.forEach((group: UserResponseModelWithGroupId | undefined) => { // removes every undefined element
    if (group) {
      y.push(group);
    }
  });
  return y; // returns new users with groupId
}
