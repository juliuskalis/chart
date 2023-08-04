import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponent} from "./desktop/sites/chart/chart.component";
import {TestComponent} from "./desktop/sites/test/test.component";

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  { path: 'chart', component: ChartComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: 'chart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
