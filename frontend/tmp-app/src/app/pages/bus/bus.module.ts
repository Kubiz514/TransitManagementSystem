import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusTableComponent } from './bus-table/bus-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    BusTableComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class BusModule { }
