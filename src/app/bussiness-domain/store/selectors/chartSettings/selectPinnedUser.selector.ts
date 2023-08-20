import {createSelector} from "@ngrx/store";
import {selectChartData} from "../chartDataFeature.selector";
import {selectGroups} from "../groups.selector";
import {GroupWithPeopleModel, StoreDataModel} from "../../../models/storeData.model";

export const selectPinnedUserSelector = createSelector(
  selectChartData,
  selectGroups,
  (chartState: StoreDataModel[], groups: GroupWithPeopleModel[]) => {
    const rawChartData: (StoreDataModel | GroupWithPeopleModel)[] = [...chartState, ...groups];

    return undefined;
  }
);
