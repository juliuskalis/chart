import {DATA_CONST} from "../consts/data.const";

export function getChildrenRule(id: string | null) {
  return DATA_CONST.filter(x => x.parentId === id);
}
