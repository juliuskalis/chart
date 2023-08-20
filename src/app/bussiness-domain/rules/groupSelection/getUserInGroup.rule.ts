import {GroupsModel, UserInGroupModel} from "../../models/groups.model";
import {StoreDataModel, StoreDataWithGroupIdModel} from "../../models/storeData.model";

export function getUserInGroupRule(chartState: StoreDataModel[], groupsState: GroupsModel): StoreDataWithGroupIdModel[] {
  const x = groupsState.userInGroup.map((userInGroup: UserInGroupModel): StoreDataWithGroupIdModel | undefined => {
    const user: StoreDataModel | undefined = chartState.find((user: StoreDataModel): boolean => user.id === userInGroup.userId);
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
