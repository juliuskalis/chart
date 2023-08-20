import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GroupsModel} from "../../models/groups.model";

export const selectGroupsDataFeature = createFeatureSelector<GroupsModel>('groupsData');

export const selectGroupsData = createSelector(
  selectGroupsDataFeature,
  (state: GroupsModel) => state
);
