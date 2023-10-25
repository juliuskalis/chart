import {ActionReducerMap} from "@ngrx/store";
import {UserModel} from "../models/user.model";
import {chartReducer} from "./reducers/chart.reducer";
import {GroupsResponseModel} from "../models/groups-response.model";
import {groupsReducer} from "./reducers/groups.reducer";

export interface AppState {
  usersData: UserModel[];
  groupsData: GroupsResponseModel;
}

export const reducers: ActionReducerMap<AppState> = {
  usersData: chartReducer,
  groupsData: groupsReducer,
}
