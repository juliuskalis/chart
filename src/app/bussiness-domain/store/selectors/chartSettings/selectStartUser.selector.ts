import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../rawChartData/usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {UserResponseModel} from "../../../models/userResponse.model";
import {GroupsModel} from "../../../models/groups.model";

export const selectStartUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupsModel[]) => {
    const rawChartData: (UserResponseModel | GroupsModel)[] = [...usersState, ...groups];

    const x = rawChartData.find((user) => user.id === '1')

    if (x) {
      return [x];
    }

    return [];
  }
);
