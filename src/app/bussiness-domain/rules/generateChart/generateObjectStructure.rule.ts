import {UserChartModel} from "../../models/user-chart.model";
import {isUserChartModelType} from "../../types/is-chart-model.type";
import {getPeoplesFirstAndLastLetterRule} from "./getPeoplesFirstAndLastLetter.rule";
import {GroupChartModel} from "../../models/group-chart.model";

export function generateObjectStructureRule(
  chartChildren: (UserChartModel | GroupChartModel)[],
  rawChartData: (UserChartModel | GroupChartModel)[]
): (UserChartModel | GroupChartModel)[] {
  return chartChildren.map((el): UserChartModel | GroupChartModel => {
    const children: (UserChartModel | GroupChartModel)[] = rawChartData.filter(x => x.parentId === el.id);
    if (isUserChartModelType(el)) {
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
