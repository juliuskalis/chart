import {createSelector} from "@ngrx/store";
import {selectUsersData} from "../usersDataFeature.selector";
import {selectGroups} from "../groups.selector";
import {GroupWithPeopleModel, StoreDataModel} from "../../../models/storeData.model";

export const selectPinnedUserSelector = createSelector(
  selectUsersData,
  selectGroups,
  (chartState: StoreDataModel[], groups: GroupWithPeopleModel[]) => {
    const rawChartData: (StoreDataModel | GroupWithPeopleModel)[] = [...chartState, ...groups];

    return undefined;
  }
);
