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
  OrganizationChartBoxComponent
} from "./desktop/sites/chart/parts/organization-chart-box/organization-chart-box.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    OrganizationChartBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
