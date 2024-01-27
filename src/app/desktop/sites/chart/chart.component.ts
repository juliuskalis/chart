import {AfterViewInit, Component} from '@angular/core';
import {Observable} from "rxjs";

import {Store} from "@ngrx/store";
import {UserChartModel} from "../../../bussiness-domain/models/user-chart.model";
import {
  generateChartStructureSelector
} from "../../../bussiness-domain/store/selectors/generateChartStructure.selector";
import {GroupChartModel} from "../../../bussiness-domain/models/group-chart.model";

// @ts-ignore
import ScrollBooster from 'scrollbooster';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  chartData$: Observable<(UserChartModel | GroupChartModel)[]> = this.store$.select(generateChartStructureSelector);

  scaleMultiplier: number = 100;

  selectedUserId: string | undefined;

  scrollBooster: any;

  constructor(private store$: Store) {}

  ngAfterViewInit() {
    const dimensions = document.getElementById('organigram')?.getClientRects()[0];
    if (dimensions) {
      this.scrollBooster = new ScrollBooster({
        viewport: document.querySelector('#scrollContainer'),
        scrollMode: 'native',
        direction: 'all',
        emulateScroll: false,
      });
      this.scrollBooster.setPosition({
        x: -(dimensions.x * (this.scaleMultiplier / 100)),
        y: -(dimensions.y * (this.scaleMultiplier / 100))
      });
    }
  }
}
