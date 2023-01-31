import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    DriversTableComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    AgGridModule
  ]
})
export class DriversModule { }
