import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DriversTableComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class DriversModule { }
