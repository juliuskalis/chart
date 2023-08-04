import {Component, Input, OnInit} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {registerLocaleData} from "@angular/common";
import de from "@angular/common/locales/de";
import {DataModel} from "../../../../../bussiness-domain/models/data.model";
import {getClassesForLayoutRule} from "../../../../../bussiness-domain/rules/getClassesForLayout.rule";

@Component({
  selector: 'app-part-organization-chart-child',
  templateUrl: './organization-chart-child.component.html',
  styleUrls: ['./organization-chart-child.component.scss']
})
export class OrganizationChartChildComponent implements OnInit {

  @Input() orga: DataModel[] | undefined = [];
  @Input() showName: boolean | undefined;
  @Input() showTitle: boolean | undefined;
  @Input() clipped: string | undefined;
  @Input() selectedUser: string | undefined;
  @Input() scaleMultiplier: number = 100;

  peopleWithoutChildren: any[] = [];
  peopleWithChildren: any[] = [];

  customStylesClass: string = '';
  parentBoxPadding: number = 0;

  constructor(private organizationChartService: OrganizationChartService) {
    registerLocaleData(de);
  }

  ngOnInit() {

    if (this.orga) {
      this.orga.forEach(o => { // for every element
        if (o.children?.length === undefined) { // when element has no children
          this.peopleWithoutChildren.push(o);
        } else { // when element has children
          this.peopleWithChildren.push(o);
        }
      });
      this.customStylesClass = getClassesForLayoutRule(this.peopleWithoutChildren.length);
    }
  }

  toggleChildren(id: string | null) {
    if (id) {
      const child = this.peopleWithChildren.find(x => x.id === id); // toggles peopleWitchChildren displayChildren
      if (child) {
        child.displayChildren = !child.displayChildren;
      }
    }
  }

}
