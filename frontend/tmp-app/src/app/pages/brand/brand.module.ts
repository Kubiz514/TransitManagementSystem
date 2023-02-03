import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandTableComponent } from './brand-table/brand-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    BrandTableComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule
  ]
})
export class BrandModule { }
