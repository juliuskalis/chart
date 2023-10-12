import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserResponseModel} from "../../../models/userResponse.model";

export const selectUsersDataFeature = createFeatureSelector<UserResponseModel[]>('usersData');

export const selectUsersData = createSelector(
  selectUsersDataFeature,
  (state: UserResponseModel[]) => state
);
