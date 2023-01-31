import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRecordsRoutingModule } from './service-records-routing.module';
import { ServiceRecordsTableComponent } from './service-records-table/service-records-table.component';


@NgModule({
  declarations: [
    ServiceRecordsTableComponent
  ],
  imports: [
    CommonModule,
    ServiceRecordsRoutingModule
  ]
})
export class ServiceRecordsModule { }
