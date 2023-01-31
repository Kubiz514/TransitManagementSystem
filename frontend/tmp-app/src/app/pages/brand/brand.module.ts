import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandTableComponent } from './brand-table/brand-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    BrandTableComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    AgGridModule
  ]
})
export class BrandModule { }
