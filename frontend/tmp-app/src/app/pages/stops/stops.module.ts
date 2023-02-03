import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopsRoutingModule } from './stops-routing.module';
import { StopsTableComponent } from './stops-table/stops-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    StopsTableComponent
  ],
  imports: [
    CommonModule,
    StopsRoutingModule,
    SharedModule
  ]
})
export class StopsModule { }
