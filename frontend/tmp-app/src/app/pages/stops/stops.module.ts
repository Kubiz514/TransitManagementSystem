import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopsRoutingModule } from './stops-routing.module';
import { StopsTableComponent } from './stops-table/stops-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    StopsTableComponent
  ],
  imports: [
    CommonModule,
    StopsRoutingModule,
    AgGridModule
  ]
})
export class StopsModule { }
