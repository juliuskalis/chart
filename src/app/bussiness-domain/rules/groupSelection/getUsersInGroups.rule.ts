import {GroupsResponseModelGroup} from "../../models/groupsResponse.model";
import {GroupWithPeopleModel, StoreDataWithGroupIdModel} from "../../models/userResponse.model";

export function getUsersInGroupsRule(groups: GroupsResponseModelGroup[], users: StoreDataWithGroupIdModel[]): GroupWithPeopleModel[] {
  return groups.map(
    (group: GroupsResponseModelGroup): GroupWithPeopleModel => {
      return {
        id: group.groupId,
        parentId: group.parentId,
        people: users.filter((user: StoreDataWithGroupIdModel): boolean => user.groupId === group.groupId)
      }
    }
  );
}
