import {DataGroupModel, DataModel} from "../models/data.model";

export function isDataModelType(element: DataModel | DataGroupModel): element is DataModel {
  return !('people' in element);
}

export function isDataGroupModelType(element: DataModel | DataGroupModel): element is DataGroupModel {
  return ('people' in element);
}

export function instanceOfA(object: any): object is DataGroupModel {
  return 'people' in object;
}
