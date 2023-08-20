import {DataGroupModel, DataModel} from "../../models/data.model";
import {StoreDataModel} from "../../models/storeData.model";

export function getParentRule(allChildren: (DataModel | DataGroupModel)[], chartData: StoreDataModel[]): (DataModel | DataGroupModel)[] {
  let res: (DataModel | DataGroupModel)[] = allChildren; // returns parameter
  const parent: DataModel | DataGroupModel | undefined = chartData.find(x => x.id === allChildren[0].parentId); // finds parent of allChildren
  if (parent) {
    parent.displayChildren = true;
    parent.children = allChildren; // asigns allChildren to parent
    res = getParentRule([parent], chartData); // calls method again to get next parent
  }
  return res;

}
