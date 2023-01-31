import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRecordsRoutingModule } from './service-records-routing.module';
import { ServiceRecordsTableComponent } from './service-records-table/service-records-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ServiceRecordsTableComponent
  ],
  imports: [
    CommonModule,
    ServiceRecordsRoutingModule,
    AgGridModule
  ]
})
export class ServiceRecordsModule { }
