import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroups} from "./groups.selector";
import {UserResponseModel} from "../../../models/userResponse.model";
import {GroupsModel} from "../../../models/groups.model";

export const rawChartDataSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupsModel[]): (UserResponseModel | GroupsModel)[] => {
    return [...usersState, ...groups];
  }
);
