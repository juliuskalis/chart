import {GroupsResponseModelGroup} from "../../models/groupsResponse.model";
import {UserResponseModelWithGroupId} from "../../models/userResponse.model";
import {GroupModel} from "../../models/group.model";

export function getUsersInGroupsRule(groups: GroupsResponseModelGroup[], users: UserResponseModelWithGroupId[]): GroupModel[] {
  return groups.map(
    (group: GroupsResponseModelGroup): GroupModel => {
      return {
        id: group.groupId,
        parentId: group.parentId,
        people: users.filter((user: UserResponseModelWithGroupId): boolean => user.groupId === group.groupId)
      }
    }
  );
}
