import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroupsData} from "./groupsDataFeature.selector";
import {UserResponseModel, UserResponseModelWithGroupId} from "../../../models/userResponse.model";
import {GroupsResponseModel} from "../../../models/groupsResponse.model";
import {getUserInGroupRule} from "../../../rules/groupSelection/getUserInGroup.rule";
import {getUsersInGroupsRule} from "../../../rules/groupSelection/getUsersInGroups.rule";
import {GroupModel} from "../../../models/group.model";


export const selectGroups = createSelector(
  selectUsersData,
  selectGroupsData,
  (usersState: UserResponseModel[], groupsState: GroupsResponseModel) => {
    const usersInGroups: UserResponseModelWithGroupId[] = getUserInGroupRule(usersState, groupsState); // create UsersWithGroupId
    const groups: GroupModel[] = getUsersInGroupsRule(groupsState.groups, usersInGroups); // adds people to group (groupElement)
    return groups; // returns groups filled with users
  }
);
