import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroups} from "./groups.selector";
import {UserResponseModel} from "../../../models/userResponse.model";
import {GroupModel} from "../../../models/group.model";

export const rawChartDataSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupModel[]): (UserResponseModel | GroupModel)[] => {
    return [...usersState, ...groups];
  }
);
