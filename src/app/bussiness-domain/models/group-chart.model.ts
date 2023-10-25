import {UserDisplayModel} from "./user-display.model";
import {UserWithGroupIdModel} from "./user-with-group-id.model";


export interface GroupChartModel extends UserDisplayModel {
  id: string;
  parentId: string;
  people: UserWithGroupIdModel[];
}
