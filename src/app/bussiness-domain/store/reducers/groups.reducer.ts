import {createReducer} from "@ngrx/store";
import {GroupsModel} from "../../models/groups.model";


export const initialState: GroupsModel = {
  groups: [
    {
      groupId: 'g-1',
      parentId: '24'
    }
  ],
  userInGroup: [
    {
      groupId: 'g-1',
      userId: '4'
    },
    {
      groupId: 'g-1',
      userId: '29'
    }
  ]
};

export const groupsReducer = createReducer(
  initialState,
);
