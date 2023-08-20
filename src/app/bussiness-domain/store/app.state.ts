import {ActionReducerMap} from "@ngrx/store";
import {StoreDataModel} from "../models/storeData.model";
import {chartReducer} from "./reducers/chart.reducer";
import {GroupsModel} from "../models/groups.model";
import {groupsReducer} from "./reducers/groups.reducer";

export interface AppState {
  chartData: StoreDataModel[];
  groupsData: GroupsModel;
}

export const reducers: ActionReducerMap<AppState> = {
  chartData: chartReducer,
  groupsData: groupsReducer,
}
