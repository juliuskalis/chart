import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroups} from "./groups.selector";
import {UserModel} from "../../../models/user.model";
import {GroupModel} from "../../../models/group.model";

export const rawChartDataSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserModel[], groups: GroupModel[]): (UserModel | GroupModel)[] => {
    return [...usersState, ...groups];
  }
);
