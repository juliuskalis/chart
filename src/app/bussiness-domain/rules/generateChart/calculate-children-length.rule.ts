import {DataGroupModel, DataModel} from "../../models/data.model";

export function calculateChildrenLengthRule(children: (DataModel | DataGroupModel)[]) {
  let res: number = children.length;
  for (const el of children) { // for every organigram object
    if (el.children && el.children.length > 0) { // when the element has children
      el.childrenLength = calculateChildrenLengthRule(el.children); // calls the method again for childrenLength of current element
      res += el.childrenLength; // assigns the returned value
    }
  }
  return res; // returns always o.length
}
