import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandTableComponent } from './brand-table/brand-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    BrandTableComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule
  ]
})
export class BrandModule { }
