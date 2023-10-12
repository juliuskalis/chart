import {createSelector} from "@ngrx/store";
import {selectUsersData} from "./rawChartData/usersDataFeature.selector";
import {GroupWithPeopleModel, UserResponseModel} from "../../models/userResponse.model";
import {selectGroups} from "./rawChartData/groups.selector";
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
  (usersState: UserResponseModel[], groups: GroupWithPeopleModel[], startUser, pinnedUser) => {
    const rawChartData: (UserResponseModel | GroupWithPeopleModel)[] = [...usersState, ...groups];
    let result;
    if (pinnedUser) {
      result = generateObjectStructureRule(pinnedUser, rawChartData);
      result = getParentRule(result, usersState);
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
