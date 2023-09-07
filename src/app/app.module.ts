import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './desktop/sites/chart/chart.component';
import { TestComponent } from './desktop/sites/test/test.component';
import {
  OrganizationChartChildComponent
} from "./desktop/sites/chart/parts/organization-chart-child/organization-chart-child.component";
import {
  OrganizationChartSettingsComponent
} from "./desktop/sites/chart/parts/organization-chart-settings/organization-chart-settings.component";
import {
  OrganizationChartSelectedUserBoxComponent
} from "./desktop/sites/chart/parts/organization-chart-selected-user-box/organization-chart-selected-user-box.component";
import {
  OrganizationChartSettingsOptionsComponent
} from "./desktop/sites/chart/parts/organization-chart-settings-options/organization-chart-settings-options.component";
import {SwitchComponent} from "./desktop/sites/chart/parts/switch/switch.component";
import {
  OrganizationChartSelectedUserBoxContentComponent
} from "./desktop/sites/chart/parts/organization-chart-selected-user-box-content/organization-chart-selected-user-box-content.component";
import {
  OrganizationChartUserBoxComponent
} from "./desktop/sites/chart/parts/organization-chart-user-box/organization-chart-user-box.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {chartReducer} from "./bussiness-domain/store/reducers/chart.reducer";
import {groupsReducer} from "./bussiness-domain/store/reducers/groups.reducer";
import { ChartUserOrGroupComponent } from './desktop/sites/chart/parts/chart-user-or-group/chart-user-or-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TestComponent,
    OrganizationChartChildComponent,
    OrganizationChartSettingsComponent,
    OrganizationChartSelectedUserBoxComponent,
    OrganizationChartSettingsOptionsComponent,
    SwitchComponent,
    OrganizationChartSelectedUserBoxContentComponent,
    OrganizationChartUserBoxComponent,
    ChartUserOrGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ chartData: chartReducer, groupsData: groupsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
