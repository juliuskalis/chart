import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../rawChartData/usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {GroupWithPeopleModel, UserResponseModel} from "../../../models/userResponse.model";

export const selectPinnedUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupWithPeopleModel[]) => {
    const rawChartData: (UserResponseModel | GroupWithPeopleModel)[] = [...usersState, ...groups];

    return undefined;
  }
);
