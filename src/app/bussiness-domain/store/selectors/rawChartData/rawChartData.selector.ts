import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {selectGroups} from "./groups.selector";
import {GroupWithPeopleModel, UserResponseModel} from "../../../models/userResponse.model";

export const rawChartDataSelector = createSelector(
  selectUsersData,
  selectGroups,
  (usersState: UserResponseModel[], groups: GroupWithPeopleModel[]): (UserResponseModel | GroupWithPeopleModel)[] => {
    return [...usersState, ...groups];
  }
);
