import {DataGroupModel, DataModel} from "../../models/data.model";
import {UserResponseModel} from "../../models/userResponse.model";

export function getParentRule(allChildren: (DataModel | DataGroupModel)[], usersState: UserResponseModel[]): (DataModel | DataGroupModel)[] {
  let res: (DataModel | DataGroupModel)[] = allChildren; // returns parameter
  const parent: DataModel | DataGroupModel | undefined = usersState.find(x => x.id === allChildren[0].parentId); // finds parent of allChildren
  if (parent) {
    parent.displayChildren = true;
    parent.children = allChildren; // asigns allChildren to parent
    res = getParentRule([parent], usersState); // calls method again to get next parent
  }
  return res;

}
