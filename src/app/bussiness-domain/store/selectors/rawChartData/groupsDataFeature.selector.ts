import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GroupsResponseModel} from "../../../models/groups-response.model";

export const selectGroupsDataFeature = createFeatureSelector<GroupsResponseModel>('groupsData');

export const selectGroupsData = createSelector(
  selectGroupsDataFeature,
  (state: GroupsResponseModel) => state
);
