import {DataGroupModel, DataModel} from "../../models/data.model";
import {isDataModelType} from "../../types/isDataModel.type";
import {getPeoplesFirstAndLastLetterRule} from "./getPeoplesFirstAndLastLetter.rule";

export function generateObjectStructureRule(chartChildren: (DataModel | DataGroupModel)[], chartData: (DataModel | DataGroupModel)[]): (DataModel | DataGroupModel)[] {
  return chartChildren.map((el) => {
    const children: (DataModel | DataGroupModel)[] = chartData.filter(x => x.parentId === el.id);
    if (isDataModelType(el)) {
        return {
          ...el,
          displayChildren: true,
          children: children.length > 0 ? generateObjectStructureRule(children, chartData) : undefined,
          firstAndLastLetter: el.firstname?.charAt(0) + '' + el.lastname?.charAt(0)
        }
    } else {
      return {
        ...el,
        displayChildren: true,
        children: children.length > 0 ? generateObjectStructureRule(children, chartData) : undefined,
        people: getPeoplesFirstAndLastLetterRule(el.people)
      }
    }
  });
}
