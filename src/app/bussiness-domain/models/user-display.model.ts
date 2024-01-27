import {UserChartModel} from "./user-chart.model";
import {GroupChartModel} from "./group-chart.model";

export interface UserDisplayModel {
  displayChildren?: boolean;
  children?: (UserChartModel | GroupChartModel)[];
  childrenLength?: number;
  childrenGroupsLength?: number;
  childrenPeopleInGroupsLength?: number;
}
