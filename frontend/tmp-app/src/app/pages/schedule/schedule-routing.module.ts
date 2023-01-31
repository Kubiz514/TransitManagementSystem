import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
