import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../rawChartData/usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {UserModel} from "../../../models/user.model";
import {GroupModel} from "../../../models/group.model";

export const selectPinnedUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserModel[], groups: GroupModel[]) => {
    const rawChartData: (UserModel | GroupModel)[] = [...usersState, ...groups];

    return undefined;
  }
);
