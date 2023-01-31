import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusTableComponent } from './bus-table/bus-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    BusTableComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    AgGridModule
  ]
})
export class BusModule { }
