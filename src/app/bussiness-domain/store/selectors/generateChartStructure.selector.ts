import {createSelector} from "@ngrx/store";
import {UserModel} from "../../models/user.model";
import {selectStartUserSelector} from "./chartSettings/selectStartUser.selector";
import {selectPinnedUserSelector} from "./chartSettings/selectPinnedUser.selector";
import {generateObjectStructureRule} from "../../rules/generateChart/generateObjectStructure.rule";
import {calculateChildrenLengthRule} from "../../rules/generateChart/calculate-children-length.rule";
import {getParentRule} from "../../rules/generateChart/get-parent.rule";
import {rawChartDataSelector} from "./rawChartData/rawChartData.selector";
import {GroupModel} from "../../models/group.model";
import {UserChartModel} from "../../models/user-chart.model";
import {GroupChartModel} from "../../models/group-chart.model";
import {calculateChildrenPeopleInGroupsLengthRule} from "../../rules/generateChart/calculate-children-people-in-groups-length.rule";
import {calculateChildrenGroupsLengthRule} from "../../rules/generateChart/calculate-children-groups-length.rule";

export const generateChartStructureSelector = createSelector(
  rawChartDataSelector,
  selectStartUserSelector,
  selectPinnedUserSelector,
  (
    rawChartData: (UserModel | GroupModel)[],
    startUser,
    pinnedUser
  ): (UserChartModel | GroupChartModel)[] => {
    let result: (UserChartModel | GroupChartModel)[] = [];
    if (pinnedUser) {
      result = generateObjectStructureRule(pinnedUser, rawChartData);
      result = getParentRule(result, rawChartData);
    }
    if (startUser) {
      result = generateObjectStructureRule(startUser, rawChartData);
      if (result) {
        calculateChildrenLengthRule(result);
        calculateChildrenGroupsLengthRule(result);
        calculateChildrenPeopleInGroupsLengthRule(result);
      }
    }

    return result;
  }
);
