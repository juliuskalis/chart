import {GroupsResponseModelGroup} from "../../models/groups-response.model";
import {UserWithGroupIdModel} from "../../models/user-with-group-id.model";
import {GroupModel} from "../../models/group.model";

export function getUsersInGroupsRule(groups: GroupsResponseModelGroup[], users: UserWithGroupIdModel[]): GroupModel[] {
  return groups.map(
    (group: GroupsResponseModelGroup): GroupModel => {
      return {
        id: group.groupId,
        parentId: group.parentId,
        people: users.filter((user: UserWithGroupIdModel): boolean => user.groupId === group.groupId)
      }
    }
  );
}
