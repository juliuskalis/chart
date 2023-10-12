import {GroupsResponseModelGroup} from "../../models/groupsResponse.model";
import {UserResponseModelWithGroupId} from "../../models/userResponse.model";
import {GroupsModel} from "../../models/groups.model";

export function getUsersInGroupsRule(groups: GroupsResponseModelGroup[], users: UserResponseModelWithGroupId[]): GroupsModel[] {
  return groups.map(
    (group: GroupsResponseModelGroup): GroupsModel => {
      return {
        id: group.groupId,
        parentId: group.parentId,
        people: users.filter((user: UserResponseModelWithGroupId): boolean => user.groupId === group.groupId)
      }
    }
  );
}
