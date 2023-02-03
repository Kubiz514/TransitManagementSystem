import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesTableComponent } from './routes-table/routes-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoutesTableComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class RoutesModule { }
