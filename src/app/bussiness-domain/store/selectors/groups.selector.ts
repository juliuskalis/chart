import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroupsData} from "./groupsDataFeature.selector";
import {GroupWithPeopleModel, StoreDataModel, StoreDataWithGroupIdModel} from "../../models/storeData.model";
import {GroupsResponseModel} from "../../models/groups.model";
import {getUserInGroupRule} from "../../rules/groupSelection/getUserInGroup.rule";
import {getUsersInGroupsRule} from "../../rules/groupSelection/getUsersInGroups.rule";


export const selectGroups = createSelector(
  selectUsersData,
  selectGroupsData,
  (chartState: StoreDataModel[], groupsState: GroupsResponseModel) => {
    const usersInGroups: StoreDataWithGroupIdModel[] = getUserInGroupRule(chartState, groupsState);
    const groups: GroupWithPeopleModel[] = getUsersInGroupsRule(groupsState.groups, usersInGroups);
    return groups;
  }
);
