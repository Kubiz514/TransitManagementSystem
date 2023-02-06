import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    ScheduleTableComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    AgGridModule,
    SharedModule
  ]
})
export class ScheduleModule { }
