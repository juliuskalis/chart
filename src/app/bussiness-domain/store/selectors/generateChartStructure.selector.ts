import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./usersDataFeature.selector";
import {GroupWithPeopleModel, StoreDataModel} from "../../models/storeData.model";
import {selectGroups} from "./groups.selector";
import {selectStartUserSelector} from "./chartSettings/selectStartUser.selector";
import {selectPinnedUserSelector} from "./chartSettings/selectPinnedUser.selector";
import {generateObjectStructureRule} from "../../rules/generateChart/generateObjectStructure.rule";
import {calculateChildrenLengthRule} from "../../rules/generateChart/calculate-children-length.rule";
import {getParentRule} from "../../rules/generateChart/get-parent.rule";

export const generateChartStructureSelector = createSelector(
  selectUsersData,
  selectGroups,
  selectStartUserSelector,
  selectPinnedUserSelector,
  (chartState: StoreDataModel[], groups: GroupWithPeopleModel[], startUser, pinnedUser) => {
    const rawChartData: (StoreDataModel | GroupWithPeopleModel)[] = [...chartState, ...groups];
    let result;
    if (pinnedUser) {
      result = generateObjectStructureRule(pinnedUser, rawChartData);
      result = getParentRule(result, chartState);
    }
    if (startUser) {
      result = generateObjectStructureRule(startUser, rawChartData);
      if (result) {
        calculateChildrenLengthRule(result);
      }
    }

    return result;
  }
);
