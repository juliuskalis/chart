import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './desktop/sites/chart/chart.component';
import {
  OrganizationChartChildComponent
} from "./desktop/sites/chart/parts/chart-core/organization-chart-child/organization-chart-child.component";
import {SwitchComponent} from "./desktop/components/switch/switch.component";
import {
  OrganizationChartUserBoxComponent
} from "./desktop/sites/chart/parts/chart-core/organization-chart-user-box/organization-chart-user-box.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {chartReducer} from "./bussiness-domain/store/reducers/chart.reducer";
import {groupsReducer} from "./bussiness-domain/store/reducers/groups.reducer";
import { ChartUserOrGroupComponent } from './desktop/sites/chart/parts/chart-core/chart-user-or-group/chart-user-or-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    OrganizationChartChildComponent,
    SwitchComponent,
    OrganizationChartUserBoxComponent,
    ChartUserOrGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ usersData: chartReducer, groupsData: groupsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
