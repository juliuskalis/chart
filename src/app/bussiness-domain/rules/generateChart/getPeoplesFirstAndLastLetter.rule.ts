import {StoreDataWithGroupIdModel} from "../../models/storeData.model";

export function getPeoplesFirstAndLastLetterRule(people: (StoreDataWithGroupIdModel | undefined)[]): (StoreDataWithGroupIdModel | undefined)[] {
  return people.map((el) =>
    el
    ? {...el, firstAndLastLetter: el?.firstname?.charAt(0) + '' + el?.lastname?.charAt(0)}
    : undefined
  );
}
