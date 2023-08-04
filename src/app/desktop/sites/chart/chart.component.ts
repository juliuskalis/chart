import { Component } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {OrganizationChartService} from "./services/organization-chart.service";

import {getParentRule} from "../../../bussiness-domain/rules/get-parent.rule";
import {generateObjectStructureRule} from "../../../bussiness-domain/rules/generate-object-structure.rule";
import {calculateChildrenLengthRule} from "../../../bussiness-domain/rules/calculate-children-length.rule";
import {DATA_CONST} from "../../../bussiness-domain/consts/data.const";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  data: any[] = DATA_CONST;
  organizationChart: any[] = [];
  go = true;

  displayChildren: boolean = true;
  displayName: boolean = true;
  displayTitle: boolean = false;
  clipped: string = 'null';
  urlHash: string | null | undefined;

  scaleMultiplier: number = 100;

  selectedUserId: string | undefined;
  selectedUser: any;
  pinnedUserId: any | undefined;
  startFrom: boolean = false;

  presentationMode: boolean = false;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private organizationChartService: OrganizationChartService
  ) {}

  ngOnInit(): void {
    console.log('data', this.data);
    this.checkForHash();
    this.start();
  }

  checkForHash() {
    this.urlHash = window.location.hash.split('#')[1];
    if (this.urlHash && this.data.find(x => x.id === this.urlHash)) {
      this.organizationChartService.pinUserId(this.urlHash);
      // window.location.hash = '';
    }
  }

  // one time call
  start() {
    this.organizationChartService.scaleMultiplier.pipe(takeUntil(this.destroy)).subscribe((val: number) => {
      this.scaleMultiplier < val ? this.calculateNewPosition((val - this.scaleMultiplier) / 100) : this.calculateNewPosition((val - this.scaleMultiplier) / 100);
      this.scaleMultiplier = val;
    });
    this.organizationChartService.selectedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | undefined) => {
      this.selectedUserId = userId;
      if (userId) {
        this.selectedUser = this.data.find((x: any) => x.id === this.selectedUserId);
      }
    });
    this.organizationChartService.pinnedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | null) => {
      if (userId) {
        this.pinnedUserId = userId;
        this.loadOrganigramm();
      }
    });
    this.organizationChartService.startFrom.pipe(takeUntil(this.destroy)).subscribe((start: boolean) => {
      this.startFrom = start;
      this.loadOrganigramm();
    });
    this.organizationChartService.userToScroll.pipe(takeUntil(this.destroy)).subscribe((val: string | undefined) => {
      if (val) {
        this.scrollToId(val);
      }
    });
    this.organizationChartService.presentationMode.pipe(takeUntil(this.destroy)).subscribe((mode: boolean) => {
      this.presentationMode = mode;
    });
  }

  loadOrganigramm() {
    const start = this.data.find(x => x.id === this.pinnedUserId); // finds data for selected value
    if (start) {
      this.organizationChart = [start]; // adds selected data as start reference
      this.organizationChart = generateObjectStructureRule(this.organizationChart); // starts object generation
      calculateChildrenLengthRule(this.organizationChart); // loops through the generated structure and adds the total number of children from children ...
      if (!this.startFrom) {
        this.organizationChart = getParentRule(this.organizationChart); // starts object generation for parents
      }
    }
  }

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

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
