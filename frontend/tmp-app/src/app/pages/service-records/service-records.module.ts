import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRecordsRoutingModule } from './service-records-routing.module';
import { ServiceRecordsTableComponent } from './service-records-table/service-records-table.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    ServiceRecordsTableComponent
  ],
  imports: [
    CommonModule,
    ServiceRecordsRoutingModule,
    SharedModule
  ]
})
export class ServiceRecordsModule { }
