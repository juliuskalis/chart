import {UserChartModel} from "../models/user-chart.model";
import {GroupChartModel} from "../models/group-chart.model";

export function isDataModelType(element: UserChartModel | GroupChartModel): element is UserChartModel {
  return !('people' in element);
}

export function isDataGroupModelType(element: UserChartModel | GroupChartModel): element is GroupChartModel {
  return ('people' in element);
}

export function instanceOfA(object: any): object is GroupChartModel {
  return 'people' in object;
}
