import {getChildrenRule} from "./get-children.rule";
import {DataModel} from "../models/data.model";

export function generateObjectStructureRule(org: DataModel[]): DataModel[] {
    for (const el of org) { // for every organigram object
      el.firstAndLastLetter = el.firstname?.charAt(0) + '' + el.lastname?.charAt(0);
      el.displayChildren = true; // sets displayChildren boolean for children
      const children: DataModel[] = getChildrenRule(el.id); // gets children of element
      if (children.length > 0) { // when the element has children
        el.children = generateObjectStructureRule(children); // calls the method again for children of current element
      }
    }
    return org;
}
