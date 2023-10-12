import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StoreDataModel} from "../../models/storeData.model";

export const selectUsersDataFeature = createFeatureSelector<StoreDataModel[]>('usersData');

export const selectUsersData = createSelector(
  selectUsersDataFeature,
  (state: StoreDataModel[]) => state
);
