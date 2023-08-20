import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StoreDataModel} from "../../models/storeData.model";

export const selectChartDataFeature = createFeatureSelector<StoreDataModel[]>('chartData');

export const selectChartData = createSelector(
  selectChartDataFeature,
  (state: StoreDataModel[]) => state
);
