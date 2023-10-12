import {ActionReducerMap} from "@ngrx/store";
import {StoreDataModel} from "../models/storeData.model";
import {chartReducer} from "./reducers/chart.reducer";
import {GroupsResponseModel} from "../models/groups.model";
import {groupsReducer} from "./reducers/groups.reducer";

export interface AppState {
  usersData: StoreDataModel[];
  groupsData: GroupsResponseModel;
}

export const reducers: ActionReducerMap<AppState> = {
  usersData: chartReducer,
  groupsData: groupsReducer,
}
