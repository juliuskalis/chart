import {UserChartModel} from "../../models/user-chart.model";
import {UserModel} from "../../models/user.model";
import {GroupModel} from "../../models/group.model";
import {GroupChartModel} from "../../models/group-chart.model";

export function getParentRule(allChildren: (UserChartModel | GroupChartModel)[], rawChartData: (UserModel | GroupModel)[]): (UserChartModel | GroupChartModel)[] {
  let res: (UserChartModel | GroupChartModel)[] = allChildren;
  const parent: UserChartModel | GroupChartModel | undefined = rawChartData.find((x: UserModel | GroupModel): boolean => x.id === allChildren[0].parentId);
  if (parent) {
    parent.displayChildren = true;
    parent.children = allChildren;
    res = getParentRule([parent], rawChartData);
  }
  return res;

}
