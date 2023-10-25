import {UserChartModel} from "../../models/user-chart.model";
import {UserModel} from "../../models/user.model";
import {GroupModel} from "../../models/group.model";
import {GroupChartModel} from "../../models/group-chart.model";

export function getParentRule(allChildren: (UserChartModel | GroupChartModel)[], rawChartData: (UserModel | GroupModel)[]): (UserChartModel | GroupChartModel)[] {
  let res: (UserChartModel | GroupChartModel)[] = allChildren; // returns parameter
  const parent: UserChartModel | GroupChartModel | undefined = rawChartData.find((x: UserModel | GroupModel): boolean => x.id === allChildren[0].parentId); // finds parent of allChildren
  if (parent) {
    parent.displayChildren = true;
    parent.children = allChildren; // assigns allChildren to parent
    res = getParentRule([parent], rawChartData); // calls method again to get next parent
  }
  return res;

}
