import {UserChartModel} from "../../models/user-chart.model";
import {GroupChartModel} from "../../models/group-chart.model";
import {isGroupChartModelType} from "../../types/is-chart-model.type";

export function calculateChildrenGroupsLengthRule(children: (UserChartModel | GroupChartModel)[]): number {
  let res: number = 0;
  for (const el of children) {
    el.childrenGroupsLength = 0;
    if (isGroupChartModelType(el)) {
      res++;
      if (el.children && el.children.length > 0) {
        el.childrenGroupsLength = calculateChildrenGroupsLengthRule(el.children);
        res += el.childrenGroupsLength;
      }
    } else {
      if (el.children && el.children.length > 0) {
        el.childrenGroupsLength = calculateChildrenGroupsLengthRule(el.children);
        res += el.childrenGroupsLength;
      }
    }
  }
  return res;
}
