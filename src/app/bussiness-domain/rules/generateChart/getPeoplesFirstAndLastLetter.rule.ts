import {UserWithGroupIdModel} from "../../models/user-with-group-id.model";

export function getPeoplesFirstAndLastLetterRule(people: UserWithGroupIdModel[]): UserWithGroupIdModel[] {
  return people.map((el) =>
    {
      return {...el, firstAndLastLetter: el?.firstname?.charAt(0) + '' + el?.lastname?.charAt(0)}
    }
  );
}
