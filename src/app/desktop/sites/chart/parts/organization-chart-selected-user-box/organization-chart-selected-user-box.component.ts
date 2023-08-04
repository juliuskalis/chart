import {Component, Input, OnInit} from '@angular/core';
import {slideInAndOut, slideInAndOutPhone, slideInAndOutReversed} from "../../animations/animations";
import {getSelectedUserBoxLayoutRule} from "../../../../../bussiness-domain/rules/getSelectedUserBoxLayout.rule";

@Component({
  selector: 'app-part-organization-chart-selected-user-box',
  templateUrl: './organization-chart-selected-user-box.component.html',
  styleUrls: ['./organization-chart-selected-user-box.component.scss'],
  animations: [slideInAndOut, slideInAndOutReversed, slideInAndOutPhone]
})
export class OrganizationChartSelectedUserBoxComponent implements OnInit{

  @Input() user: any;
  @Input() layoutType: string = '';
  @Input() selectedUserId: string | undefined;
  @Input() selectedUser: any;
  @Input() presentationMode: boolean = false;

  selectedUserBoxLayout: string = 'default';

  ngOnInit(): void {
    this.onResize();
  }

  onResize() {
    this.selectedUserBoxLayout = getSelectedUserBoxLayoutRule(window.innerWidth);
  }
}
