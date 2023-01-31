import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesTableComponent } from './routes-table/routes-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    RoutesTableComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    AgGridModule
  ]
})
export class RoutesModule { }
