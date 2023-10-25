import {GroupsResponseModel, GroupsResponseModelUser} from "../../models/groups-response.model";
import {UserWithGroupIdModel} from "../../models/user-with-group-id.model";
import {UserModel} from "../../models/user.model";

export function getUserInGroupRule(usersState: UserModel[], groupsState: GroupsResponseModel): UserWithGroupIdModel[] {
  const x = groupsState.userInGroup.map((userInGroup: GroupsResponseModelUser): UserWithGroupIdModel | undefined => {
    const user: UserModel | undefined = usersState.find((user: UserModel): boolean => user.id === userInGroup.userId);
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

  const y: UserWithGroupIdModel[] = [];
  x.forEach((group: UserWithGroupIdModel | undefined) => { // removes every undefined element
    if (group) {
      y.push(group);
    }
  });
  return y; // returns new users with groupId
}
