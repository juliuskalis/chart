import {Component, Input} from '@angular/core';
import {User} from "../../models/User";
import {GroupChartModel} from "../../../../../bussiness-domain/models/group-chart.model";
import {isDataGroupModelType, isDataModelType} from "../../../../../bussiness-domain/types/isDataModel.type";

@Component({
  selector: 'app-part-chart-user-or-group',
  templateUrl: './chart-user-or-group.component.html',
  styleUrls: ['./chart-user-or-group.component.scss']
})
export class ChartUserOrGroupComponent {
  @Input() user: User | GroupChartModel | undefined;
  @Input() selectedUser: string | undefined;
  protected readonly isDataModelType = isDataModelType;
  protected readonly isDataGroupModelType = isDataGroupModelType;
}
