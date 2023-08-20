import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {User} from "../../models/User";
import {DataGroupModel} from "../../../../../bussiness-domain/models/data.model";
import {isDataModelType} from "../../../../../bussiness-domain/types/isDataModel.type";

@Component({
  selector: 'app-part-organization-chart-box',
  templateUrl: './organization-chart-box.component.html',
  styleUrls: ['./organization-chart-box.component.scss']
})
export class OrganizationChartBoxComponent {

  @Input() user: User | DataGroupModel | undefined;
  @Input() selectedUser: string | undefined;

  constructor(private organizationChartService: OrganizationChartService) {}

  selectUser(userId: string | null | undefined) {
    if (userId) {
      if (this.selectedUser !== userId) {
        this.organizationChartService.setSelectedUserId(userId);
      } else {
        this.organizationChartService.setSelectedUserId(undefined);
      }
    }
  }

  protected readonly isDataModelType = isDataModelType;
}
