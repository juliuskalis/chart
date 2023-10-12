import {DataGroupModel, DataModel} from "../../models/data.model";
import {isDataModelType} from "../../types/isDataModel.type";
import {getPeoplesFirstAndLastLetterRule} from "./getPeoplesFirstAndLastLetter.rule";

export function generateObjectStructureRule(chartChildren: (DataModel | DataGroupModel)[], rawChartData: (DataModel | DataGroupModel)[]): (DataModel | DataGroupModel)[] {
  return chartChildren.map((el) => {
    const children: (DataModel | DataGroupModel)[] = rawChartData.filter(x => x.parentId === el.id);
    if (isDataModelType(el)) {
        return {
          ...el,
          displayChildren: true,
          children: children.length > 0 ? generateObjectStructureRule(children, rawChartData) : undefined,
          firstAndLastLetter: el.firstname?.charAt(0) + '' + el.lastname?.charAt(0)
        }
    } else {
      return {
        ...el,
        displayChildren: true,
        children: children.length > 0 ? generateObjectStructureRule(children, rawChartData) : undefined,
        people: getPeoplesFirstAndLastLetterRule(el.people)
      }
    }
  });
}
