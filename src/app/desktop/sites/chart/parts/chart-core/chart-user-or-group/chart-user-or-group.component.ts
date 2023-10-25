import {Component, Input, OnInit} from '@angular/core';
import {GroupChartModel} from "../../../../../../bussiness-domain/models/group-chart.model";
import {isGroupChartModelType, isUserChartModelType} from "../../../../../../bussiness-domain/types/is-chart-model.type";
import {UserChartModel} from "../../../../../../bussiness-domain/models/user-chart.model";

@Component({
  selector: 'app-part-chart-user-or-group',
  templateUrl: './chart-user-or-group.component.html',
  styleUrls: ['./chart-user-or-group.component.scss']
})
export class ChartUserOrGroupComponent implements OnInit {
  @Input() user: UserChartModel | GroupChartModel | undefined;
  @Input() selectedUser: string | undefined;

  isUser: UserChartModel | undefined;
  isGroup: GroupChartModel | undefined;

  ngOnInit() {
    if (this.user && isUserChartModelType(this.user)) {
      this.isUser = this.user;
    } else if (this.user && isGroupChartModelType(this.user)) {
      this.isGroup = this.user;
    }
  }
}
