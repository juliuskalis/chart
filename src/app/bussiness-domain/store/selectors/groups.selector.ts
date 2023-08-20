import {createSelector} from "@ngrx/store";
import {selectChartData} from "./chartDataFeature.selector";
import {selectGroupsData} from "./groupsDataFeature.selector";
import {GroupWithPeopleModel, StoreDataModel, StoreDataWithGroupIdModel} from "../../models/storeData.model";
import {GroupsModel} from "../../models/groups.model";
import {getUserInGroupRule} from "../../rules/groupSelection/getUserInGroup.rule";
import {getUsersInGroupsRule} from "../../rules/groupSelection/getUsersInGroups.rule";


export const selectGroups = createSelector(
  selectChartData,
  selectGroupsData,
  (chartState: StoreDataModel[], groupsState: GroupsModel) => {
    const usersInGroups: StoreDataWithGroupIdModel[] = getUserInGroupRule(chartState, groupsState);
    const groups: GroupWithPeopleModel[] = getUsersInGroupsRule(groupsState.groups, usersInGroups);
    console.log('groups', groups);
    return groups;
  }
);
