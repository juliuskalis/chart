import {ActionReducerMap} from "@ngrx/store";
import {UserResponseModel} from "../models/userResponse.model";
import {chartReducer} from "./reducers/chart.reducer";
import {GroupsResponseModel} from "../models/groupsResponse.model";
import {groupsReducer} from "./reducers/groups.reducer";

export interface AppState {
  usersData: UserResponseModel[];
  groupsData: GroupsResponseModel;
}

export const reducers: ActionReducerMap<AppState> = {
  usersData: chartReducer,
  groupsData: groupsReducer,
}
