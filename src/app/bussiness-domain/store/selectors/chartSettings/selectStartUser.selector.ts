import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../usersDataFeature.selector";
import {selectGroups} from "../rawChartData/groups.selector";
import {GroupWithPeopleModel, UserResponseModel} from "../../../models/userResponse.model";

export const selectStartUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupWithPeopleModel[]) => {
    const rawChartData: (UserResponseModel | GroupWithPeopleModel)[] = [...usersState, ...groups];

    const x = rawChartData.find((user) => user.id === '1')

    if (x) {
      return [x];
    }

    return [];
  }
);
