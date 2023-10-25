import {UserChartModel} from "../models/user-chart.model";
import {GroupChartModel} from "../models/group-chart.model";

export function isUserChartModelType(element: UserChartModel | GroupChartModel): element is UserChartModel {
  return !('people' in element);
}

export function isGroupChartModelType(element: UserChartModel | GroupChartModel): element is GroupChartModel {
  return ('people' in element);
}
