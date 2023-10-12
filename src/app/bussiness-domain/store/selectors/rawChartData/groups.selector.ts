import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroupsData} from "./groupsDataFeature.selector";
import {GroupWithPeopleModel, UserResponseModel, StoreDataWithGroupIdModel} from "../../../models/userResponse.model";
import {GroupsResponseModel} from "../../../models/groupsResponse.model";
import {getUserInGroupRule} from "../../../rules/groupSelection/getUserInGroup.rule";
import {getUsersInGroupsRule} from "../../../rules/groupSelection/getUsersInGroups.rule";


export const selectGroups = createSelector(
  selectUsersData,
  selectGroupsData,
  (usersState: UserResponseModel[], groupsState: GroupsResponseModel) => {
    const usersInGroups: StoreDataWithGroupIdModel[] = getUserInGroupRule(usersState, groupsState);
    const groups: GroupWithPeopleModel[] = getUsersInGroupsRule(groupsState.groups, usersInGroups);
    return groups;
  }
);
