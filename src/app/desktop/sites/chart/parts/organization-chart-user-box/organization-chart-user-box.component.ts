import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {UserModel} from "../../../../../bussiness-domain/models/user.model";

@Component({
  selector: 'app-part-organization-chart-user-box',
  templateUrl: './organization-chart-user-box.component.html',
  styleUrls: ['./organization-chart-user-box.component.scss']
})
export class OrganizationChartUserBoxComponent {

  @Input() user: UserModel | undefined;
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
}
