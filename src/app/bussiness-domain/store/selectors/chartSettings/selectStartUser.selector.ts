import {createSelector} from "@ngrx/store";
import {selectChartData} from "../chartDataFeature.selector";
import {selectGroups} from "../groups.selector";
import {GroupWithPeopleModel, StoreDataModel} from "../../../models/storeData.model";

export const selectStartUserSelector = createSelector(
  selectChartData,
  selectGroups,
  (chartState: StoreDataModel[], groups: GroupWithPeopleModel[]) => {
    const rawChartData: (StoreDataModel | GroupWithPeopleModel)[] = [...chartState, ...groups];

    const x = rawChartData.find((user) => user.id === '1')

    if (x) {
      return [x];
    }

    return [];
  }
);
