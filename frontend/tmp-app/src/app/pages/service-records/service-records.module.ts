import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRecordsRoutingModule } from './service-records-routing.module';
import { ServiceRecordsTableComponent } from './service-records-table/service-records-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceRecordsTableComponent
  ],
  imports: [
    CommonModule,
    ServiceRecordsRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class ServiceRecordsModule { }
