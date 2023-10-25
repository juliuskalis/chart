import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserModel} from "../../../models/user.model";

export const selectUsersDataFeature = createFeatureSelector<UserModel[]>('usersData');

export const selectUsersData = createSelector(
  selectUsersDataFeature,
  (state: UserModel[]) => state
);
