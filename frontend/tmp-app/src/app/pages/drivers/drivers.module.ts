import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    DriversTableComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule
  ]
})
export class DriversModule { }
