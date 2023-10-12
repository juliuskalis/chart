import {DataGroupModel, DataModel} from "../../models/data.model";
import {GroupWithPeopleModel, UserResponseModel} from "../../models/userResponse.model";

export function getParentRule(allChildren: (DataModel | DataGroupModel)[], rawChartData: (UserResponseModel | GroupWithPeopleModel)[]): (DataModel | DataGroupModel)[] {
  let res: (DataModel | DataGroupModel)[] = allChildren; // returns parameter
  const parent: DataModel | DataGroupModel | undefined = rawChartData.find(x => x.id === allChildren[0].parentId); // finds parent of allChildren
  if (parent) {
    parent.displayChildren = true;
    parent.children = allChildren; // asigns allChildren to parent
    res = getParentRule([parent], rawChartData); // calls method again to get next parent
  }
  return res;

}
