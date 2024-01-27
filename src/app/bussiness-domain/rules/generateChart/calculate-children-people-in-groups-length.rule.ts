import {UserChartModel} from "../../models/user-chart.model";
import {GroupChartModel} from "../../models/group-chart.model";
import {isGroupChartModelType} from "../../types/is-chart-model.type";

export function calculateChildrenPeopleInGroupsLengthRule(children: (UserChartModel | GroupChartModel)[]): number {
  let groupChildren: number = 0;
  for (const el of children) {
    el.childrenPeopleInGroupsLength = 0;
    if (isGroupChartModelType(el)) {
      groupChildren = el.people.length;
      if (el.children && el.children.length > 0) {
        el.childrenPeopleInGroupsLength = calculateChildrenPeopleInGroupsLengthRule(el.children);
        groupChildren += el.childrenPeopleInGroupsLength;
      }
    } else {
      if (el.children && el.children.length > 0) {
        el.childrenPeopleInGroupsLength = calculateChildrenPeopleInGroupsLengthRule(el.children);
        groupChildren += el.childrenPeopleInGroupsLength;
      }
    }
  }
  return groupChildren;
}
