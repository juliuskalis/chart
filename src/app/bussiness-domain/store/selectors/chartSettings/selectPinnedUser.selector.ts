import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../rawChartData/usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {UserResponseModel} from "../../../models/userResponse.model";
import {GroupModel} from "../../../models/group.model";

export const selectPinnedUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupModel[]) => {
    const rawChartData: (UserResponseModel | GroupModel)[] = [...usersState, ...groups];

    return undefined;
  }
);
