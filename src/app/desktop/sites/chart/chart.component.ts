import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {OrganizationChartService} from "./services/organization-chart.service";

import {Store} from "@ngrx/store";
import {UserChartModel} from "../../../bussiness-domain/models/user-chart.model";
import {
  generateChartStructureSelector
} from "../../../bussiness-domain/store/selectors/generateChartStructure.selector";
import {GroupChartModel} from "../../../bussiness-domain/models/group-chart.model";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  chartData$: Observable<(UserChartModel | GroupChartModel)[]> = this.store$.select(generateChartStructureSelector);

  scaleMultiplier: number = 100;

  selectedUserId: string | undefined;

  constructor(
    private organizationChartService: OrganizationChartService,
    private store$: Store
  ) {}

  scrollToId(value: string, select?: boolean) {
    /**
     * screenWidth and screenHeight do not need to get multiplied by scaleMultiplier
     * they are already affected by the scaled scrollContainer
     */
    const scrollContainer = document.getElementById('scrollContainer');
    const newElementPos = document.getElementById(value)?.getBoundingClientRect();
    const sm = this.scaleMultiplier / 100; // value is in percent but needs to be a decimal
    if (scrollContainer && newElementPos && sm) {
      const screenWidth = scrollContainer?.offsetWidth / 2; // subtracts newElement width from screenWidth to get a value that centers the new element horizontally
      const screenHeight = scrollContainer?.offsetHeight / 2; // subtracts newElement height from screenHeight to get a value that centers the new element vertically
      const centeredValueX = screenWidth - ((newElementPos.width * sm) / 2);
      const centeredValueY = screenHeight - ((newElementPos.height * sm) / 2);
      scrollContainer.scrollTo({
        left: Math.round(scrollContainer.scrollLeft + ((newElementPos.x * sm) - centeredValueX)), // takes currentPosition X of scrollPosition from scrollContainer and adds newElementPos X and subtracts the centeredValueX
        top: Math.round(scrollContainer.scrollTop + ((newElementPos.y * sm) - centeredValueY)), // takes currentPosition Y of scrollPosition from scrollContainer and adds newElementPos Y and subtracts the centeredValueY
        behavior: 'smooth'
      })
    }
    if (select) {
      setTimeout(() => {
        this.organizationChartService.setSelectedUserId(value);
      }, 500);
    }
  }

  calculateNewPosition(val: number) {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollLeft * (1 + val);
      scrollContainer.scrollTop = scrollContainer.scrollTop * (1 + val);
    }
  }
}
