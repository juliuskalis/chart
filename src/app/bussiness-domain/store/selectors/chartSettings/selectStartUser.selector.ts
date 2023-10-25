import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../rawChartData/usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {UserModel} from "../../../models/user.model";
import {GroupModel} from "../../../models/group.model";

export const selectStartUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserModel[], groups: GroupModel[]) => {
    const rawChartData: (UserModel | GroupModel)[] = [...usersState, ...groups];

    const x = rawChartData.find((user) => user.id === '1')

    if (x) {
      return [x];
    }

    return [];
  }
);
