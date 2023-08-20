import {GroupModel} from "../../models/groups.model";
import {GroupWithPeopleModel, StoreDataWithGroupIdModel} from "../../models/storeData.model";

export function getUsersInGroupsRule(groups: GroupModel[], users: StoreDataWithGroupIdModel[]): GroupWithPeopleModel[] {
  return groups.map(
    (group: GroupModel): GroupWithPeopleModel => {
      return {
        id: group.groupId,
        parentId: group.parentId,
        people: users.filter((user: StoreDataWithGroupIdModel): boolean => user.groupId === group.groupId)
      }
    }
  );
}
