import {Component, Input, OnInit} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import de from "@angular/common/locales/de";
import {DataGroupModel, DataModel} from "../../../../../bussiness-domain/models/data.model";
import {getClassesForLayoutRule} from "../../../../../bussiness-domain/rules/getClassesForLayout.rule";

@Component({
  selector: 'app-part-organization-chart-child',
  templateUrl: './organization-chart-child.component.html',
  styleUrls: ['./organization-chart-child.component.scss']
})
export class OrganizationChartChildComponent implements OnInit {

  @Input() children: (DataModel | DataGroupModel)[] = [];
  @Input() showName: boolean | undefined;
  @Input() showTitle: boolean | undefined;
  @Input() clipped: string | undefined;
  @Input() selectedUser: string | undefined;
  @Input() scaleMultiplier: number = 100;

  peopleWithoutChildren: (DataModel | DataGroupModel)[] = [];
  peopleWithChildren: (DataModel | DataGroupModel)[] = [];

  customStylesClass: string = '';
  parentBoxPadding: number = 0;

  constructor() {
    registerLocaleData(de);
  }

  ngOnInit() {
    if (this.children) {
      this.children.forEach(child => { // for every element
        if (child.children?.length === undefined) { // when element has no children
          this.peopleWithoutChildren.push(child);
        } else { // when element has children
          this.peopleWithChildren.push(child);
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
