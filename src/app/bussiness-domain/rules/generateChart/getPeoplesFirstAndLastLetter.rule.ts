import {UserResponseModelWithGroupId} from "../../models/userResponse.model";

export function getPeoplesFirstAndLastLetterRule(people: (UserResponseModelWithGroupId | undefined)[]): (UserResponseModelWithGroupId | undefined)[] {
  return people.map((el) =>
    el
    ? {...el, firstAndLastLetter: el?.firstname?.charAt(0) + '' + el?.lastname?.charAt(0)}
    : undefined
  );
}
