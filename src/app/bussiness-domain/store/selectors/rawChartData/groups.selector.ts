import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroupsData} from "./groupsDataFeature.selector";
import {UserWithGroupIdModel} from "../../../models/user-with-group-id.model";
import {GroupsResponseModel} from "../../../models/groups-response.model";
import {getUserInGroupRule} from "../../../rules/groupSelection/getUserInGroup.rule";
import {getUsersInGroupsRule} from "../../../rules/groupSelection/getUsersInGroups.rule";
import {GroupModel} from "../../../models/group.model";
import {UserModel} from "../../../models/user.model";


export const selectGroups = createSelector(
  selectUsersData,
  selectGroupsData,
  (usersState: UserModel[], groupsState: GroupsResponseModel): GroupModel[] => {
    const usersInGroups: UserWithGroupIdModel[] = getUserInGroupRule(usersState, groupsState); // create UsersWithGroupId
    const groups: GroupModel[] = getUsersInGroupsRule(groupsState.groups, usersInGroups); // adds people to group (groupElement)
    return groups; // returns groups filled with users
  }
);
