import {UserChartModel} from "../../models/user-chart.model";
import {GroupChartModel} from "../../models/group-chart.model";

export function calculateChildrenLengthRule(children: (UserChartModel | GroupChartModel)[]): number {
  let res: number = children.length;
  for (const el of children) { // for every organigram object
    if (el.children && el.children.length > 0) { // when the element has children
      el.childrenLength = calculateChildrenLengthRule(el.children); // calls the method again for childrenLength of current element
      res += el.childrenLength; // assigns the returned value
    }
  }
  return res; // returns always o.length
}
