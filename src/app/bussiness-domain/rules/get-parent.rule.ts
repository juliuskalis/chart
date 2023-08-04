import {DATA_CONST} from "../consts/data.const";
import {DataModel} from "../models/data.model";

export function getParentRule(allChildren: DataModel[]): DataModel[] {
    let res: DataModel[] = allChildren; // returns parameter
    const parent: DataModel | undefined = DATA_CONST.find(x => x.id === allChildren[0].parentId); // finds parent of allChildren
    if (parent) {
      parent.displayChildren = true;
      parent.children = allChildren; // asigns allChildren to parent
      res = getParentRule([parent]); // calls method again to get next parent
    }
    return res;

}
